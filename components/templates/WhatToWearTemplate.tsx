"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StylistTool from "@/components/features/ai-stylist/StylistTool";
import BrandsStrip from "@/components/sections/BrandsStrip";
import { ArrowRight, Camera, Sparkles, ShoppingBag } from "lucide-react";

const U = "https://images.unsplash.com/photo-";

/* ── Data ─────────────────────────────────────────────────────── */

const WHAT_TO_WEAR_CHIPS = ["Date Night", "Office", "Party", "Beach", "Casual", "Winter"];

const WHAT_TO_WEAR_PROMPTS = [
  "What should I wear on a date night?",
  "What should I wear to the office?",
  "What should I wear to a beach vacation?",
  "What should I wear with black jeans?",
];

// Section 2 — Outfit Ideas You Can Try
const OUTFIT_IDEAS = [
  {
    title: "Date Night Look",
    sub: "Elegant · Confident · Evening-ready",
    prompt:
      "Create a stylish date night outfit that feels elegant and confident. Include clothing pieces, color combinations, footwear, and accessories. The outfit should work for a dinner date or evening outing and feel modern and attractive.",
    img: `${U}1524504388940-b1c1722653e1?w=600&q=85&fit=crop&crop=top`,
    alt: "Date night outfit look",
  },
  {
    title: "Office Look",
    sub: "Polished · Modern · Work-ready",
    prompt:
      "Create a professional office outfit that looks polished and modern. Include clothing pieces suitable for work environments such as blazers, shirts, trousers, or dresses along with appropriate footwear and accessories.",
    img: `${U}1490481651871-ab68de25d43d?w=600&q=85&fit=crop&crop=top`,
    alt: "Office outfit look",
  },
  {
    title: "Casual Day Look",
    sub: "Relaxed · Stylish · Comfortable",
    prompt:
      "Create a relaxed casual outfit that is comfortable but still stylish. Include clothing pieces, colors, footwear, and simple accessories suitable for everyday wear such as shopping, coffee runs, or hanging out with friends.",
    img: `${U}1539109136881-3be0616acf4b?w=600&q=85&fit=crop&crop=top`,
    alt: "Casual day outfit look",
  },
  {
    title: "Party Look",
    sub: "Bold · Statement · Night out",
    prompt:
      "Create a bold party outfit suitable for a night out. Include statement pieces, trendy clothing combinations, footwear, and accessories that feel energetic, fashionable, and eye-catching.",
    img: `${U}1469334031218-e382a71b716b?w=600&q=85&fit=crop&crop=top`,
    alt: "Party night out outfit look",
  },
  {
    title: "Winter Look",
    sub: "Cozy · Layered · Fashion-forward",
    prompt:
      "Create a stylish winter outfit that is warm but fashionable. Include layering pieces such as coats, sweaters, scarves, boots, and accessories while keeping the outfit modern and well coordinated.",
    img: `${U}1483985988355-763728e1935b?w=600&q=85&fit=crop&crop=top`,
    alt: "Winter outfit look",
  },
  {
    title: "Beach Look",
    sub: "Breezy · Relaxed · Vacation-ready",
    prompt:
      "Create a relaxed beach outfit perfect for vacation or a beach day. Include lightweight clothing pieces, swimwear or layering options, sandals, sunglasses, and accessories that match a summer beach vibe.",
    img: `${U}1507525428034-b723cf961d3e?w=600&q=85&fit=crop&crop=top`,
    alt: "Beach vacation outfit look",
  },
];

// Section 3 — How Slidez Helps
const HOW_HELPS = [
  {
    icon: Camera,
    num: "01",
    title: "See the outfit on yourself",
    text: "Upload your photo and try outfits instantly.",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Find ideas faster",
    text: "Get complete looks based on your occasion or style.",
  },
  {
    icon: ShoppingBag,
    num: "03",
    title: "Try before you buy",
    text: "Experience fashion like a real store.",
  },
];

// Section 5 — Occasion Library
const OCCASIONS = [
  {
    title: "What to wear on a first date",
    prompt:
      "What should I wear on a first date? Create a stylish, confident outfit that feels effortless and attractive for a first impression.",
    img: `${U}1515886657613-9f3515b0c78f?w=600&q=85&fit=crop&crop=top`,
    alt: "What to wear on a first date",
  },
  {
    title: "What to wear to work",
    prompt:
      "What should I wear to work? Create a polished, professional outfit that looks modern and intentional for an office environment.",
    img: `${U}1490481651871-ab68de25d43d?w=600&q=85&fit=crop&crop=faces`,
    alt: "What to wear to work",
  },
  {
    title: "What to wear to brunch",
    prompt:
      "What should I wear to brunch? Create a relaxed but polished outfit that looks great in photos and feels comfortable for a leisurely morning.",
    img: `${U}1539109136881-3be0616acf4b?w=600&q=85&fit=crop&crop=faces`,
    alt: "What to wear to brunch",
  },
  {
    title: "What to wear on vacation",
    prompt:
      "What should I wear on vacation? Create a stylish travel wardrobe with versatile, lightweight pieces perfect for any destination.",
    img: `${U}1507525428034-b723cf961d3e?w=600&q=85&fit=crop&crop=top`,
    alt: "What to wear on vacation",
  },
  {
    title: "What to wear to a party",
    prompt:
      "What should I wear to a party? Create a bold, eye-catching outfit for a night out that feels confident, fun, and fashionable.",
    img: `${U}1469334031218-e382a71b716b?w=600&q=85&fit=crop&crop=top`,
    alt: "What to wear to a party",
  },
  {
    title: "What to wear in winter",
    prompt:
      "What should I wear in winter? Create a stylish, warm winter outfit with great layering, cozy textures, and a well-coordinated color palette.",
    img: `${U}1483985988355-763728e1935b?w=600&q=85&fit=crop&crop=faces`,
    alt: "What to wear in winter",
  },
];

// Section 8 — FAQ
const FAQ_ITEMS = [
  {
    q: "What should I wear today?",
    a: "Think about where you're going — a casual day out, the office, a dinner, or something else. Describe your occasion or vibe above and get a complete outfit instantly. No more staring at your wardrobe.",
  },
  {
    q: "How do I choose an outfit for an occasion?",
    a: "Start with your occasion, then think about the vibe you want — relaxed, polished, bold, or minimal. Slidez helps you put together a complete look that fits the moment, from clothing to shoes and accessories.",
  },
  {
    q: "Can I try outfit ideas before buying?",
    a: "Yes. Slidez includes a virtual try-on feature so you can see how any outfit looks on your actual photo before buying. Download the app on iOS or Android — free to use.",
  },
];

/* ── Shared glow orb ──────────────────────────────────────────── */
function GlowOrb() {
  return (
    <div
      aria-hidden
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(192,192,192,0.07) 0%, transparent 70%)",
      }}
    />
  );
}

/* ── Component ────────────────────────────────────────────────── */

export default function WhatToWearTemplate() {
  const [externalPrompt, setExternalPrompt] = useState("");
  const [externalPromptKey, setExternalPromptKey] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const fillPrompt = (prompt: string) => {
    setExternalPrompt(prompt);
    setExternalPromptKey((k) => k + 1);
    heroRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* ─────────────────────────────────────────────────────────
          1. HERO
      ───────────────────────────────────────────────────────── */}
      <section
        aria-label="What should you wear"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 bg-[#080808]"
      >
        <GlowOrb />

        <div className="relative z-10 w-full max-w-3xl mx-auto" ref={heroRef}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.02em",
            }}
            className="font-bold mb-5"
          >
            <span className="gradient-silver-text">What Should You Wear?</span>
          </h1>

          <p className="text-lg text-white/45 max-w-md mx-auto mb-12 leading-relaxed">
            Find outfit ideas for any occasion and{" "}
            <span className="text-white/65">create a look that fits your style.</span>
          </p>

          <StylistTool
            externalPrompt={externalPrompt}
            externalPromptKey={externalPromptKey}
            submitLabel="Find My Outfit"
            chips={WHAT_TO_WEAR_CHIPS}
            prompts={WHAT_TO_WEAR_PROMPTS}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          2. OUTFIT IDEAS YOU CAN TRY
      ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Outfit ideas you can try"
        className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/30 mb-4">
              Style Inspirations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              Outfit Ideas You Can Try
            </h2>
            <p className="mt-3 text-black/40 text-base max-w-sm mx-auto">
              Explore different looks and create your own.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {OUTFIT_IDEAS.map(({ title, sub, prompt, img, alt }) => (
              <div
                key={title}
                className="group rounded-2xl border border-black/[0.07] bg-[#fafafa] overflow-hidden"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e8e8e8]">
                  <img
                    src={img}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-black text-sm mb-0.5">{title}</p>
                  <p className="text-black/38 text-xs mb-3 leading-relaxed">{sub}</p>
                  <button
                    onClick={() => fillPrompt(prompt)}
                    className="text-[11px] font-semibold text-black/50 hover:text-black transition-colors duration-200 flex items-center gap-1"
                  >
                    Get this look
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          3. HOW SLIDEZ HELPS
      ───────────────────────────────────────────────────────── */}
      <section
        aria-label="How Slidez helps you decide"
        className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/30 mb-4">
              The Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              How Slidez Helps You Decide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HOW_HELPS.map(({ icon: Icon, num, title, text }) => (
              <div
                key={title}
                className="relative p-8 rounded-2xl border border-black/[0.07] bg-white overflow-hidden"
              >
                <span className="absolute top-5 right-6 text-[5rem] font-bold leading-none text-black/[0.04] select-none pointer-events-none">
                  {num}
                </span>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-black text-base mb-2 leading-snug">{title}</p>
                  <p className="text-black/40 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          4. BRANDS
      ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Brands you can style with"
        className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-6"
      >
        <BrandsStrip
          title="Styles from brands you love"
          subtitle="Create outfits using products from brands you already shop."
          variant="full"
          theme="light"
        />
      </section>

      {/* ─────────────────────────────────────────────────────────
          5. OCCASION LIBRARY
      ───────────────────────────────────────────────────────── */}
      <section
        aria-label="What to wear for every occasion"
        className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-20 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/30 mb-4">
              Occasion Guide
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              What to Wear For Every Occasion
            </h2>
            <p className="mt-3 text-black/40 text-base max-w-sm mx-auto">
              Start with your occasion and explore a look that fits.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {OCCASIONS.map(({ title, prompt, img, alt }) => (
              <button
                key={title}
                onClick={() => fillPrompt(prompt)}
                className="group flex flex-col rounded-2xl border border-black/[0.07] bg-white overflow-hidden
                  hover:border-black/20 hover:shadow-md hover:-translate-y-1
                  transition-all duration-300 text-left cursor-pointer"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e0e0e0] shrink-0">
                  <img
                    src={img}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <p className="font-semibold text-black text-sm leading-snug">{title}</p>
                  <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-black shrink-0 transition-colors duration-200" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          6. SECOND INPUT — CREATE YOUR LOOK
      ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Create your look"
        className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6"
      >
        <GlowOrb />

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/25 mb-6">
            Style Tool
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            Create Your Look
          </h2>
          <p className="text-base text-white/40 max-w-sm mx-auto mb-10 leading-relaxed">
            Describe where you&rsquo;re going or the style you want.
          </p>

          <StylistTool
            submitLabel="Find My Outfit"
            chips={WHAT_TO_WEAR_CHIPS}
            prompts={WHAT_TO_WEAR_PROMPTS}
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          7. TRY WITH SLIDEZ CTA
      ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Try with Slidez"
        className="relative z-[60] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6"
      >
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/30 mb-6">
            The App
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight mb-6">
            Try It With Slidez
          </h2>
          <p className="text-base text-black/40 max-w-sm mx-auto mb-8 leading-relaxed">
            Upload your photo, explore outfit ideas, and see what fits your style.
          </p>

          <ul className="flex flex-col items-center gap-3.5 mb-10">
            {[
              "Upload your photo",
              "Create outfit ideas",
              "Try clothes before buying",
            ].map((point) => (
              <li
                key={point}
                className="flex items-center justify-center gap-3 text-black/50 text-base"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-black/25 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="https://linkly.link/2FWYm"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-black text-white text-sm font-semibold rounded-full
              shadow-[0_2px_16px_rgba(0,0,0,0.18),0_1px_4px_rgba(0,0,0,0.12)]
              hover:shadow-[0_4px_28px_rgba(0,0,0,0.3)] hover:scale-[1.05] hover:-translate-y-px
              active:scale-[0.97] transition-all duration-200"
          >
            Open Slidez AI Stylist
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          8. FAQ
      ───────────────────────────────────────────────────────── */}
      <section
        aria-label="What to wear FAQ"
        className="relative z-[65] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-20 px-6"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/30 mb-4">
              Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              Frequently Asked
            </h2>
          </div>

          <div>
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <details key={i} className="group border-b border-black/[0.08] last:border-b-0">
                <summary className="flex items-center justify-between gap-4 py-5 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                  <span className="text-base md:text-lg font-semibold text-black group-hover:text-black/65 transition-colors duration-200 text-left">
                    {q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-black/40 group-hover:border-black/25 group-hover:text-black/60 transition-all duration-200 relative">
                    <span className="block w-3 h-px bg-current" />
                    <span className="block w-px h-3 bg-current absolute group-open:opacity-0 transition-opacity duration-200" />
                  </span>
                </summary>
                <p className="pb-5 text-black/55 text-base leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <div className="relative z-[70] -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <Footer />
      </div>
    </main>
  );
}
