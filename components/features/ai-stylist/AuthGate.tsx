"use client";

import { motion } from "framer-motion";
import { Sparkles, Lock } from "lucide-react";

export interface AuthGateProps {
  previewUrl: string | null;
  onSignIn: () => Promise<void> | void;
  busy: boolean;
  error?: string | null;
}

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

export default function AuthGate({
  previewUrl,
  onSignIn,
  busy,
  error,
}: AuthGateProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-gate-heading"
      className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      {/* ── Backdrop with blurred ambient glow ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Ambient background glow from preview image if available */}
      {previewUrl && (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none opacity-30 blur-3xl scale-125 bg-center bg-no-repeat bg-cover transition-opacity duration-700"
          style={{ backgroundImage: `url(${previewUrl})` }}
        />
      )}

      {/* ── Modal / Bottom Sheet Card ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full sm:max-w-md rounded-t-[32px] sm:rounded-3xl border border-white/15 bg-[rgba(14,14,18,0.92)] backdrop-blur-2xl p-6 sm:p-7 shadow-[0_28px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.12)] overflow-hidden"
      >
        {/* Top subtle light accent */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

        {/* Mobile drag handle indicator */}
        <div className="sm:hidden w-10 h-1 rounded-full bg-white/20 mx-auto mb-4" />

        {/* ── Teaser preview container (blurred result image) ──────── */}
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-black/60 mb-5 shadow-inner">
          {previewUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={previewUrl}
              alt="Blurred try-on preview"
              className="w-full h-full object-cover object-top filter blur-md sm:blur-lg scale-110 select-none pointer-events-none transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.04] to-transparent">
              <Sparkles className="w-8 h-8 text-white/30 animate-pulse mb-2" />
              <span className="text-xs text-white/40 font-mono">Render complete</span>
            </div>
          )}

          {/* Dark gradient overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          {/* Floating lock badge */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-xl border border-white/20 shadow-xl">
              <Lock className="w-3.5 h-3.5 text-white/80" />
              <span className="text-[11px] font-semibold tracking-wide text-white/90">
                Ready to reveal
              </span>
            </div>
          </div>
        </div>

        {/* ── Header and copy ────────────────────────────────────────── */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.08] border border-white/12 text-[11px] font-semibold text-white/80 tracking-wider uppercase mb-2.5">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>AI Try-On Generated</span>
          </div>

          <h3
            id="auth-gate-heading"
            className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug"
          >
            Your try-on is ready 🎉
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm mx-auto">
            Sign in with Google to see it and save it to your account.
          </p>
        </div>

        {/* ── Action: Google Sign-in button ─────────────────────────── */}
        <div className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={onSignIn}
            disabled={busy}
            className="w-full h-12 flex items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/[0.08] text-white text-sm font-semibold hover:border-white/50 hover:bg-white/[0.14] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-60 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          >
            {busy ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white/90 rounded-full animate-spin" />
            ) : (
              <GoogleLogo />
            )}
            Sign in with Google
          </button>

          {error && (
            <p className="text-[11px] text-red-400 text-center font-medium">
              {error}
            </p>
          )}

          <p className="text-[11px] text-white/35 text-center mt-1">
            Free to use &middot; No password required &middot; Preserves your session
          </p>
        </div>
      </motion.div>
    </div>
  );
}
