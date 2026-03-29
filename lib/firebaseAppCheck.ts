import { initializeAppCheck, ReCaptchaV3Provider, type AppCheck } from "firebase/app-check";
import { firebaseApp } from "@/lib/firebaseClient";

let appCheckInit: Promise<AppCheck> | null = null;

function isLocalDev() {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

// Initializes Firebase App Check so callable functions are able to obtain a token.
// Without App Check, HTTPS callable requests can be rejected before a network call is made.
export async function initFirebaseAppCheck(): Promise<AppCheck> {
  if (appCheckInit) return appCheckInit;

  appCheckInit = (async () => {
    const debugMode = isLocalDev();

    // In local dev, enable debug token mode so App Check can work without real attestation.
    if (isLocalDev()) {
      (self as unknown as { FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string }).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
    }

    const siteKeyFromEnv = process.env.NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY;
    const siteKey = siteKeyFromEnv && siteKeyFromEnv.trim().length > 0 ? siteKeyFromEnv : debugMode ? "debug" : "";

    if (!siteKey) {
      throw new Error(
        "App Check site key is missing. Set `NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY` in your environment."
      );
    }

    return initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaV3Provider(siteKey),
      isTokenAutoRefreshEnabled: true,
    });
  })();

  return appCheckInit;
}

