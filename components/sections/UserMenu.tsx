"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavbarTheme, type NavBgTheme } from "@/hooks/useNavbarTheme";
import { signInWithGoogle, signOutUser } from "@/lib/auth";

const SHELL: Record<NavBgTheme, string> = {
  "dark-bg": "bg-white/10 border-white/20",
  "light-bg": "bg-black/40 border-white/15",
};

const LIQUID_GLASS = "liquid-glass-nav";

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

function userInitial(name: string | null, email: string | null): string {
  const source = (name ?? email ?? "?").trim();
  return source.charAt(0).toUpperCase() || "?";
}

export default function UserMenu({ mobile = false }: { mobile?: boolean }) {
  const { user, loading } = useAuth();
  const navTheme = useNavbarTheme();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  async function handleSignIn() {
    setError(false);
    setBusy(true);
    try {
      await signInWithGoogle();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  async function handleSignOut() {
    setOpen(false);
    try {
      await signOutUser();
    } catch {
      // Sign-out rarely fails; nothing user-actionable to show here.
    }
  }

  const dropdownSurface = `rounded-xl border overflow-hidden ${LIQUID_GLASS} ${SHELL[navTheme]}`;

  if (loading) {
    return (
      <div
        aria-hidden="true"
        className={
          mobile
            ? "h-[46px] w-full rounded-full bg-white/[0.06] animate-pulse"
            : "h-10 w-10 rounded-full bg-white/[0.06] animate-pulse"
        }
      />
    );
  }

  // ---- Signed out: "Sign in" button that opens the Google account chooser ----
  if (!user) {
    return (
      <div className={mobile ? "w-full" : ""}>
        <button
          type="button"
          onClick={handleSignIn}
          disabled={busy}
          className={
            mobile
              ? "w-full h-[46px] flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.05] text-white/80 text-sm font-medium hover:bg-white/[0.09] hover:text-white active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-60"
              : "inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-full border border-white/30 text-white/90 hover:border-white/45 hover:text-white hover:bg-white/[0.08] active:scale-[0.97] transition-all duration-500 cursor-pointer disabled:opacity-60"
          }
        >
          {busy ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white/80 rounded-full animate-spin" />
          ) : (
            <GoogleLogo />
          )}
          Sign in
        </button>
        {error && (
          <p className="mt-2 text-[11px] text-red-400/90 text-center">
            Sign-in failed. Please try again.
          </p>
        )}
      </div>
    );
  }

  // ---- Signed in: avatar button with account dropdown ----
  const initial = userInitial(user.displayName, user.email);

  if (mobile) {
    return (
      <div className={`rounded-2xl border border-white/10 bg-white/[0.04] p-4 ${mobile ? "w-full" : ""}`}>
        <div className="flex items-center gap-3">
          {user.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.photoURL}
              alt={user.displayName ?? "Account"}
              className="h-10 w-10 rounded-full object-cover border border-white/20"
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="h-10 w-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-sm font-semibold text-white">
              {initial}
            </span>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              {user.displayName ?? "Slidez user"}
            </p>
            {user.email && (
              <p className="text-xs text-white/50 truncate">{user.email}</p>
            )}
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/[0.08] active:scale-[0.97] transition-all duration-200 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative inline-flex">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Account menu"
        className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/[0.06] p-1 pr-1.5 hover:border-white/45 hover:bg-white/[0.1] active:scale-[0.97] transition-all duration-300 cursor-pointer"
      >
        {user.photoURL ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.photoURL}
            alt={user.displayName ?? "Account"}
            className="h-8 w-8 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="h-8 w-8 rounded-full bg-white/15 flex items-center justify-center text-sm font-semibold text-white">
            {initial}
          </span>
        )}
        <ChevronDown
          className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Account"
          className={`z-[110] w-64 ${dropdownSurface}`}
          style={{ position: "absolute", top: "calc(100% + 0.75rem)", right: 0 }}
        >
          <div className="flex items-center gap-3 px-4 py-3.5">
            {user.photoURL ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.photoURL}
                alt=""
                className="h-10 w-10 rounded-full object-cover border border-white/20"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="h-10 w-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-sm font-semibold text-white">
                {initial}
              </span>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {user.displayName ?? "Slidez user"}
              </p>
              {user.email && (
                <p className="text-xs text-white/50 truncate">{user.email}</p>
              )}
            </div>
          </div>
          <div className="border-t border-white/10">
            <button
              type="button"
              role="menuitem"
              onClick={handleSignOut}
              className="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/[0.08] transition-colors duration-150 cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
