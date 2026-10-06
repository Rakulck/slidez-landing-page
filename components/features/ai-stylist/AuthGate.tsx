"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

function GoogleLogo({ className = "w-4 h-4 shrink-0" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export type AuthGateProps = {
  previewUrl?: string | null;
  onSignIn: () => Promise<void> | void;
  busy?: boolean;
  error?: string | null;
  className?: string;
};

/**
 * Overlay placed directly on top of the result image alone.
 * Features a white transparent glossy backdrop with blur and a Google sign-in button.
 */
export default function AuthGate({
  onSignIn,
  busy = false,
  error = null,
  className = "",
}: AuthGateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-5 sm:p-6 text-center select-none backdrop-blur-xl bg-white/40 border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_12px_36px_rgba(0,0,0,0.15)] ${className}`}
    >
      {/* Top glossy shimmer highlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent pointer-events-none rounded-t-[inherit]"
      />

      {/* Glossy badge with lock icon */}
      <div className="relative mb-3 flex items-center justify-center w-11 h-11 rounded-full bg-white/85 backdrop-blur-md border border-white shadow-md text-neutral-800">
        <Lock className="w-5 h-5" />
      </div>

      {/* Header and copy */}
      <h3 className="relative text-base sm:text-lg font-bold text-neutral-900 tracking-tight leading-snug">
        Sign in to reveal look
      </h3>
      <p className="relative mt-1 mb-5 text-[11px] sm:text-xs text-neutral-700 font-medium max-w-[210px] leading-relaxed">
        Google sign-in unlocks your try-on render and saves it to your account
      </p>

      {/* Prominent Google Sign-in button */}
      <button
        type="button"
        onClick={onSignIn}
        disabled={busy}
        className="relative w-full max-w-[220px] h-11 flex items-center justify-center gap-2.5 px-4 rounded-full bg-white text-neutral-900 text-xs sm:text-sm font-semibold shadow-[0_4px_16px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-neutral-50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-60 border border-neutral-200/80"
      >
        {busy ? (
          <span className="w-4 h-4 border-2 border-neutral-300 border-t-neutral-800 rounded-full animate-spin" />
        ) : (
          <GoogleLogo />
        )}
        <span>{busy ? "Signing in…" : "Sign in with Google"}</span>
      </button>

      {error && (
        <p className="relative mt-2 text-[11px] font-semibold text-red-600 bg-red-50/90 px-2.5 py-0.5 rounded-full border border-red-200/60 shadow-xs">
          {error}
        </p>
      )}
    </motion.div>
  );
}
