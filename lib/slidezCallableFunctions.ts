import { signInAnonymously } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, functions, storage, firestoreDb } from "@/lib/firebaseClient";
import { initFirebaseAppCheck } from "@/lib/firebaseAppCheck";

export type Gender = "Women" | "Men";

let anonUserIdPromise: Promise<string> | null = null;

export async function ensureAnonymousUserId(): Promise<string> {
  await initFirebaseAppCheck().catch(() => {
    // If App Check is not enforced in this environment, we still want the UI to function.
  });

  const currentUser = auth.currentUser;
  if (currentUser?.uid) return currentUser.uid;

  if (!anonUserIdPromise) {
    anonUserIdPromise = signInAnonymously(auth).then((result) => {
      if (!result.user?.uid) {
        throw new Error("Anonymous sign-in succeeded but user id was missing.");
      }
      return result.user.uid;
    });
  }

  return anonUserIdPromise;
}

export async function analyzeOutfitIntentCallable(args: {
  prompt: string;
  gender?: Gender | string;
  analyzedImages?: Array<{ category: string; color?: string; style?: string }>;
}): Promise<unknown> {
  const normalizedGender = args.gender
    ? args.gender === "Women" ? "female" : args.gender === "Men" ? "male" : args.gender.toLowerCase()
    : undefined;
  const callable = httpsCallable(functions, "analyzeOutfitIntent");
  const res = await callable({ ...args, gender: normalizedGender });
  return res.data as unknown;
}

export async function detectPersonGenderCallable(args: {
  imageBase64: string;
  mimeType?: string;
}): Promise<"male" | "female" | null> {
  const callable = httpsCallable(functions, "detectPersonGender");
  const res = await callable(args);
  const data = res.data as { gender?: "male" | "female" | null };
  return data?.gender ?? null;
}

export async function analyzeClothingImageCallable(args: {
  imageBase64: string;
  mimeType?: string;
  analyzeAll?: boolean;
}): Promise<unknown> {
  const callable = httpsCallable(functions, "analyzeClothingImage");
  const res = await callable(args);
  return res.data as unknown;
}

export async function fetchOutfitProductsCallable(args: {
  intent: unknown;
  productsPerCategory?: number;
  userId: string;
}): Promise<unknown> {
  const callable = httpsCallable(functions, "fetchOutfitProducts");
  const res = await callable(args);
  return res.data as unknown;
}

export async function executeMultiItemTryOnCallable(args: {
  recommendations: unknown[];
  userId: string;
  userProvidedItems?: Array<{ category: string; imageBase64: string; mimeType?: string }>;
  feetVisible?: boolean;
  handsVisible?: boolean;
}): Promise<unknown> {
  const callable = httpsCallable(functions, "executeMultiItemTryOn", { timeout: 300_000 });
  const res = await callable(args);
  return res.data as unknown;
}

/**
 * Fetches an image from a URL and returns it as a base64 string + mime type.
 * Works with local Next.js public files (e.g. "/model-man.jpg") and remote URLs.
 */
export async function fetchImageBase64(src: string): Promise<{ imageBase64: string; mimeType: string }> {
  const res = await fetch(src);
  if (!res.ok) throw new Error(`Failed to fetch image: ${src}`);
  const blob = await res.blob();
  const mimeType = blob.type || "image/jpeg";
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result);
      const commaIdx = dataUrl.indexOf(",");
      resolve({ imageBase64: commaIdx >= 0 ? dataUrl.slice(commaIdx + 1) : dataUrl, mimeType });
    };
    reader.onerror = () => reject(new Error("Failed to read image blob."));
    reader.readAsDataURL(blob);
  });
}

/**
 * Uploads a person photo (base64) to Firebase Storage and saves the public URL
 * to Firestore under users/{userId}.stylePersonalityPicture so that
 * executeMultiItemTryOn can find it via getUserImageUrl().
 */
export async function setupPersonPhoto(userId: string, imageBase64: string, mimeType: string): Promise<void> {
  const ext = mimeType.split("/")[1]?.split(";")[0] ?? "jpg";
  const storageRef = ref(storage, `tryon_stylist/${userId}/person_photo.${ext}`);

  // Convert base64 → Blob for upload
  const dataUrl = `data:${mimeType};base64,${imageBase64}`;
  const blobRes = await fetch(dataUrl);
  const blob = await blobRes.blob();

  await uploadBytes(storageRef, blob, { contentType: mimeType });
  const url = await getDownloadURL(storageRef);

  await setDoc(
    doc(firestoreDb, "users", userId),
    { stylePersonalityPicture: url },
    { merge: true }
  );
}

