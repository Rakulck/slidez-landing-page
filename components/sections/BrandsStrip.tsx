"use client";

import { useEffect, useRef } from "react";

const BRANDS = [
  "H&M", "Zara", "Lululemon", "Nike", "Adidas",
  "Uniqlo", "Mango", "Aritzia", "COS", "Everlane",
];

const BRANDS_LOOP = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

type Props = {
  title?: string;
  subtitle?: string;
  variant?: "full" | "compact";
  theme?: "dark" | "light";
};

export default function BrandsStrip({
  title    = "Styles from brands you love",
  subtitle = "Create outfits using products from brands you already shop.",
  variant  = "full",
  theme    = "dark",
}: Props) {
  const isCompact = variant === "compact";
  const isDark    = theme === "dark";

  const trackRef = useRef<HTMLUListElement>(null);
  const speed    = isCompact ? 0.4 : 0.35;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let pos         = 0;
    let singleWidth = 0;
    let rafId: number;

    const animate = () => {
      if (!singleWidth) singleWidth = track.scrollWidth / 4;
      pos -= speed;
      if (pos <= -singleWidth) pos += singleWidth;
      track.style.transform = `translateX(${pos}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  const sectionPy    = isCompact ? "py-5" : "py-8";
  const titleSize    = isCompact ? "text-xs"    : "text-sm";
  const subtitleSize = isCompact ? "text-[11px]" : "text-xs";

  const titleColor    = isDark ? "text-white/30" : "text-black/30";
  const subtitleColor = isDark ? "text-white/18" : "text-black/20";
  const dotColor      = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  const brandTextColor = isDark ? "text-white/30" : "text-black/25";

  return (
    <section aria-label="Brands featured on Slidez" className={`w-full ${sectionPy} overflow-hidden`}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="text-center mb-7 px-6">
          {title && (
            <p className={`${titleSize} font-semibold uppercase tracking-[0.2em] ${titleColor} mb-1.5`}>
              {title}
            </p>
          )}
          {subtitle && (
            <p className={`${subtitleSize} ${subtitleColor}`}>{subtitle}</p>
          )}
        </div>
      )}

      {/* Semantic brand list for search crawlers & screen readers */}
      <ul className="sr-only">
        {BRANDS.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>

      {/* Visual scrolling strip */}
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <ul
          ref={trackRef}
          role="list"
          className="flex items-center whitespace-nowrap will-change-transform list-none p-0 m-0"
        >
          {BRANDS_LOOP.map((brand, i) => (
            <li key={i} className="flex items-center shrink-0 px-10">
              <span className={`${brandTextColor} ${titleSize} font-semibold uppercase tracking-widest`}>
                {brand}
              </span>
              {/* dot separator */}
              <span
                aria-hidden="true"
                className="w-1 h-1 rounded-full shrink-0 ml-10"
                style={{ background: dotColor }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
