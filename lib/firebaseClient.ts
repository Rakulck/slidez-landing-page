import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase config for the web client.
// Note: Firebase "apiKey" is not a secret; access is still protected via callable auth/App Check on the backend.
const firebaseConfig = {
  apiKey: "AIzaSyBbw12Popdhf5pxPXSeV5xSDDkkW8D-tdc",
  authDomain: "slidez-be88c.firebaseapp.com",
  projectId: "slidez-be88c",
  storageBucket: "slidez-be88c.appspot.com",
  messagingSenderId: "465838562032",
  appId: "1:465838562032:web:4ac0bf4b4d9a9f270b8035",
  measurementId: "G-VYQTJCP697",
} as const;

export const firebaseApp = (() => {
  const apps = getApps();
  if (apps.length > 0) return apps[0]!;
  return initializeApp(firebaseConfig);
})();

export const auth = getAuth(firebaseApp);
export const functions = getFunctions(firebaseApp);
export const storage = getStorage(firebaseApp);
export const firestoreDb = getFirestore(firebaseApp);

declare global {
  interface Window {
    __SLIDEZ_FIREBASE_DEBUG__?: {
      appInitialized: boolean;
      appName: string;
    };
  }
}

// Debug flag for local verification in the browser console.
// You can run: `window.__SLIDEZ_FIREBASE_DEBUG__`
if (typeof window !== "undefined") {
  window.__SLIDEZ_FIREBASE_DEBUG__ = {
    appInitialized: true,
    appName: firebaseApp.name,
  };
}

// Initialize App Check lazily to avoid blocking module evaluation.
// This is important for callable Functions protected by App Check.
if (typeof window !== "undefined") {
  void import("@/lib/firebaseAppCheck").then((m) => m.initFirebaseAppCheck()).catch(() => {
    // If backend doesn't enforce App Check in this environment, we don't want the whole UI to fail.
    // However, logging here makes debugging "no API call" much easier.
    // eslint-disable-next-line no-console
    console.error("[Slidez] App Check init failed.");
  });
}

