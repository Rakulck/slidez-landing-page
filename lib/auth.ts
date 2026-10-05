import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { auth } from "@/lib/firebaseClient";

const googleProvider = new GoogleAuthProvider();
// Always show the Google account chooser, like other sites do,
// so users can pick between the Google accounts on their device.
googleProvider.setCustomParameters({ prompt: "select_account" });

/** Opens the Google account chooser popup and signs the user in. */
export async function signInWithGoogle(): Promise<void> {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err: unknown) {
    const code = (err as { code?: string })?.code ?? "";
    // Closing the popup is a deliberate user action, not an error.
    if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return;
    throw err;
  }
}

/**
 * Signs in using a Google ID token from Google One Tap / Google Identity Services (GIS).
 */
export async function signInWithGoogleIdToken(idToken: string): Promise<void> {
  const credential = GoogleAuthProvider.credential(idToken);
  await signInWithCredential(auth, credential);
}

/** Signs the current user out and disables Google One Tap auto-selection. */
export async function signOutUser(): Promise<void> {
  if (typeof window !== "undefined") {
    try {
      window.google?.accounts?.id?.disableAutoSelect?.();
    } catch {
      // Ignore GIS cleanup error
    }
  }
  return signOut(auth);
}

