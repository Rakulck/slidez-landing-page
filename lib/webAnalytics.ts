"use client";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, firestoreDb } from "@/lib/firebaseClient";
import { ensureAnonymousUserId } from "@/lib/slidezCallableFunctions";

/** Mobile vs desktop, matching the convention used by the other platform trackers. */
export function webDevice(): "mobile" | "desktop" {
  if (typeof navigator === "undefined") return "desktop";
  return /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";
}

/**
 * Logs one web analytics event to the web-only `web_events` collection.
 *
 * Fire-and-forget: never throws, never blocks the UI. The collection is web-only,
 * so these writes can never affect the extension / Shopify / app analytics.
 *
 * @param event  Event name, e.g. "product_clicked", "gate_sign_in_clicked".
 * @param properties  Optional event payload (must be JSON-safe).
 */
export function trackWebEvent(event: string, properties?: Record<string, unknown>): void {
  try {
    void (async () => {
      try {
        const userId = auth.currentUser?.uid ?? (await ensureAnonymousUserId());
        await addDoc(collection(firestoreDb, "web_events"), {
          userId,
          platform: "web",
          device: webDevice(),
          event,
          properties: properties ?? {},
          url: typeof window !== "undefined" ? window.location.pathname : "",
          createdAt: serverTimestamp(),
        });
      } catch (err) {
        console.warn(`web_events write failed (${event}):`, err);
      }
    })();
  } catch (err) {
    console.warn(`trackWebEvent failed (${event}):`, err);
  }
}
