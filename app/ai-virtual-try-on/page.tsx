import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight, Check, X } from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata ─────────────────────────────────────────────────── */

const TITLE       = "What Is AI Virtual Try-On? How It Works & Why It Matters";
const DESCRIPTION = "AI virtual try-on lets you see how clothes look on your body before buying. Learn how it works, why shoppers use it, and how Slidez makes it free on iOS and Android.";
const CANONICAL   = `${CANONICAL_BASE}/ai-virtual-try-on`;

const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI virtual try-on",
    "virtual try-on",
    "what is virtual try-on",
    "how does virtual try-on work",
    "AI fashion try-on",
    "virtual fitting room",
    "try clothes online",
    "AI stylist",
    "Slidez",
  ],
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : { index: false, follow: false },
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "website",
    siteName: "Slidez",
    images: [{ url: `${ASSETS_BASE_URL}/og-image.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@slidez_social",
    images: [`${ASSETS_BASE_URL}/og-image.png`],
  },
};

/* ── Schema ───────────────────────────────────────────────────── */

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use AI Virtual Try-On",
  description: "A step-by-step guide to trying on clothes virtually using AI before you buy.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload your photo",
      text: "Take a selfie or use an existing full-body photo. The AI needs a clear image of you to map the garment onto.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Select an item to try on",
      text: "Browse the Slidez catalog, import an item from any shopping site, or save something from Instagram.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "AI fits the garment to your body",
      text: "The AI analyzes your body shape and proportions, then overlays the clothing with realistic draping, fit, and lighting.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "See yourself in the outfit",
      text: "Review how the item looks on you — adjust the look, try alternatives, or combine pieces into a full outfit.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Buy with confidence",
      text: "If you like what you see, buy it. No guessing. No fit surprises. Fewer returns.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI virtual try-on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI virtual try-on is technology that lets you see how a clothing item looks on your own body before purchasing. You upload a photo of yourself, select an item, and AI overlays the garment onto your image with realistic fit, proportions, and lighting — so you can make confident buying decisions without visiting a store.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is AI virtual try-on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern AI virtual try-on is highly accurate for visualizing fit and proportion. It maps garments to your specific body shape and adjusts for draping and fabric behavior. While texture and exact color rendering can vary by item, AI try-on gives you a reliable sense of how something will look before you buy.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI virtual try-on free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Slidez AI virtual try-on is free to use on iOS and Android. Download the app, upload a photo, and start trying on clothes immediately at no cost.",
      },
    },
    {
      "@type": "Question",
      name: "Which apps offer AI virtual try-on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slidez is an AI stylist and virtual try-on app available free on iOS and Android. It lets you try on clothing, shoes, sunglasses, and accessories on your own photo, and also import items from any shopping site or Instagram.",
      },
    },
    {
      "@type": "Question",
      name: "Does virtual try-on work for all body types?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI virtual try-on adapts to your body shape based on your uploaded photo. The AI maps garments to your specific proportions regardless of body type, making it useful for all shoppers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try on outfits — not just single items?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With Slidez, you can build and try on full outfits — tops, bottoms, shoes, and accessories together — not just individual items. The AI Stylist feature generates complete outfit suggestions that you can then try on virtually.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "What Is AI Virtual Try-On?", item: CANONICAL },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: CANONICAL,
  description: DESCRIPTION,
  isPartOf: { "@type": "WebSite", name: "Slidez", url: CANONICAL_BASE },
  publisher: { "@type": "Organization", name: "Slidez" },
};

/* ── Data ─────────────────────────────────────────────────────── */

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Upload your photo",
    body: "Take a selfie or use an existing full-body photo. The AI needs a clear image to map the garment onto your body accurately.",
  },
  {
    step: "02",
    title: "Select an item to try on",
    body: "Browse the Slidez catalog, import an item from any shopping site, or pull something directly from Instagram.",
  },
  {
    step: "03",
    title: "AI fits the garment to you",
    body: "The AI analyzes your body shape and proportions, then overlays the clothing with realistic draping, fit, and lighting specific to you.",
  },
  {
    step: "04",
    title: "See yourself in the outfit",
    body: "Review how the item looks on you. Try alternatives, mix pieces, or build a complete outfit — all before spending anything.",
  },
  {
    step: "05",
    title: "Buy with confidence",
    body: "If it looks right, buy it. No guessing, no fit surprises, fewer returns.",
  },
];

const COMPARISON = [
  { feature: "See fit before buying",        traditional: false, aiTryOn: true  },
  { feature: "Try unlimited items for free", traditional: false, aiTryOn: true  },
  { feature: "Shop from home",               traditional: false, aiTryOn: true  },
  { feature: "No returns from bad fit",      traditional: false, aiTryOn: true  },
  { feature: "Available 24/7",               traditional: false, aiTryOn: true  },
  { feature: "Try on full outfits",          traditional: false, aiTryOn: true  },
  { feature: "Import from any website",      traditional: false, aiTryOn: true  },
];

const FAQS = [
  {
    q: "What is AI virtual try-on?",
    a: "AI virtual try-on is technology that lets you see how a clothing item looks on your own body before purchasing. You upload a photo of yourself, select an item, and AI overlays the garment onto your image with realistic fit, proportions, and lighting — so you can make confident buying decisions without visiting a store.",
  },
  {
    q: "How accurate is AI virtual try-on?",
    a: "Modern AI virtual try-on is highly accurate for visualizing fit and proportion. It maps garments to your specific body shape and adjusts for draping and fabric behavior. While texture and exact color rendering can vary by item, AI try-on gives you a reliable sense of how something will look before you buy.",
  },
  {
    q: "Is AI virtual try-on free?",
    a: "Yes — Slidez AI virtual try-on is free to use on iOS and Android. Download the app, upload a photo, and start trying on clothes immediately at no cost.",
  },
  {
    q: "Does virtual try-on work for all body types?",
    a: "Yes. AI virtual try-on adapts to your body shape based on your uploaded photo. The AI maps garments to your specific proportions regardless of body type, making it useful for all shoppers.",
  },
  {
    q: "Can I try on full outfits — not just single items?",
    a: "Yes. With Slidez, you can build and try on full outfits — tops, bottoms, shoes, and accessories together. The AI Stylist generates complete outfit suggestions that you can then try on virtually.",
  },
  {
    q: "Which apps offer AI virtual try-on?",
    a: "Slidez is an AI stylist and virtual try-on app available free on iOS and Android. It lets you try on clothing, shoes, sunglasses, and accessories on your own photo, and also import items from any shopping site or Instagram.",
  },
];

const RELATED = [
  { label: "Outfit Ideas",            href: "/outfit-ideas",            desc: "AI-generated outfit ideas for any occasion." },
  { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas", desc: "Find the perfect date night look." },
  { label: "What to Wear",            href: "/what-to-wear",            desc: "Let AI decide what you should wear today." },
  { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas",     desc: "Cozy, layered looks for cold weather." },
];

/* ── Page ─────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <main className="overflow-hidden">
        <Navbar />

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-10 bg-[#080808]">
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.06) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">
              Virtual Try-On
            </p>
            <h1 className="text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6">
              What Is AI Virtual Try-On?
            </h1>
            <p className="text-4xl text-white/50 max-w-3xl mx-auto leading-[1.2] mt-6">
              AI virtual try-on lets you see how a clothing item looks on your body before buying.
              Upload a photo, pick an item, and AI overlays it with realistic fit and proportions.
            </p>
          </div>
        </section>

        {/* ── Context ────────────────────────────────────────── */}
        <section className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-5 text-black/55 text-lg leading-relaxed">
            <p>
              Traditional online shopping forces you to guess. You see a model wearing a garment, hope it looks the same on you, buy it, and often return it. AI virtual try-on removes the guesswork. Upload your own photo, select any item from a dress to a pair of sneakers, and the AI shows you exactly how it looks on your body.
            </p>
            <p>
              Online clothing returns cost the fashion industry an estimated <strong className="text-black font-semibold">$550 billion annually</strong> (National Retail Federation, 2023), with fit being the leading cause. Virtual try-on directly addresses this by letting shoppers see fit and proportion before purchasing.
            </p>
            <p>
              Slidez is a free AI virtual try-on app for iOS and Android. It combines virtual try-on with an AI stylist so you can generate full outfit ideas and try them on, all in one place.
            </p>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────── */}
        <section className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">
              How AI Virtual Try-On Works
            </h2>

            <ol className="space-y-6">
              {HOW_IT_WORKS.map(({ step, title, body }) => (
                <li key={step} className="flex gap-6 p-6 rounded-2xl border border-black/[0.07] bg-white">
                  <span className="text-2xl font-bold text-black/15 shrink-0 leading-none pt-0.5">{step}</span>
                  <div>
                    <p className="font-semibold text-black text-base mb-1.5">{title}</p>
                    <p className="text-black/55 text-base leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Comparison Table ──────────────────────────────── */}
        <section className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-5 text-center">
              AI Virtual Try-On vs. Traditional Shopping
            </h2>
            <p className="text-black/45 text-lg text-center mb-12">
              Buying clothes online without virtual try-on is a guessing game. Here is the difference.
            </p>

            <div className="rounded-2xl border border-black/[0.08] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#fafafa] border-b border-black/[0.08]">
                <div className="p-4 text-xs font-semibold uppercase tracking-widest text-black/35" />
                <div className="p-4 text-sm font-semibold text-black/40 text-center border-l border-black/[0.06]">
                  Traditional Shopping
                </div>
                <div className="p-4 text-sm font-semibold text-black text-center border-l border-black/[0.06]">
                  AI Virtual Try-On
                </div>
              </div>
              {COMPARISON.map(({ feature, traditional, aiTryOn }, i) => (
                <div
                  key={feature}
                  className={`grid grid-cols-3 border-b border-black/[0.06] last:border-b-0 ${i % 2 === 1 ? "bg-[#fafafa]" : "bg-white"}`}
                >
                  <div className="p-4 text-sm text-black/60 font-medium">{feature}</div>
                  <div className="p-4 flex justify-center items-center border-l border-black/[0.06]">
                    {traditional
                      ? <Check className="w-4 h-4 text-black" />
                      : <X className="w-4 h-4 text-black/20" />}
                  </div>
                  <div className="p-4 flex justify-center items-center border-l border-black/[0.06]">
                    {aiTryOn
                      ? <Check className="w-4 h-4 text-black" />
                      : <X className="w-4 h-4 text-black/20" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6">
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.06) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">Try It Free</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Try On Clothes With Slidez
            </h2>
            <p className="text-white/45 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Slidez is a free AI virtual try-on app for iOS and Android. Upload your photo, pick any item, and see how it looks on you — before you buy.
            </p>
            <a
              href="https://linkly.link/2FWYm"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full
                shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.05] hover:-translate-y-px
                active:scale-[0.97] transition-all duration-200"
            >
              Download Slidez — Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">
              AI Virtual Try-On — Frequently Asked Questions
            </h2>

            <div>
              {FAQS.map(({ q, a }, i) => (
                <details key={i} className="group border-b border-black/[0.08] last:border-b-0">
                  <summary className="flex items-center justify-between gap-4 py-5 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                    <span className="text-base md:text-lg font-semibold text-black group-hover:text-black/70 transition-colors duration-200 text-left">
                      {q}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-black/40 group-hover:border-black/25 transition-all duration-200 relative">
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

        {/* ── Related Pages ─────────────────────────────────── */}
        <section className="relative z-[60] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">Keep Exploring</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Related Pages</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {RELATED.map(({ label, href, desc }) => (
                <a
                  key={label}
                  href={href}
                  className="group p-5 rounded-2xl border border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.03)]
                    hover:border-[rgba(192,192,192,0.25)] hover:bg-[rgba(255,255,255,0.05)]
                    transition-all duration-200"
                >
                  <p className="font-semibold text-white text-sm mb-1.5">{label}</p>
                  <p className="text-white/35 text-xs leading-relaxed">{desc}</p>
                  <ArrowRight className="w-3.5 h-3.5 text-white/20 mt-3 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="relative z-[65] -mt-10 rounded-t-[2.5rem] overflow-hidden">
          <Footer />
        </div>
      </main>
    </>
  );
}
