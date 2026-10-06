"use client";

import { useEffect } from "react";
import { trackWebEvent } from "@/lib/webAnalytics";

/**
 * Site-wide click tracker. Mount once in the root layout.
 *
 * Any element with a `data-track="event_name"` attribute gets its clicks logged
 * to `web_events` automatically, with optional JSON props from `data-track-props`.
 * Tracking a new button anywhere on the site = adding one HTML attribute, no code.
 */
export default function WebEventTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest?.("[data-track]");
      if (!el) return;
      const event = el.getAttribute("data-track");
      if (!event) return;
      let props: Record<string, unknown> = {};
      const raw = el.getAttribute("data-track-props");
      if (raw) {
        try {
          const parsed: unknown = JSON.parse(raw);
          if (parsed && typeof parsed === "object") props = parsed as Record<string, unknown>;
        } catch {
          // Malformed props are ignored; the event still logs.
        }
      }
      trackWebEvent(event, props);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
