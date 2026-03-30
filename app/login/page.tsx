"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebaseClient";

const googleProvider = new GoogleAuthProvider();

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);

  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) return;
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      window.location.href = "/";
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? "";
      if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
        setError("Invalid email or password.");
      } else if (code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setError(null);
    setGoogleLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/";
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? "";
      if (code !== "auth/popup-closed-by-user") {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (!email.trim()) {
      setError("Enter your email above to reset your password.");
      return;
    }
    setError(null);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setResetSent(true);
    } catch {
      setError("Could not send reset email. Check the address and try again.");
    }
  }

  return (
    <div className="min-h-dvh bg-[#080808] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.025] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-[rgba(192,192,192,0.03)] rounded-full blur-[80px]" />
      </div>

      {/* Logo */}
      <motion.a
        href="/"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 flex items-center gap-2 font-bold text-xl tracking-tight text-white"
      >
        Slidez
      </motion.a>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="relative w-full max-w-[400px]"
      >
        {/* Shimmer border */}
        <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-br from-white/14 via-white/4 to-white/10 pointer-events-none" />

        <div
          className="relative rounded-[27px] border border-white/[0.08] bg-[rgba(255,255,255,0.03)] px-8 py-9"
          style={{
            backdropFilter: "blur(20px)",
            boxShadow:
              "0 24px 64px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full border border-white/10 bg-white/[0.04]">
              <Sparkles className="w-3 h-3 text-white/50" />
              <span className="text-[10px] font-semibold text-white/50 tracking-[0.14em] uppercase">
                AI Stylist
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight mb-1.5">
              Welcome back
            </h1>
            <p className="text-sm text-white/40">
              Sign in to your Slidez account
            </p>
          </div>

          {/* Google sign-in */}
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading || loading}
            className="w-full flex items-center justify-center gap-2.5 h-[46px] rounded-full border border-white/12 bg-white/[0.05] text-white/75 text-sm font-medium
              hover:bg-white/[0.09] hover:border-white/20 hover:text-white
              active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mb-5"
          >
            {googleLoading ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white/80 rounded-full animate-spin" />
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            )}
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-white/[0.07]" />
            <span className="text-[11px] text-white/25 tracking-widest uppercase">or</span>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>

          {/* Form */}
          <form onSubmit={handleEmailSignIn} className="flex flex-col gap-3">
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(null); setResetSent(false); }}
                autoComplete="email"
                required
                className="w-full h-[46px] px-5 rounded-full border border-[rgba(192,192,192,0.18)] bg-[rgba(255,255,255,0.03)] text-white text-sm placeholder:text-white/25
                  focus:outline-none focus:border-[rgba(192,192,192,0.42)] focus:bg-[rgba(255,255,255,0.05)]
                  transition-all duration-200"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(null); }}
                autoComplete="current-password"
                required
                className="w-full h-[46px] px-5 pr-12 rounded-full border border-[rgba(192,192,192,0.18)] bg-[rgba(255,255,255,0.03)] text-white text-sm placeholder:text-white/25
                  focus:outline-none focus:border-[rgba(192,192,192,0.42)] focus:bg-[rgba(255,255,255,0.05)]
                  transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors duration-150 cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {/* Error / Reset message */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] text-red-400/90 text-center px-2"
              >
                {error}
              </motion.p>
            )}
            {resetSent && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] text-white/50 text-center px-2"
              >
                Reset link sent — check your inbox.
              </motion.p>
            )}

            {/* Forgot password */}
            <div className="flex justify-end -mt-1">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[11px] text-white/30 hover:text-white/60 transition-colors duration-150 cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || googleLoading}
              className="mt-1 w-full h-[46px] flex items-center justify-center gap-2 rounded-full bg-white text-black text-sm font-semibold
                shadow-[0_2px_16px_rgba(255,255,255,0.22),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                hover:shadow-[0_4px_24px_rgba(255,255,255,0.38),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.95)]
                hover:scale-[1.02] hover:-translate-y-px
                active:scale-[0.97] active:shadow-[0_1px_6px_rgba(255,255,255,0.15)]
                transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-black/30 border-t-black/80 rounded-full animate-spin" />
              ) : (
                <>
                  Sign in
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Sign up link */}
          <p className="mt-7 text-center text-[12px] text-white/30">
            Don&apos;t have an account?{" "}
            <a
              href="https://linkly.link/2FWYm"
              className="text-white/60 hover:text-white underline underline-offset-2 transition-colors duration-150"
            >
              Download the app
            </a>
          </p>
        </div>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 text-[11px] text-white/20 text-center"
      >
        By signing in you agree to our{" "}
        <a href="/terms" className="hover:text-white/40 underline underline-offset-2 transition-colors duration-150">
          Terms
        </a>{" "}
        &amp;{" "}
        <a href="/privacy" className="hover:text-white/40 underline underline-offset-2 transition-colors duration-150">
          Privacy Policy
        </a>
      </motion.p>
    </div>
  );
}
