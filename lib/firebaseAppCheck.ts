import { initializeAppCheck, ReCaptchaV3Provider, CustomProvider, type AppCheck } from "firebase/app-check";
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

    if (debugMode && !siteKey) {
      // In local dev without a site key, use a CustomProvider that returns a dummy token.
      // This avoids loading the reCAPTCHA v3 script and prevents console errors.
      return initializeAppCheck(firebaseApp, {
        provider: new CustomProvider({
          getToken: async () => {
            return {
              token: "local-dev-dummy-token",
              expireTimeMillis: Date.now() + 3600000, // 1 hour expiration
            };
          },
        }),
        isTokenAutoRefreshEnabled: true,
      });
    }

    // Otherwise, use the real (or debug-intercepted) ReCaptchaV3Provider
    return initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaV3Provider(siteKey!),
      isTokenAutoRefreshEnabled: true,
    });
  })();

  return g.__slidezAppCheckInit;
}


