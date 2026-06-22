"use client";

import { useEffect, useRef, useState } from "react";

export type NavBgTheme = "dark-bg" | "light-bg";

/** Bottom edge of the fixed navbar pill (pt-4 + 68px bar). */
export const NAVBAR_PROBE_Y = 84;

function themeFromElement(el: Element): NavBgTheme | null {
  const value = (el as HTMLElement).dataset?.navTheme;
  if (value === "light-bg") return "light-bg";
  if (value === "dark-bg") return "dark-bg";
  return null;
}

function probeThemeAtPoint(): NavBgTheme {
  const x = Math.round(window.innerWidth / 2);
  const y = NAVBAR_PROBE_Y;
  let node = document.elementFromPoint(x, y) as HTMLElement | null;

  while (node) {
    const theme = themeFromElement(node);
    if (theme) return theme;
    node = node.parentElement;
  }

  return "dark-bg";
}

function pickThemeFromRatios(ratios: Map<Element, number>): NavBgTheme {
  let bestEl: Element | null = null;
  let bestRatio = 0;

  for (const [el, ratio] of ratios) {
    if (ratio > bestRatio && themeFromElement(el)) {
      bestRatio = ratio;
      bestEl = el;
    }
  }

  const fromMap = bestEl ? themeFromElement(bestEl) : null;
  return fromMap ?? probeThemeAtPoint();
}

export function useNavbarTheme(): NavBgTheme {
  const [theme, setTheme] = useState<NavBgTheme>("dark-bg");
  const ratiosRef = useRef<Map<Element, number>>(new Map());

  useEffect(() => {
    const applyTheme = (next: NavBgTheme) => {
      setTheme((prev) => (prev === next ? prev : next));
    };

    const syncFromRatios = () => {
      applyTheme(pickThemeFromRatios(ratiosRef.current));
    };

    const setup = () => {
      ratiosRef.current.clear();

      const bandBottom = Math.max(0, window.innerHeight - NAVBAR_PROBE_Y - 1);
      const margin = `-${NAVBAR_PROBE_Y}px 0px -${bandBottom}px 0px`;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
              ratiosRef.current.set(entry.target, entry.intersectionRatio);
            } else {
              ratiosRef.current.delete(entry.target);
            }
          }
          syncFromRatios();
        },
        {
          root: null,
          rootMargin: margin,
          threshold: [0, 0.01, 0.1, 0.25, 0.5, 0.75, 1],
        }
      );

      document.querySelectorAll<HTMLElement>("[data-nav-theme]").forEach((el) => {
        observer.observe(el);
      });

      applyTheme(probeThemeAtPoint());

      return observer;
    };

    let observer = setup();

    const onResize = () => {
      observer.disconnect();
      observer = setup();
    };

    window.addEventListener("resize", onResize);
    return () => {
      observer.disconnect();
      ratiosRef.current.clear();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return theme;
}
