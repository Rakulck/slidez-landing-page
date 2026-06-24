"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { trackDownloadClick } from "@/lib/gtag";
import { useNavbarTheme, type NavBgTheme } from "@/hooks/useNavbarTheme";

type NavItemId = "features" | "extension" | "faq" | "blogs";

const navLinks: { label: string; href: string; id: NavItemId }[] = [
  { label: "Features",  href: "/#features",  id: "features"  },
  { label: "Extension", href: "/#extension", id: "extension" },
  { label: "FAQ",       href: "/#faq",       id: "faq"       },
  { label: "Blogs",     href: "/blog",       id: "blogs"     },
];

const AI_STYLIST_LINKS = [
  { label: "Outfit Ideas",            href: "/outfit-ideas"            },
  { label: "What Should I Wear",      href: "/what-to-wear"            },
  { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas" },
  { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas"     },
];

const AI_STYLIST_EXTRA_ROUTES = [
  "/ai-stylist",
  "/ai-fashion-stylist",
  "/free-ai-stylist-app",
  "/ai-virtual-try-on",
  "/try-on-from-anywhere",
];

function isAiStylistRoute(pathname: string): boolean {
  if (AI_STYLIST_LINKS.some(({ href }) => pathname === href)) return true;
  if (pathname === "/outfit-ideas" || pathname.includes("-outfit-ideas")) return true;
  if (pathname === "/what-to-wear") return true;
  return AI_STYLIST_EXTRA_ROUTES.includes(pathname);
}

function isNavItemActive(
  item: NavItemId | "ai-stylist",
  pathname: string,
  hash: string
): boolean {
  if (item === "blogs") return pathname.startsWith("/blog");
  if (item === "ai-stylist") return isAiStylistRoute(pathname);
  if (pathname !== "/") return false;
  return hash === `#${item}`;
}

function NavTabLabel({ label, active }: { label: string; active: boolean }) {
  return (
    <span className="inline-flex flex-col items-center">
      <span>{label}</span>
      <span
        aria-hidden
        className={`mt-1.5 h-[2px] w-1/2 rounded-full bg-white transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

function navLinkClass(active: boolean) {
  return `text-sm font-medium transition-colors duration-500 ${
    active ? "text-white" : "text-white/75 hover:text-white"
  }`;
}

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
  const pathname = usePathname();
  const navTheme = useNavbarTheme();
  const [hash, setHash] = useState("");
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [aiOpen, setAiOpen]       = useState(false);
  const [mobileAiOpen, setMobileAiOpen] = useState(false);
  const aiRef = useRef<HTMLDivElement>(null);

  const aiStylistActive = isNavItemActive("ai-stylist", pathname, hash);

  const shell = SHELL[navTheme];
  const shellSurface = scrolled ? shell.scrolled : shell.base;
  const glassState = scrolled ? "is-scrolled" : "";
  const shellClass = `${SHELL_LAYOUT} ${LIQUID_GLASS} ${glassState} ${shellSurface}`;
  const dropdownClass = `rounded-xl border overflow-hidden ${LIQUID_GLASS} ${glassState} ${shellSurface}`;

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

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
            {navLinks.map((l) => {
              const active = isNavItemActive(l.id, pathname, hash);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={navLinkClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  <NavTabLabel label={l.label} active={active} />
                </a>
              );
            })}

            <div ref={aiRef} className="relative inline-flex">
              <button
                type="button"
                onClick={() => setAiOpen((v) => !v)}
                className={`inline-flex items-center gap-1.5 ${navLinkClass(aiStylistActive)}`}
                aria-expanded={aiOpen}
                aria-haspopup="true"
                aria-current={aiStylistActive ? "page" : undefined}
              >
                <NavTabLabel label="AI Stylist" active={aiStylistActive} />
                <ChevronDown
                  className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                    aiOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aiOpen && (
                <div
                  role="menu"
                  className={`z-[110] w-max ${dropdownClass}`}
                  style={{ position: "absolute", top: "calc(100% + 1.25rem)", left: 0 }}
                >
                  {AI_STYLIST_LINKS.map(({ label, href }) => {
                    const subActive = pathname === href;
                    return (
                      <a
                        key={href}
                        href={href}
                        role="menuitem"
                        onClick={() => setAiOpen(false)}
                        className={`${DROPDOWN_LINK} border-b ${DIVIDER} last:border-b-0 ${
                          subActive ? "text-white" : ""
                        }`}
                        aria-current={subActive ? "page" : undefined}
                      >
                        <NavTabLabel label={label} active={subActive} />
                      </a>
                    );
                  })}
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
            {navLinks.map((l) => {
              const active = isNavItemActive(l.id, pathname, hash);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={navLinkClass(active)}
                  aria-current={active ? "page" : undefined}
                >
                  <NavTabLabel label={l.label} active={active} />
                </a>
              );
            })}

            <div>
              <button
                onClick={() => setMobileAiOpen((v) => !v)}
                className={`flex items-center justify-between w-full ${navLinkClass(aiStylistActive)}`}
                aria-current={aiStylistActive ? "page" : undefined}
              >
                <NavTabLabel label="AI Stylist" active={aiStylistActive} />
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mobileAiOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileAiOpen && (
                <div className={`mt-3 flex flex-col gap-1 pl-3 border-l ${DIVIDER}`}>
                  {AI_STYLIST_LINKS.map(({ label, href }) => {
                    const subActive = pathname === href;
                    return (
                      <a
                        key={href}
                        href={href}
                        onClick={() => { setOpen(false); setMobileAiOpen(false); }}
                        className={`${LINK_MUTED} py-1.5 ${subActive ? "text-white" : ""}`}
                        aria-current={subActive ? "page" : undefined}
                      >
                        <NavTabLabel label={label} active={subActive} />
                      </a>
                    );
                  })}
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
