"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import { signInWithGoogleIdToken } from "@/lib/auth";

const GOOGLE_CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
  "465838562032-biuglkr63nusvj9t39nh3qkkn0ra922u.apps.googleusercontent.com";

const SESSION_DISMISSED_KEY = "slidez_onetap_dismissed_session";
const GIS_SCRIPT_SRC = "https://accounts.google.com/gsi/client";

export default function GoogleOneTap() {
  const { user, loading } = useAuth();
  const hasPromptedRef = useRef(false);

  useEffect(() => {
    // Expose developer helpers in browser console
    if (typeof window !== "undefined") {
      window.__resetGoogleOneTapCooldown = () => {
        document.cookie = "g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
        try {
          sessionStorage.removeItem(SESSION_DISMISSED_KEY);
        } catch {
          // ignore
        }
        // eslint-disable-next-line no-console
        console.info(
          "[Slidez Google One Tap] Cooldown cleared. Reloading page to prompt again..."
        );
        window.location.reload();
      };
    }
  }, []);

  useEffect(() => {
    // If auth state is still loading or user is already signed in with Google, do not prompt
    if (loading || user) {
      if (user && typeof window !== "undefined" && window.google?.accounts?.id) {
        try {
          window.google.accounts.id.cancel();
        } catch {
          // ignore
        }
      }
      return;
    }

    if (!GOOGLE_CLIENT_ID) {
      // eslint-disable-next-line no-console
      console.warn("[Slidez Google One Tap] Missing Google Client ID.");
      return;
    }

    // Check if dismissed in this tab session
    try {
      if (sessionStorage.getItem(SESSION_DISMISSED_KEY) === "true") {
        // eslint-disable-next-line no-console
        console.info("[Slidez Google One Tap] Prompt was dismissed earlier in this tab session.");
        return;
      }
    } catch {
      // sessionStorage unavailable (e.g. strict privacy mode)
    }

    let isCancelled = false;
    let pollInterval: NodeJS.Timeout | null = null;

    function triggerPrompt() {
      if (isCancelled || !window.google?.accounts?.id) return;

      const gis = window.google.accounts.id;

      try {
        // eslint-disable-next-line no-console
        console.info("[Slidez Google One Tap] Initializing Google One Tap with client:", GOOGLE_CLIENT_ID);

        gis.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: async (response) => {
            if (!response?.credential) return;
            try {
              // eslint-disable-next-line no-console
              console.info("[Slidez Google One Tap] Credential received, authenticating with Firebase...");
              await signInWithGoogleIdToken(response.credential);
              // eslint-disable-next-line no-console
              console.info("[Slidez Google One Tap] Successfully signed in!");
            } catch (err) {
              // eslint-disable-next-line no-console
              console.error("[Slidez Google One Tap] Sign-in with credential failed:", err);
            }
          },
          auto_select: false,
          cancel_on_tap_outside: false,
          context: "signin",
          itp_support: true,
          use_fedcm_for_prompt: true,
        });

        gis.prompt((notification) => {
          if (notification.isNotDisplayed()) {
            const reason = notification.getNotDisplayedReason();
            // eslint-disable-next-line no-console
            console.info("[Slidez Google One Tap] Prompt not displayed. Reason:", reason);

            if (reason === "suppressed_by_user") {
              // eslint-disable-next-line no-console
              console.info(
                "[Slidez Google One Tap] Google cooldown is active because user dismissed prompt previously. Run `window.__resetGoogleOneTapCooldown()` to reset cooldown."
              );
            } else if (reason === "opt_out_or_no_session") {
              // eslint-disable-next-line no-console
              console.info(
                "[Slidez Google One Tap] No active Google account session found in this browser profile, or user opted out."
              );
            } else if (reason === "origin_mismatch") {
              // eslint-disable-next-line no-console
              console.warn(
                `[Slidez Google One Tap] Origin mismatch: '${window.location.origin}' is not added to Authorized JavaScript Origins in Google Cloud Console.`
              );
            }
          } else if (notification.isSkippedMoment()) {
            const reason = notification.getSkippedReason();
            // eslint-disable-next-line no-console
            console.info("[Slidez Google One Tap] Prompt skipped. Reason:", reason);
          } else if (notification.isDismissedMoment()) {
            const reason = notification.getDismissedReason();
            // eslint-disable-next-line no-console
            console.info("[Slidez Google One Tap] Dismissed by user:", reason);
            try {
              sessionStorage.setItem(SESSION_DISMISSED_KEY, "true");
            } catch {
              // ignore
            }
          }
        });

        hasPromptedRef.current = true;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("[Slidez Google One Tap] Initialization error:", err);
      }
    }

    // Ensure GIS script is present in the DOM
    if (!window.google?.accounts?.id) {
      const existingScript = document.querySelector(`script[src*="accounts.google.com/gsi/client"]`);
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = GIS_SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          triggerPrompt();
        };
        document.head.appendChild(script);
      }

      // Poll until script registers global or max 5 seconds
      const start = Date.now();
      pollInterval = setInterval(() => {
        if (window.google?.accounts?.id) {
          if (pollInterval) clearInterval(pollInterval);
          triggerPrompt();
        } else if (Date.now() - start > 5000) {
          if (pollInterval) clearInterval(pollInterval);
        }
      }, 100);
    } else {
      triggerPrompt();
    }

    // Expose manual prompt function for testing anytime
    if (typeof window !== "undefined") {
      window.__promptGoogleOneTap = () => {
        document.cookie = "g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
        try {
          sessionStorage.removeItem(SESSION_DISMISSED_KEY);
        } catch {
          // ignore
        }
        triggerPrompt();
      };
    }

    return () => {
      isCancelled = true;
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [user, loading]);

  return null;
}
