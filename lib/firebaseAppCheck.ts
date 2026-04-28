import { initializeAppCheck, ReCaptchaV3Provider, type AppCheck } from "firebase/app-check";
import { firebaseApp } from "@/lib/firebaseClient";

const g = globalThis as typeof globalThis & { __slidezAppCheckInit?: Promise<AppCheck> };

function isLocalDev() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

// Initializes Firebase App Check so callable functions are able to obtain a token.
// Without App Check, HTTPS callable requests can be rejected before a network call is made.
export async function initFirebaseAppCheck(): Promise<AppCheck> {
  if (g.__slidezAppCheckInit) return g.__slidezAppCheckInit;

  g.__slidezAppCheckInit = (async () => {
    const debugMode = isLocalDev();

    // In local dev, enable debug token mode so App Check can work without real attestation.
    if (isLocalDev()) {
      (self as unknown as { FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string }).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    const siteKey = process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY;

    if (!siteKey && !debugMode) {
      throw new Error(
        "App Check site key is missing. Set `NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY` in your environment."
      );
    }

    // If no site key is provided in debug mode, we can still initialize with a dummy key
    // because the FIREBASE_APPCHECK_DEBUG_TOKEN flag will override the provider logic.
    // However, the dummy key should look like a valid reCAPTCHA key to avoid client-side validation issues.
    const effectiveSiteKey = siteKey || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // standard reCAPTCHA test key

    return initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaV3Provider(effectiveSiteKey),
      isTokenAutoRefreshEnabled: true,
    });
  })();

  return g.__slidezAppCheckInit;
}

