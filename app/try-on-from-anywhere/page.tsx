import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata ─────────────────────────────────────────────────── */

const TITLE       = "Try On Clothes from Any Website or Instagram | Slidez";
const DESCRIPTION = "Spot something you like on Instagram or any shopping site, import it into Slidez, and virtually try it on your own photo before buying. Free on iOS and Android.";
const CANONICAL   = `${CANONICAL_BASE}/try-on-from-anywhere`;
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "try on clothes from Instagram",
    "virtual try on from any website",
    "import clothes and try on",
    "try on before buying",
    "virtual try on app",
    "try clothes online",
    "AI virtual try-on",
    "Slidez import",
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
  name: "How to Try On Clothes from Any Website or Instagram",
  description: "Import any clothing item from Instagram or a shopping site and virtually try it on with Slidez.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Spot something you like", text: "Find an item you want to try on — on Instagram, a shopping site, or anywhere on the web." },
    { "@type": "HowToStep", position: 2, name: "Save or import the image", text: "Screenshot the item or use the Slidez Chrome Extension to import it directly from any website." },
    { "@type": "HowToStep", position: 3, name: "Upload your photo", text: "Open Slidez and upload your photo — a selfie or full-body image works best." },
    { "@type": "HowToStep", position: 4, name: "AI fits the item onto you", text: "Slidez AI overlays the imported garment onto your photo with realistic fit, proportions, and lighting." },
    { "@type": "HowToStep", position: 5, name: "Buy from the original source", text: "If you like how it looks, go back to the original site and buy it. No guessing, no returns from bad fit." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I try on clothes from Instagram before buying?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. With Slidez, you can save any item you see on Instagram and virtually try it on your own photo before purchasing. The AI overlays the garment onto your image with realistic fit and proportions." },
    },
    {
      "@type": "Question",
      name: "Can I try on clothes from any shopping website?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez lets you import clothing items from any website. Use the Slidez Chrome Extension to import directly from a product page, or save a screenshot and upload it in the app." },
    },
    {
      "@type": "Question",
      name: "How do I import clothes into Slidez?",
      acceptedAnswer: { "@type": "Answer", text: "You can import clothes into Slidez by saving a screenshot of the item and uploading it, or by using the Slidez Chrome Extension which lets you import directly from any product page without leaving the site." },
    },
    {
      "@type": "Question",
      name: "Is the Slidez import feature free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez is free to download on iOS and Android. The import and virtual try-on features are included at no cost." },
    },
    {
      "@type": "Question",
      name: "Does this work for shoes and accessories too?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez virtual try-on works for clothing, shoes, sunglasses, jewellery, and accessories. Import any item from any source and see how it looks on your photo." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "Try On from Anywhere", item: CANONICAL },
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
  { step: "01", title: "Spot something you like", body: "Find an item anywhere — Instagram, ASOS, Zara, a brand site, or any online store. If you can see it, you can try it on." },
  { step: "02", title: "Import it into Slidez", body: "Save a screenshot and upload it in the app, or use the Slidez Chrome Extension to import directly from any product page without leaving the site." },
  { step: "03", title: "Upload your photo", body: "Open Slidez and add your photo. A selfie or full-body image gives the AI the best result." },
  { step: "04", title: "AI fits the item onto you", body: "The AI overlays the imported garment onto your photo with realistic fit, draping, proportions, and lighting." },
  { step: "05", title: "Buy from the original source", body: "Like what you see? Go back to the original site and buy. No guessing, no fit surprises, fewer returns." },
];

const SOURCES = [
  { label: "Instagram", desc: "Save any post or story item and try it on before clicking the link in bio." },
  { label: "ASOS / Zara / H&M", desc: "Import directly from product pages using the Chrome Extension." },
  { label: "Amazon Fashion", desc: "Try on before adding to cart. Reduce returns before they happen." },
  { label: "Independent Brands", desc: "Any website, any product image. If you can screenshot it, you can try it on." },
];

const FAQS = [
  { q: "Can I try on clothes from Instagram before buying?", a: "Yes. With Slidez, you can save any item you see on Instagram and virtually try it on your own photo before purchasing. The AI overlays the garment onto your image with realistic fit and proportions." },
  { q: "Can I try on clothes from any shopping website?", a: "Yes. Slidez lets you import clothing items from any website. Use the Slidez Chrome Extension to import directly from a product page, or save a screenshot and upload it in the app." },
  { q: "How do I import clothes into Slidez?", a: "You can import clothes into Slidez by saving a screenshot of the item and uploading it, or by using the Slidez Chrome Extension which lets you import directly from any product page without leaving the site." },
  { q: "Does this work for shoes and accessories too?", a: "Yes. Slidez virtual try-on works for clothing, shoes, sunglasses, jewellery, and accessories. Import any item from any source and see how it looks on your photo." },
  { q: "Is the Slidez import feature free?", a: "Yes. Slidez is free to download on iOS and Android. The import and virtual try-on features are included at no cost." },
];

const RELATED = [
  { label: "AI Virtual Try-On",   href: "/ai-virtual-try-on",      desc: "Learn how AI virtual try-on works." },
  { label: "AI Stylist",          href: "/ai-stylist",              desc: "Generate complete outfits with AI." },
  { label: "Outfit Ideas",        href: "/outfit-ideas",            desc: "Browse AI outfit ideas for any occasion." },
  { label: "What to Wear",        href: "/what-to-wear",            desc: "Let AI decide what you should wear today." },
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">Virtual Try-On</p>
            <h1 className="text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6">
              Try On from Anywhere
            </h1>
            <p className="text-4xl text-white/50 max-w-3xl mx-auto leading-[1.2] mt-6">
              Spot something on Instagram or any shopping site. Import it into Slidez and try it on your own photo before you buy.
            </p>
          </div>
        </section>

        {/* ── Context ────────────────────────────────────────── */}
        <section className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-2xl mx-auto text-center space-y-5 text-black/55 text-lg leading-relaxed">
            <p>
              You are scrolling Instagram, see an outfit on someone, and want to know if it will look as good on you. Until now, the only option was to find the item, buy it, try it on, and hope for the best.
            </p>
            <p>
              Slidez changes that. Import any clothing item from any source — Instagram, ASOS, Amazon, a brand site, anywhere — and virtually try it on your own photo in seconds. The AI fits the garment to your body with realistic proportions and lighting.
            </p>
            <p>
              The Slidez Chrome Extension makes it even easier — import directly from any product page without leaving the site. Then try it on, decide, and go back to buy. No guessing, no returns.
            </p>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────── */}
        <section className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">How to Try On from Any Source</h2>
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

        {/* ── Works With ────────────────────────────────────── */}
        <section className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Sources</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-5 text-center">Works with Any Source</h2>
            <p className="text-black/45 text-lg text-center mb-12">If you can see it online, you can try it on.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOURCES.map(({ label, desc }) => (
                <div key={label} className="p-6 rounded-2xl border border-black/[0.07] bg-[#fafafa]">
                  <p className="font-semibold text-black text-base mb-2">{label}</p>
                  <p className="text-black/50 text-sm leading-relaxed">{desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">Try On Anything, Anywhere</h2>
            <p className="text-white/45 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Import from Instagram, any shopping site, or anywhere on the web. Try it on your photo. Buy with confidence. Free on iOS and Android.
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
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">Frequently Asked Questions</h2>
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
