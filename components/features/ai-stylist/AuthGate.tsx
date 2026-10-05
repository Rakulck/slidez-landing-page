"use client";

import { motion, AnimatePresence } from "framer-motion";

function GoogleLogo({ className = "w-4 h-4" }: { className?: string }) {
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

type AuthGateProps = {
  /** First result image URL, rendered blurred behind the gate card. */
  previewUrl: string | null;
  onSignIn: () => Promise<void>;
  busy: boolean;
  error: string | null;
};

/**
 * Blocks the try-on result reveal behind Google sign-in. The generated image is
 * shown blurred as a teaser; signing in (linking the anonymous session) reveals it.
 */
export default function AuthGate({ previewUrl, onSignIn, busy, error }: AuthGateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Sign in to see your try-on"
    >
      {/* Backdrop: blurred teaser of the result */}
      <div className="absolute inset-0 overflow-hidden bg-black/80">
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewUrl}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover blur-2xl scale-110 opacity-60 select-none pointer-events-none"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      {/* Card: bottom sheet on mobile, centered modal on desktop */}
      <motion.div
        initial={{ y: 48, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 32, opacity: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="relative w-full sm:max-w-md sm:mx-4 mb-0 sm:mb-0 rounded-t-[28px] sm:rounded-[28px] border border-white/12 bg-[#101014]/95 backdrop-blur-2xl px-7 pt-8 pb-8 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
      >
        <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-white/20 sm:hidden" aria-hidden="true" />
        <p className="text-center text-2xl mb-2" aria-hidden="true">
          🎉
        </p>
        <h2 className="text-center text-xl sm:text-2xl font-semibold text-white tracking-tight">
          Your try-on is ready
        </h2>
        <p className="mt-2 text-center text-sm text-white/60 leading-relaxed">
          Sign in with Google to see it and save it to your account.
        </p>

        <button
          type="button"
          onClick={onSignIn}
          disabled={busy}
          className="mt-6 w-full h-[50px] flex items-center justify-center gap-2.5 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-white/90 active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-60"
        >
          {busy ? (
            <span className="w-4 h-4 border-2 border-black/20 border-t-black/70 rounded-full animate-spin" />
          ) : (
            <GoogleLogo />
          )}
          {busy ? "Signing in…" : "Sign in with Google"}
        </button>

        <AnimatePresence>
          {error ? (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 text-center text-xs text-red-400/90"
            >
              {error}
            </motion.p>
          ) : null}
        </AnimatePresence>

        <p className="mt-4 text-center text-[11px] text-white/35">
          Your try-on is saved — it will appear right after you sign in.
        </p>
      </motion.div>
    </motion.div>
  );
}
