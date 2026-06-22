"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { trackDownloadClick } from "@/lib/gtag";
import { useNavbarTheme, type NavBgTheme } from "@/hooks/useNavbarTheme";

const navLinks = [
  { label: "Features",  href: "/#features"  },
  { label: "Extension", href: "/#extension" },
  { label: "FAQ",       href: "/#faq"       },
  { label: "Blogs",     href: "/blog"       },
];

const AI_STYLIST_LINKS = [
  { label: "Outfit Ideas",            href: "/outfit-ideas"            },
  { label: "What Should I Wear",      href: "/what-to-wear"            },
  { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas" },
  { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas"     },
];

const SHELL_LAYOUT =
  "w-full max-w-4xl pointer-events-auto transition-all duration-500 rounded-2xl border";

const SHELL: Record<NavBgTheme, { base: string; scrolled: string }> = {
  "dark-bg": {
    base: "bg-white/10 border-white/20",
    scrolled: "bg-white/[0.14] border-white/25",
  },
  "light-bg": {
    base: "bg-black/40 border-white/15",
    scrolled: "bg-black/[0.48] border-white/20",
  },
};

const LIQUID_GLASS = "liquid-glass-nav";

const LINK =
  "text-sm font-medium text-white/75 hover:text-white transition-colors duration-500";
const DROPDOWN_LINK =
  "block px-4 py-2.5 text-sm font-medium leading-snug whitespace-nowrap text-white/85 hover:text-white hover:bg-white/[0.08] transition-colors duration-150";
const LINK_MUTED =
  "text-sm font-medium text-white/60 hover:text-white transition-colors duration-500";
const ICON =
  "text-white/60 hover:text-white transition-colors duration-500";
const CHROME_BTN =
  "px-4 py-2.5 text-sm font-semibold rounded-full border border-white/30 text-white/90 hover:border-white/45 hover:text-white hover:bg-white/[0.08] active:scale-[0.97] transition-all duration-500 cursor-pointer";
const DIVIDER = "border-white/10";

export default function Navbar() {
  const navTheme = useNavbarTheme();
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [aiOpen, setAiOpen]       = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const aiRef = useRef<HTMLDivElement>(null);

  const shell = SHELL[navTheme];
  const shellSurface = scrolled ? shell.scrolled : shell.base;
  const glassState = scrolled ? "is-scrolled" : "";
  const shellClass = `${SHELL_LAYOUT} ${LIQUID_GLASS} ${glassState} ${shellSurface}`;
  const dropdownClass = `rounded-xl border overflow-hidden ${LIQUID_GLASS} ${glassState} ${shellSurface}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (aiRef.current && !aiRef.current.contains(e.target as Node)) {
        setAiOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex justify-center pt-4 px-4 pointer-events-none">
      <svg
        aria-hidden="true"
        width="0"
        height="0"
        className="absolute overflow-hidden"
        style={{ position: "absolute" }}
      >
        <defs>
          <filter id="liquid-glass-nav" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.008"
              numOctaves="2"
              seed="4"
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale="28"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div className={shellClass}>
        <div className="px-5 h-[68px] flex items-center justify-between" suppressHydrationWarning>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Slidez"
              width={56}
              height={56}
              className={`h-14 w-14 transition-all duration-500 ${
                navTheme === "dark-bg" ? "mix-blend-screen" : ""
              }`}
              priority
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className={LINK}>
                {l.label}
              </a>
            ))}

            <div ref={aiRef} className="relative inline-flex">
              <button
                type="button"
                onClick={() => setAiOpen((v) => !v)}
                className={`inline-flex items-center gap-1.5 ${LINK}`}
                aria-expanded={aiOpen}
                aria-haspopup="true"
              >
                AI Stylist
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    aiOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aiOpen && (
                <div
                  role="menu"
                  className={`absolute top-[calc(100%+0.5rem)] left-full ml-2 -translate-x-[35%] z-[110] w-max ${dropdownClass}`}
                >
                  {AI_STYLIST_LINKS.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      role="menuitem"
                      onClick={() => setAiOpen(false)}
                      className={`${DROPDOWN_LINK} border-b ${DIVIDER} last:border-b-0`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#extension" className={CHROME_BTN}>
              Add to Chrome
            </a>
            <a
              href="https://linkly.link/2FWYm"
              onClick={trackDownloadClick}
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full
                shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                hover:shadow-[0_4px_24px_rgba(255,255,255,0.45),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.95)]
                hover:scale-[1.05] hover:-translate-y-px
                active:scale-[0.97] active:shadow-[0_1px_6px_rgba(255,255,255,0.2)]
                transition-all duration-200 cursor-pointer"
            >
              Download App
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://linkly.link/2FWYm"
              onClick={trackDownloadClick}
              className="px-4 py-2 bg-white text-black text-xs font-semibold rounded-full
                shadow-[0_2px_12px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                active:scale-[0.97] transition-all duration-200"
            >
              Download
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={`${ICON} min-h-[44px] min-w-[44px] flex items-center justify-center`}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className={`md:hidden border-t ${DIVIDER} px-5 py-5 flex flex-col gap-5`}>
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={LINK}
              >
                {l.label}
              </a>
            ))}

            <div>
              <button
                onClick={() => setMobileAiOpen((v) => !v)}
                className={`flex items-center justify-between w-full ${LINK}`}
              >
                AI Stylist
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mobileAiOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileAiOpen && (
                <div className={`mt-3 flex flex-col gap-1 pl-3 border-l ${DIVIDER}`}>
                  {AI_STYLIST_LINKS.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => { setOpen(false); setMobileAiOpen(false); }}
                      className={`${LINK_MUTED} py-1.5`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://linkly.link/2FWYm"
                className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full text-center
                  shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                  active:scale-[0.97] transition-all duration-200"
              >
                Download App
              </a>
              <a
                href="#extension"
                onClick={() => setOpen(false)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full text-center ${CHROME_BTN}`}
              >
                Add to Chrome
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
