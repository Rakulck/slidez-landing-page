import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StylistToolHeroSection, { StylistToolSection } from "@/components/features/ai-stylist/StylistToolHeroSection";
import { ArrowRight } from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata ─────────────────────────────────────────────────── */

const TITLE       = "AI Fashion Stylist: Create Perfect Outfits Instantly";
const DESCRIPTION = "Discover your personal AI fashion stylist. Generate outfits, try styles virtually, and plan looks using your wardrobe in seconds.";
const CANONICAL   = `${CANONICAL_BASE}/ai-fashion-stylist`;
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ai fashion stylist",
    "ai stylist",
    "ai outfit generator",
    "virtual stylist app",
    "ai clothing app",
    "personal stylist app",
    "ai outfit planner",
    "fashion ai app",
    "ai style assistant",
    "outfit maker app",
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
  name: "How to Use an AI Fashion Stylist",
  description: "How to create outfits and style your wardrobe using an AI fashion stylist app.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Describe your occasion or style goal", text: "Tell the AI fashion stylist what you need — a date night look, an office outfit, a party vibe, or build around a specific piece you already own." },
    { "@type": "HowToStep", position: 2, name: "AI builds a complete outfit", text: "The AI outfit generator creates a full coordinated look: top, bottom, shoes, and accessories — matched for style, proportion, and occasion." },
    { "@type": "HowToStep", position: 3, name: "Refine and personalise", text: "Swap pieces, adjust the vibe, or ask for alternatives. Your AI style assistant adapts until the outfit feels right." },
    { "@type": "HowToStep", position: 4, name: "Try on virtually and shop", text: "Use Slidez virtual try-on to see the outfit on your own photo before buying a single item." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI fashion stylist?",
      acceptedAnswer: { "@type": "Answer", text: "An AI fashion stylist is a digital tool that uses artificial intelligence to generate personalised outfit recommendations based on your occasion, vibe, or existing wardrobe. Unlike a traditional personal stylist app, an AI fashion stylist is available 24/7 and gives you a complete look — top, bottom, shoes, and accessories — in seconds. Slidez is an AI fashion stylist available free on iOS and Android." },
    },
    {
      "@type": "Question",
      name: "How does an AI fashion stylist work?",
      acceptedAnswer: { "@type": "Answer", text: "An AI fashion stylist works by analysing your text prompt — occasion, vibe, or a specific item — and using machine learning trained on fashion data to generate coordinated outfit suggestions. Slidez goes further by letting you try on outfits virtually using your own photo, so you can see exactly how each look will appear before buying." },
    },
    {
      "@type": "Question",
      name: "Can an AI stylist create outfits using my existing wardrobe?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez's AI outfit planner can style full looks around pieces you already own. Simply describe a clothing item you want to build around — a leather jacket, a pair of white trainers, or a floral dress — and the AI clothing app will suggest what to pair it with for any occasion." },
    },
    {
      "@type": "Question",
      name: "Does an AI fashion stylist consider my body type and preferences?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez lets you upload your own photo and choose a model that reflects your look, so outfit suggestions are displayed on a representation that matches you. The AI style assistant also adapts to your stated vibe, occasion, and preferences with each new prompt." },
    },
    {
      "@type": "Question",
      name: "Can an AI stylist show how clothes look on me before I choose?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez includes a built-in virtual try-on feature. Once the AI fashion stylist generates an outfit, upload your photo and see exactly how the clothes look on you — before spending anything." },
    },
    {
      "@type": "Question",
      name: "Are AI fashion stylist apps free to use?",
      acceptedAnswer: { "@type": "Answer", text: "Slidez is free to download and use on iOS and Android. The AI outfit generator, virtual stylist app features, and virtual try-on are all available at no cost. No subscription required." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "AI Fashion Stylist", item: CANONICAL },
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
  name: "Slidez AI Fashion Stylist",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: DESCRIPTION,
  url: CANONICAL,
};

/* ── Data ─────────────────────────────────────────────────────── */

const SAMPLE_LOOKS = [
  { src: "/outfits/restaurant-dinner.jpeg", alt: "Date night outfit by Slidez AI fashion stylist" },
  { src: "/outfits/winter-office.jpeg",     alt: "Office outfit by Slidez AI fashion stylist" },
  { src: "/outfits/party-look.jpeg",        alt: "Party outfit by Slidez AI fashion stylist" },
  { src: "/outfits/beach-look.jpeg",        alt: "Casual outfit by Slidez AI fashion stylist" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Describe your occasion or style goal", body: "Tell the AI fashion stylist what you need — a date night, an office day, a party look, or build around a piece you already own like a leather jacket or white sneakers." },
  { step: "02", title: "AI generates a complete, coordinated outfit", body: "The AI outfit generator creates a full look: top, bottom, shoes, and accessories — all matched for colour, proportion, and the occasion you described." },
  { step: "03", title: "Refine with your AI style assistant", body: "Ask for alternatives, swap individual pieces, or adjust the vibe. Your personal stylist app adapts to your feedback until the look feels right." },
  { step: "04", title: "Try it on virtually and shop with confidence", body: "Upload your photo and see the outfit on you using Slidez virtual try-on before committing to any purchase." },
];

const BENEFITS = [
const BENEFITS = [
  { icon: "✦", title: "Instant outfit ideas", body: "Get a complete look in seconds — no endless scrolling, no guessing. Faster than any fashion ai app or outfit maker app." },
  { icon: "🎨", title: "Coordinated head-to-toe", body: "Every suggestion is a complete outfit — top, bottom, shoes, accessories — matched for colour and proportion." },
  { icon: "🎯", title: "Occasion-ready", body: "Casual, office, date night, party, winter — your AI style assistant covers every dress code and context." },
  { icon: "👗", title: "Works from your wardrobe", body: "Describe pieces you already own and the ai clothing app builds complete looks around them." },
  { icon: "📸", title: "Virtual try-on included", body: "See outfits on your own photo before buying. The virtual stylist app removes all the guesswork." },
  { icon: "🕐", title: "Always available", body: "Your personal stylist app is available 24/7 — style your look at any time, from anywhere." },
];

const RELATED = [
  { label: "Free AI Stylist App",   href: "/free-ai-stylist-app",   desc: "Try the free AI stylist app on iOS and Android." },
  { label: "AI Virtual Try-On",     href: "/ai-virtual-try-on",     desc: "See how clothes look on you before buying." },
  { label: "Outfit Ideas",          href: "/outfit-ideas",          desc: "Browse AI outfit ideas for any occasion." },
  { label: "What to Wear",          href: "/what-to-wear",          desc: "Not sure what to wear? Let AI decide." },
];

const RECOMMENDED_READING = [
  { label: "What is an AI Fashion Stylist?", href: "/blog/what-is-ai-fashion-stylist", desc: "Learn how AI is changing the way we dress and plan outfits." },
  { label: "Best AI Stylist Apps in 2026", href: "/blog/best-ai-stylist-apps-2026", desc: "Compare the top AI styling apps available today." },
  { label: "Virtual Try-On vs Online Shopping", href: "/blog/virtual-try-on-vs-online-shopping", desc: "Why trying on clothes virtually is the future of fashion." },
  { label: "AI vs Human Stylist", href: "/blog/ai-stylist-vs-human-stylist", desc: "Which one is right for your wardrobe and budget?" },
];

const FAQS = [
  { q: "What is an AI fashion stylist?", a: "An AI fashion stylist is a digital tool that uses artificial intelligence to generate personalised outfit recommendations based on your occasion, vibe, or existing wardrobe. Unlike a traditional personal stylist app, an AI fashion stylist is available 24/7 and gives you a complete look — top, bottom, shoes, and accessories — in seconds. Slidez is an AI fashion stylist available free on iOS and Android." },
  { q: "How does an AI fashion stylist work?", a: "An AI fashion stylist works by analysing your text prompt — occasion, vibe, or a specific item — and using machine learning trained on fashion data to generate coordinated outfit suggestions. Slidez goes further by letting you try on outfits virtually using your own photo, so you can see exactly how each look will appear before buying." },
  { q: "Can an AI stylist create outfits using my existing wardrobe?", a: "Yes. Slidez's AI outfit planner can style full looks around pieces you already own. Simply describe a clothing item you want to build around — a leather jacket, a pair of white trainers, or a floral dress — and the AI clothing app will suggest what to pair it with for any occasion." },
  { q: "Does an AI fashion stylist consider my body type and preferences?", a: "Yes. Slidez lets you upload your own photo and choose a model that reflects your look, so outfit suggestions are displayed on a representation that matches you. The AI style assistant also adapts to your stated vibe, occasion, and preferences with each new prompt." },
  { q: "Can an AI stylist show how clothes look on me before I choose?", a: "Yes. Slidez includes a built-in virtual try-on feature. Once the AI fashion stylist generates an outfit, upload your photo and see exactly how the clothes look on you — before spending anything." },
  { q: "Are AI fashion stylist apps free to use?", a: "Slidez is free to download and use on iOS and Android. The AI outfit generator, virtual stylist app features, and virtual try-on are all available at no cost. No subscription required." },
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
          ariaLabel="AI fashion stylist"
          eyebrow="AI Fashion Stylist · Free to Use"
          title="AI Fashion Stylist"
          subtitle={
            <>
              Your personal AI stylist and AI outfit generator — describe your vibe, occasion, or a single item and get a complete look instantly.
              The virtual stylist app that works from your wardrobe, free on iOS and Android.
            </>
          }
          submitLabel="Style me"
          chips={["Casual", "Office", "Date Night", "Winter", "Party", "Vacation"]}
          maxWidthClassName="max-w-3xl"
        />

        {/* ── Tired of Guessing ─────────────────────────────── */}
        <section data-nav-theme="light-bg" className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-6 text-center">
              Tired of Buying Clothes That Don&apos;t Suit You?<br className="hidden md:block" /> Let an AI Fashion Stylist Help
            </h2>
            <p className="text-black/45 text-lg text-center mb-14 max-w-2xl mx-auto">
              Most people buy clothes that never get worn. An AI fashion stylist fixes that — generating complete, coordinated looks you&apos;ll actually wear, before you spend a cent.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
              {SAMPLE_LOOKS.map(({ src, alt }) => (
                <div key={src} className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-[#f0f0f0]">
                  <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
              ))}
            </div>
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

        {/* ── Create Your Own Style ─────────────────────────── */}
        <section data-nav-theme="dark-bg" className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6">
          <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.05) 0%, transparent 70%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">AI Stylist</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Create Your Own Style With AI
            </h2>
            <p className="text-white/40 text-base mb-10 max-w-md mx-auto">
              Type anything — occasion, vibe, or a single item you want to build around.
            </p>
            <StylistToolSection
              submitLabel="Style me"
              chips={["Casual", "Office", "Date Night", "Winter", "Party", "Vacation"]}
              className="w-full max-w-[800px] mx-auto"
            />
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────── */}
        <section data-nav-theme="light-bg" className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-14 text-center">
              How Slidez&apos;s AI Fashion Stylist Helps
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
        <section data-nav-theme="light-bg" className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
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

        {/* ── Recommended Reading ─────────────────────────── */}
        <section data-nav-theme="light-bg" className="relative z-[58] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">On The Blog</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Recommended Reading</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RECOMMENDED_READING.map(({ label, href, desc }) => (
                <a key={label} href={href} className="group p-6 rounded-2xl border border-black/[0.07] bg-[#fafafa] hover:border-black/[0.15] hover:bg-white transition-all duration-200 flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-black text-lg mb-2 group-hover:text-black/80 transition-colors">{label}</p>
                    <p className="text-black/60 text-sm leading-relaxed mb-4">{desc}</p>
                  </div>
                  <div className="flex items-center text-sm font-semibold text-black/40 group-hover:text-black transition-colors">
                    Read article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
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
