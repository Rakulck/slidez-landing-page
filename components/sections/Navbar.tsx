"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features",   href: "#features"    },
  { label: "Try On",     href: "#how-it-works" },
  { label: "Extension",  href: "#extension"   },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight text-white"
        >
          <span className="w-7 h-7 rounded-lg gradient-silver flex items-center justify-center shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-black" />
          </span>
          Slidez
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/45 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#"
            className="text-sm text-white/45 hover:text-white transition-colors duration-200"
          >
            Log in
          </a>
          <a
            href="#"
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
          className="md:hidden text-white/60 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080808]/98 border-b border-white/[0.06] px-6 py-6 flex flex-col gap-5">
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
          <div className="flex flex-col gap-3 pt-2">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors text-center">
              Log in
            </a>
            <a
              href="#"
              className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full text-center
                shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                active:scale-[0.97] transition-all duration-200"
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
