import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata ─────────────────────────────────────────────────── */

const TITLE       = "What Is an AI Stylist? How AI Fashion Styling Works";
const DESCRIPTION = "An AI stylist generates personalized outfit recommendations based on your occasion, vibe, and style. Learn how it works and try Slidez free on iOS and Android.";
const CANONICAL   = `${CANONICAL_BASE}/ai-stylist`;
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI stylist",
    "what is an AI stylist",
    "how does AI styling work",
    "AI fashion stylist",
    "outfit generator",
    "AI outfit recommendations",
    "personal stylist app",
    "Slidez AI stylist",
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
  name: "How to Use an AI Stylist",
  description: "How to get personalized outfit recommendations from an AI stylist app.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Describe your occasion or vibe", text: "Tell the AI what you need — a date night, work meeting, concert, or just a casual day. The more specific, the better the result." },
    { "@type": "HowToStep", position: 2, name: "AI generates a complete outfit", text: "The AI builds a full look: top, bottom, shoes, and accessories — all matched for colour, proportion, and the occasion." },
    { "@type": "HowToStep", position: 3, name: "Browse and refine", text: "Review the outfit suggestions. Ask for alternatives, adjust the vibe, or swap individual pieces." },
    { "@type": "HowToStep", position: 4, name: "Try it on virtually", text: "Use Slidez virtual try-on to see exactly how the outfit looks on your own photo before buying anything." },
    { "@type": "HowToStep", position: 5, name: "Shop with confidence", text: "Buy the pieces you love, knowing the outfit works together and looks right on you." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI stylist?",
      acceptedAnswer: { "@type": "Answer", text: "An AI stylist is software that generates personalized outfit recommendations based on your occasion, preferences, and style goals. You describe what you need — a vibe, event, or specific item — and the AI builds a complete look: top, bottom, shoes, and accessories, all matched together." },
    },
    {
      "@type": "Question",
      name: "How does an AI stylist work?",
      acceptedAnswer: { "@type": "Answer", text: "AI stylists use machine learning to understand fashion combinations, colour theory, and occasion-appropriate dressing. You input a prompt describing your need, and the model generates outfit suggestions by matching pieces that work together in terms of style, colour, and proportion." },
    },
    {
      "@type": "Question",
      name: "Is an AI stylist better than a personal stylist?",
      acceptedAnswer: { "@type": "Answer", text: "AI stylists are faster, always available, and free — making them practical for everyday outfit decisions. Personal stylists offer deeper human insight, especially for major events or wardrobe overhauls. For daily styling and outfit ideas, an AI stylist like Slidez is more than sufficient." },
    },
    {
      "@type": "Question",
      name: "Is Slidez AI stylist free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez is free to download on iOS and Android. Generate outfit ideas, get AI styling recommendations, and use virtual try-on at no cost." },
    },
    {
      "@type": "Question",
      name: "Can an AI stylist suggest outfits for specific occasions?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez AI Stylist is designed for occasion-specific styling. Describe your event — date night, office meeting, concert, wedding guest — and it generates outfits suited to that context, dress code, and vibe." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "What Is an AI Stylist?", item: CANONICAL },
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
  { step: "01", title: "Describe your occasion or vibe", body: "Tell the AI what you need — a date night, work meeting, concert, or casual day. The more specific, the more tailored the result." },
  { step: "02", title: "AI builds a complete outfit", body: "The AI generates a full look: top, bottom, shoes, and accessories — matched for colour, proportion, and occasion." },
  { step: "03", title: "Browse and refine", body: "Review the suggestions. Ask for alternatives, adjust the vibe, or swap individual pieces until it feels right." },
  { step: "04", title: "Try it on virtually", body: "Use Slidez virtual try-on to see exactly how the outfit looks on your own photo before buying anything." },
  { step: "05", title: "Shop with confidence", body: "Buy the pieces you love, knowing the full look works together and fits the occasion." },
];

const COMPARISON = [
  { feature: "Available 24/7",                  ai: true,  human: false },
  { feature: "Free to use",                      ai: true,  human: false },
  { feature: "Instant results",                  ai: true,  human: false },
  { feature: "Occasion-specific outfits",        ai: true,  human: true  },
  { feature: "Virtual try-on included",          ai: true,  human: false },
  { feature: "Unlimited outfit suggestions",     ai: true,  human: false },
  { feature: "Deep personal style knowledge",    ai: false, human: true  },
];

const FAQS = [
  { q: "What is an AI stylist?", a: "An AI stylist is software that generates personalized outfit recommendations based on your occasion, preferences, and style goals. You describe what you need and the AI builds a complete look: top, bottom, shoes, and accessories, all matched together." },
  { q: "How does an AI stylist work?", a: "AI stylists use machine learning to understand fashion combinations, colour theory, and occasion-appropriate dressing. You input a prompt describing your need, and the model generates outfit suggestions by matching pieces that work together in style, colour, and proportion." },
  { q: "Is an AI stylist better than a personal stylist?", a: "AI stylists are faster, always available, and free — making them practical for everyday outfit decisions. Personal stylists offer deeper human insight for major events or wardrobe overhauls. For daily styling and outfit ideas, an AI stylist like Slidez is more than sufficient." },
  { q: "Can an AI stylist suggest outfits for specific occasions?", a: "Yes. Slidez AI Stylist is built for occasion-specific styling. Describe your event — date night, office meeting, concert, wedding guest — and it generates outfits suited to that context, dress code, and vibe." },
  { q: "Is Slidez AI stylist free?", a: "Yes. Slidez is free to download on iOS and Android. Generate outfit ideas, get AI styling recommendations, and use virtual try-on at no cost." },
];

const RELATED = [
  { label: "AI Virtual Try-On",      href: "/ai-virtual-try-on",      desc: "See how clothes look on you before buying." },
  { label: "Try On From Anywhere",   href: "/try-on-from-anywhere",   desc: "Import items from Instagram or any site." },
  { label: "Outfit Ideas",           href: "/outfit-ideas",           desc: "Browse AI outfit ideas for any occasion." },
  { label: "Date Night Outfits",     href: "/date-night-outfit-ideas", desc: "Romantic looks for any evening out." },
];

/* ── Page ─────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <main className="overflow-hidden">
        <Navbar />

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-10 bg-[#080808]">
          <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.06) 0%, transparent 70%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">AI Stylist</p>
            <h1 className="text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6">
              What Is an AI Stylist?
            </h1>
            <p className="text-4xl text-white/50 max-w-3xl mx-auto leading-[1.2] mt-6">
              An AI stylist generates personalized outfit recommendations based on your occasion, vibe, and style. Describe what you need and it builds a complete look instantly.
            </p>
          </div>
        </section>

        {/* ── Context ────────────────────────────────────────── */}
        <section className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-5 text-black/55 text-lg leading-relaxed">
            <p>
              Traditional styling advice costs money and time. A personal stylist charges hundreds per session and isn't available when you're standing in front of your wardrobe at 7am wondering what to wear. An AI stylist removes that friction entirely.
            </p>
            <p>
              You describe your occasion — a dinner date, a job interview, a weekend brunch — and the AI generates a complete outfit: top, bottom, shoes, and accessories, all matched in style, colour, and proportion. No browsing required.
            </p>
            <p>
              Slidez is a free AI stylist app for iOS and Android. It combines outfit generation with virtual try-on so you can see how each look works on your own photo before committing to a purchase.
            </p>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────── */}
        <section className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">How AI Styling Works</h2>
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

        {/* ── Comparison ────────────────────────────────────── */}
        <section className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-5 text-center">AI Stylist vs. Personal Stylist</h2>
            <p className="text-black/45 text-lg text-center mb-12">Both can help you look great. Here is where they differ.</p>
            <div className="rounded-2xl border border-black/[0.08] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#fafafa] border-b border-black/[0.08]">
                <div className="p-4" />
                <div className="p-4 text-sm font-semibold text-black text-center border-l border-black/[0.06]">AI Stylist</div>
                <div className="p-4 text-sm font-semibold text-black/40 text-center border-l border-black/[0.06]">Personal Stylist</div>
              </div>
              {COMPARISON.map(({ feature, ai, human }, i) => (
                <div key={feature} className={`grid grid-cols-3 border-b border-black/[0.06] last:border-b-0 ${i % 2 === 1 ? "bg-[#fafafa]" : "bg-white"}`}>
                  <div className="p-4 text-sm text-black/60 font-medium">{feature}</div>
                  <div className="p-4 flex justify-center items-center border-l border-black/[0.06]">
                    <span className={`text-base ${ai ? "text-black" : "text-black/20"}`}>{ai ? "✓" : "✕"}</span>
                  </div>
                  <div className="p-4 flex justify-center items-center border-l border-black/[0.06]">
                    <span className={`text-base ${human ? "text-black" : "text-black/20"}`}>{human ? "✓" : "✕"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6">
          <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.06) 0%, transparent 70%)" }} />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">Try It Free</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">Your AI Stylist, Free</h2>
            <p className="text-white/45 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Describe any occasion and get a complete outfit in seconds. Then try it on virtually before you buy. Free on iOS and Android.
            </p>
            <a href="https://linkly.link/2FWYm" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.05] hover:-translate-y-px active:scale-[0.97] transition-all duration-200">
              Download Slidez — Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">AI Stylist — Frequently Asked Questions</h2>
            <div>
              {FAQS.map(({ q, a }, i) => (
                <details key={i} className="group border-b border-black/[0.08] last:border-b-0">
                  <summary className="flex items-center justify-between gap-4 py-5 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                    <span className="text-base md:text-lg font-semibold text-black group-hover:text-black/70 transition-colors duration-200 text-left">{q}</span>
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

        {/* ── Related ───────────────────────────────────────── */}
        <section className="relative z-[60] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">Keep Exploring</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Related Pages</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {RELATED.map(({ label, href, desc }) => (
                <a key={label} href={href} className="group p-5 rounded-2xl border border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.25)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200">
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
