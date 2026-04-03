import { signInAnonymously } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, query as firestoreQuery, where, getDocs } from "firebase/firestore";
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
  const callable = httpsCallable(functions, "analyzeOutfitIntent");
  const res = await callable(args);
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

/**
 * Fetches the actual checkout/shop URLs for products directly from Firestore
 * to bypass any API stripping. Handles falling back to brand_products or id fields.
 */
export async function fetchProductPurchaseUrls(productIdsToFetch: string[]): Promise<Record<string, string>> {
  const fetchedUrls: Record<string, string> = {};
  if (productIdsToFetch.length === 0) return fetchedUrls;

  try {
    // Firestore "in" queries are limited to 10 max items, safely batch them
    for (let i = 0; i < productIdsToFetch.length; i += 10) {
      const batch = productIdsToFetch.slice(i, i + 10);
      
      // Try standard "products" collection
      let q = firestoreQuery(
        collection(firestoreDb, "products"),
        where("__name__", "in", batch)
      );
      let querySnapshot = await getDocs(q);

      // Fallback 1: Try "brand_products" collection if user mistyped the collection name
      if (querySnapshot.docs.length === 0) {
        q = firestoreQuery(
          collection(firestoreDb, "brand_products"),
          where("__name__", "in", batch)
        );
        querySnapshot = await getDocs(q);
      }
      
      // Fallback 2: Try querying by "id" field instead of __name__ if document ID is different
      if (querySnapshot.docs.length === 0) {
        q = firestoreQuery(
          collection(firestoreDb, "products"),
          where("id", "in", batch)
        );
        querySnapshot = await getDocs(q);
      }

      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data() as Record<string, any>;
        // Look through product schema and variants array for the sourceUrl
        let sourceUrl = data.sourceUrl ?? data.shopUrl ?? data.product_url ?? data.url;
        if (!sourceUrl && Array.isArray(data.variants) && data.variants.length > 0) {
          sourceUrl = data.variants[0].sourceUrl ?? data.variants[0].shopUrl;
        }
        if (!sourceUrl && Array.isArray(data.productVariants) && data.productVariants.length > 0) {
          sourceUrl = data.productVariants[0].sourceUrl ?? data.productVariants[0].shopUrl;
        }
        if (sourceUrl) {
          fetchedUrls[docSnap.id] = sourceUrl;
          // Also map any internal 'id' field to catch Fallback 2
          if (data.id && typeof data.id === 'string') fetchedUrls[data.id] = sourceUrl;
        }
      });
    }
  } catch (error) {
    console.error("[Slidez] Error fetching product URLs from Firestore:", error);
  }
  
  return fetchedUrls;
}
