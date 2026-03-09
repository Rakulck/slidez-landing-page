"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { trackDownloadClick } from "@/lib/gtag";

const navLinks = [
  { label: "Features",  href: "/#features"  },
  { label: "Extension", href: "/#extension" },
  { label: "FAQ",       href: "/#faq"       },
];

const AI_STYLIST_LINKS = [
  { label: "Outfit Ideas",            href: "/outfit-ideas"            },
  { label: "What Should I Wear",      href: "/what-to-wear"            },
  { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas" },
  { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas"     },
];

export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [aiOpen, setAiOpen]       = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const aiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdown when clicking outside */
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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <div
        className={`w-full max-w-4xl pointer-events-auto transition-all duration-500 rounded-2xl border ${
          scrolled
            ? "bg-white/[0.06] border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl"
            : "bg-white/[0.04] border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl"
        }`}
      >
        <div className="px-5 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-white"
          >
            Slidez
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}

            {/* AI Stylist dropdown */}
            <div ref={aiRef} className="relative">
              <button
                onClick={() => setAiOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-white/45 hover:text-white transition-colors duration-200"
              >
                AI Stylist
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aiOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aiOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl border border-white/[0.1] bg-[#111]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden z-50">
                  {AI_STYLIST_LINKS.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => setAiOpen(false)}
                      className="block px-4 py-3 text-sm text-white/55 hover:text-white hover:bg-white/[0.06] transition-colors duration-150 border-b border-white/[0.06] last:border-b-0"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#extension"
              className="px-4 py-2.5 text-sm font-semibold rounded-full border border-white/20 text-white/80
                hover:border-white/40 hover:text-white hover:bg-white/[0.06]
                active:scale-[0.97]
                transition-all duration-200 cursor-pointer"
            >
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

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/60 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/[0.07] px-5 py-5 flex flex-col gap-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}

            {/* Mobile AI Stylist accordion */}
            <div>
              <button
                onClick={() => setMobileAiOpen((v) => !v)}
                className="flex items-center justify-between w-full text-sm text-white/60 hover:text-white transition-colors"
              >
                AI Stylist
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mobileAiOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileAiOpen && (
                <div className="mt-3 flex flex-col gap-1 pl-3 border-l border-white/[0.08]">
                  {AI_STYLIST_LINKS.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      onClick={() => { setOpen(false); setMobileAiOpen(false); }}
                      className="text-sm text-white/40 hover:text-white transition-colors py-1.5"
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
                className="px-5 py-2.5 border border-white/20 text-white/80 text-sm font-semibold rounded-full text-center
                  hover:border-white/40 hover:text-white active:scale-[0.97] transition-all duration-200"
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
