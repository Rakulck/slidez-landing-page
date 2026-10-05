import {
  GoogleAuthProvider,
  linkWithPopup,
  signInWithCredential,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import type { FirebaseError } from "firebase/app";
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
 * Upgrades an anonymous session to a Google account, preserving the UID
 * (and everything stored under it, e.g. try-on history).
 *
 * IMPORTANT: uses linkWithPopup, NOT signInWithPopup. signInWithPopup on an
 * anonymous session *replaces* the user, orphaning the anonymous UID.
 */
export async function linkAnonymousWithGoogle(): Promise<void> {
  const user = auth.currentUser;
  if (!user) {
    await signInWithGoogle();
    return;
  }
  if (!user.isAnonymous) return; // Already a real account.

  try {
    await linkWithPopup(user, googleProvider);
  } catch (err: unknown) {
    const code = (err as { code?: string })?.code ?? "";
    if (code === "auth/credential-already-in-use") {
      // This Google account already exists: sign straight into it.
      // Try-ons done under the old anonymous UID are orphaned (accepted).
      const cred = GoogleAuthProvider.credentialFromError(err as FirebaseError);
      if (cred) {
        await signInWithCredential(auth, cred);
        return;
      }
    }
    if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return;
    throw err;
  }
}

/** Signs the current user out. */
export function signOutUser(): Promise<void> {
  return signOut(auth);
}
