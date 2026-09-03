import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StylistToolHeroSection from "@/components/features/ai-stylist/StylistToolHeroSection";
import { ArrowRight } from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata ─────────────────────────────────────────────────── */

const TITLE       = "Free AI Stylist App: Create Outfits Instantly";
const DESCRIPTION = "Try a free AI stylist app to create outfits, plan your wardrobe, and style your looks instantly using your existing clothes.";
const CANONICAL   = `${CANONICAL_BASE}/free-ai-stylist-app`;
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "free ai stylist app",
    "ai stylist free",
    "free ai outfit generator",
    "virtual stylist app free",
    "free outfit planner app",
    "ai clothing app free",
    "free personal stylist app",
    "ai outfit planner free",
    "fashion ai app free",
    "free style assistant app",
    "outfit maker app free",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
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
  name: "How to Use a Free AI Stylist App",
  description: "How to create outfits and style your wardrobe using a free AI stylist app.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Type your occasion or vibe", text: "Tell the AI what you need — a beach vacation, office day, date night, or just a casual look. The more specific, the better the result." },
    { "@type": "HowToStep", position: 2, name: "AI generates a complete outfit", text: "The free AI stylist builds a full look: top, bottom, shoes, and accessories — all matched for colour, proportion, and the occasion." },
    { "@type": "HowToStep", position: 3, name: "Browse and refine", text: "Review the outfit suggestions. Ask for alternatives, adjust the vibe, or swap individual pieces until it feels right." },
    { "@type": "HowToStep", position: 4, name: "Try it on virtually and shop", text: "Use Slidez virtual try-on to see exactly how the outfit looks on your own photo before buying anything." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a free AI stylist app?",
      acceptedAnswer: { "@type": "Answer", text: "A free AI stylist app is a tool that uses artificial intelligence to generate personalized outfit recommendations at no cost. You describe an occasion, vibe, or a single clothing item, and the AI builds a complete look — top, bottom, shoes, and accessories — matched for colour and style. Slidez is a free AI stylist app available on iOS and Android." },
    },
    {
      "@type": "Question",
      name: "How does a free AI stylist app work?",
      acceptedAnswer: { "@type": "Answer", text: "A free AI outfit generator analyzes your prompt — occasion, vibe, or a specific item — and uses machine learning trained on fashion data to suggest complete, coordinated outfits. Slidez also lets you try on those outfits virtually using your own photo." },
    },
    {
      "@type": "Question",
      name: "Can a free AI stylist app create outfits from my wardrobe?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez can style outfits around pieces you already own. Describe a clothing item you want to build around and the free outfit planner app will suggest what to pair it with for any occasion." },
    },
    {
      "@type": "Question",
      name: "Does an AI fashion stylist consider my body type and preferences?",
      acceptedAnswer: { "@type": "Answer", text: "Slidez lets you choose your model and upload your own photo for virtual try-on, so outfit suggestions are shown on a representation that matches you. The AI also adapts to your stated vibe and preferences with each prompt." },
    },
    {
      "@type": "Question",
      name: "Does a free AI stylist app consider my body type and preferences?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez's free personal stylist app lets you upload your own photo and select a model that reflects your look. The AI uses your occasion and style prompt to tailor outfit recommendations to your stated preferences." },
    },
    {
      "@type": "Question",
      name: "Can I see how outfits look before wearing them?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez includes a built-in virtual try-on feature. Upload your photo, generate an outfit with the free AI stylist, and see exactly how the clothes look on you before buying anything." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "Free AI Stylist App", item: CANONICAL },
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

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Slidez AI Stylist",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: DESCRIPTION,
  url: CANONICAL,
};

/* ── Data ─────────────────────────────────────────────────────── */

const FEATURES = [
  { title: "Generate outfits from a text prompt", body: "Type any occasion, vibe, or item and get a complete, coordinated look in seconds — no browsing required." },
  { title: "Plan your wardrobe with an AI outfit planner", body: "Use the free outfit planner app to organise looks ahead of time for work, weekends, travel, and special events." },
  { title: "Your virtual stylist app for any occasion", body: "From casual coffee dates to office meetings and party nights — this free virtual stylist app covers every dress code." },
  { title: "Try on looks before buying", body: "Upload your photo and see the outfit on you via virtual try-on before spending a cent." },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Type your occasion, vibe, or a single item", body: "Tell the AI what you need — beach vacation, winter office look, date night, or build around a leather jacket you already own." },
  { step: "02", title: "AI generates a complete outfit", body: "The free AI outfit generator creates a full look: top, bottom, shoes, and accessories — matched for colour, proportion, and the occasion." },
  { step: "03", title: "Browse and refine", body: "Ask for alternatives, adjust the vibe, or swap individual pieces until the outfit feels right for you." },
  { step: "04", title: "Try it on virtually and shop with confidence", body: "See the outfit on your own photo using virtual try-on, then buy only the pieces you love." },
];

const BENEFITS = [
  { icon: "✦", title: "Always free", body: "No subscription, no paywall. This is a free personal stylist app with no hidden cost." },
  { icon: "⚡", title: "Instant results", body: "Get a complete outfit suggestion in seconds — faster than any fashion ai app or personal stylist." },
  { icon: "🎯", title: "Occasion-ready", body: "Casual, office, date night, party, winter, vacation — the free style assistant app covers every context." },
  { icon: "👔", title: "Virtual try-on included", body: "See exactly how outfits look on your photo before buying. No guessing, no returns." },
  { icon: "👗", title: "Works from your wardrobe", body: "Describe pieces you already own and the ai clothing app free builds looks around them." },
  { icon: "🕐", title: "Available 24/7", body: "Your free outfit maker app is always on — style your look at midnight or on the go." },
];

const RELATED = [
  { label: "AI Stylist",          href: "/ai-stylist",            desc: "Learn how AI styling works and what to expect." },
  { label: "AI Virtual Try-On",   href: "/ai-virtual-try-on",     desc: "See how clothes look on you before buying." },
  { label: "Outfit Ideas",        href: "/outfit-ideas",          desc: "Browse AI outfit ideas for any occasion." },
  { label: "What to Wear",        href: "/what-to-wear",          desc: "Not sure what to wear? Let AI decide." },
];

const FAQS = [
  { q: "What is a free AI stylist app?", a: "A free AI stylist app is a tool that uses artificial intelligence to generate personalized outfit recommendations at no cost. You describe an occasion, vibe, or a single clothing item, and the AI builds a complete look — top, bottom, shoes, and accessories — matched for colour and style. Slidez is a free AI stylist app available on iOS and Android." },
  { q: "How does a free AI stylist app work?", a: "A free AI outfit generator analyzes your prompt — occasion, vibe, or a specific item — and uses machine learning trained on fashion data to suggest complete, coordinated outfits. Slidez also lets you try on those outfits virtually using your own photo." },
  { q: "Can a free AI stylist app create outfits from my wardrobe?", a: "Yes. Slidez can style outfits around pieces you already own. Describe a clothing item you want to build around and the free outfit planner app will suggest what to pair it with for any occasion." },
  { q: "Does an AI fashion stylist consider my body type and preferences?", a: "Slidez lets you choose your model and upload your own photo for virtual try-on, so outfit suggestions are shown on a representation that matches you. The AI also adapts to your stated vibe and preferences with each prompt." },
  { q: "Does a free AI stylist app consider my body type and preferences?", a: "Yes. Slidez's free personal stylist app lets you upload your own photo and select a model that reflects your look. The AI uses your occasion and style prompt to tailor outfit recommendations to your stated preferences." },
  { q: "Can I see how outfits look before wearing them?", a: "Yes. Slidez includes a built-in virtual try-on feature. Upload your photo, generate an outfit with the free AI stylist, and see exactly how the clothes look on you before buying anything." },
];

/* ── Page ─────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <main className="overflow-hidden">
        <Navbar />

        <StylistToolHeroSection
          ariaLabel="Free AI stylist app"
          eyebrow="AI Stylist · Free to Use"
          title="Free AI Stylist App"
          subtitle="Your free AI outfit generator and virtual stylist app — plan outfits, discover looks, and style your wardrobe with a free personal stylist powered by AI."
          submitLabel="Style me"
          chips={["Casual", "Office", "Date Night", "Winter", "Party", "Vacation"]}
          maxWidthClassName="max-w-3xl"
        />

        {/* ── What You Can Do ───────────────────────────────── */}
        <section data-nav-theme="light-bg" className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">
              What You Can Do With a Free AI Stylist App
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FEATURES.map(({ title, body }) => (
                <div key={title} className="p-6 rounded-2xl border border-black/[0.07] bg-[#fafafa]">
                  <p className="font-semibold text-black text-base mb-2">{title}</p>
                  <p className="text-black/55 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────── */}
        <section data-nav-theme="light-bg" className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#ffffff] py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Step by Step</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">
              How Slidez&apos;s Free AI Stylist App Helps
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

        {/* ── Why Free AI Stylist ────────────────────────────── */}
        <section data-nav-theme="light-bg" className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#ffffff] py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Benefits</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-5 text-center">
              Why Use a Free AI Stylist Instead of Guessing
            </h2>
            <p className="text-black/45 text-lg text-center mb-14 max-w-xl mx-auto">
              Stop spending time staring at your wardrobe. A free outfit maker app gives you a complete look in seconds.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map(({ icon, title, body }) => (
                <div key={title} className="p-6 rounded-2xl border border-black/[0.07] bg-[#fafafa]">
                  <span className="text-xl mb-3 block">{icon}</span>
                  <p className="font-semibold text-black text-sm mb-1.5">{title}</p>
                  <p className="text-black/55 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section data-nav-theme="dark-bg" className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6">
          <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.06) 0%, transparent 70%)" }} />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">Virtual Try-On</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
              Open Slidez AI Stylist
            </h2>
            <ul className="text-white/45 text-base space-y-2 mb-10 list-none">
              <li>· Upload your photo</li>
              <li>· Generate outfits with AI Stylist</li>
              <li>· Try clothes before buying</li>
            </ul>
            <a href="https://linkly.link/2FWYm" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.05] hover:-translate-y-px active:scale-[0.97] transition-all duration-200">
              Open Slidez AI Stylist
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section data-nav-theme="light-bg" className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#ffffff] py-24 px-6">
          <div className="max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">
              Frequently Asked
            </h2>
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
        <section data-nav-theme="dark-bg" className="relative z-[60] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-20 px-6">
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
