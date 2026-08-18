import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StylistToolHeroSection from "@/components/features/ai-stylist/StylistToolHeroSection";
import { ArrowRight, Sparkles, Shirt, Wand2, Eye, ShieldCheck, CheckCircle2, RefreshCw } from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata ─────────────────────────────────────────────────── */

const TITLE = "AI Clothes Recommender: Find Clothes That Suit Your Style";
const DESCRIPTION =
  "Find clothes that match your style with an AI clothes recommender. Get personalized fashion recommendations and discover new looks before you buy.";
const CANONICAL = `${CANONICAL_BASE}/ai-clothes-recommender`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ai clothes recommender",
    "ai clothing recommendations",
    "ai clothes recommendation",
    "ai clothing recommender",
    "ai fashion recommendations",
    "personalized clothing recommendations",
    "clothing recommendation app",
    "outfit recommendations",
    "fashion recommendation app",
    "personalized fashion recommendations",
    "clothing style recommendations",
    "online clothing recommendations",
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
  name: "How to Use Slidez's AI Clothes Recommender",
  description: "Step-by-step guide to discovering personalized clothing recommendations and complete outfit combinations using AI.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Share your style preference, occasion, or existing item",
      text: "Describe what you need — from a chic casual weekend outfit to a sharp office meeting look, or enter a piece you already own.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI generates personalized clothing recommendations",
      text: "The AI recommendation engine analyzes color theory, proportions, aesthetics, and fashion trends to assemble coordinated garments.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Refine and customize your curated look",
      text: "Explore alternative tops, bottoms, shoes, or accessories until the outfit perfectly matches your taste and vibe.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Virtually try on clothes before buying",
      text: "Upload your photo to preview the recommended clothes on your own body, making online shopping effortless and risk-free.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI clothes recommender?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI clothes recommender is an intelligent digital fashion tool that uses artificial intelligence and machine learning to analyze your style preferences, body proportions, and occasion needs to suggest clothing items and complete outfits that truly suit you.",
      },
    },
    {
      "@type": "Question",
      name: "How does an AI clothes recommender work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI clothes recommender works by evaluating fashion datasets, color harmony rules, garment cuts, and user inputs. When you provide a prompt, style vibe, or occasion, the AI matches complementary tops, bottoms, footwear, and accessories to produce cohesive personalized clothing recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI recommend clothes based on my personal style?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez adapts to your specific aesthetic — whether you prefer minimalist capsule wardrobes, bold streetwear, classic business casual, vintage, or modern chic. It learns from your feedback and saved looks to deliver tailored clothing style recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI clothes recommender consider my body shape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez lets you choose diverse representative model profiles or upload your own photo for virtual try-on, ensuring recommended garments flatter your unique silhouette, height, and proportions.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI recommend clothes for different occasions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Whether you need outfits for a formal wedding, summer vacation, first date, casual coffee run, job interview, or winter holiday party, the AI clothes recommender provides contextual outfit recommendations that fit the dress code.",
      },
    },
    {
      "@type": "Question",
      name: "Can Slidez help me find clothes that match my existing style?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can describe or upload pieces you already own (like a favorite black blazer or leather boots), and Slidez will suggest complementary items to build fresh, cohesive looks around your current wardrobe.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see how recommended clothes look before buying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez includes built-in AI Virtual Try-On. Upload a photo of yourself to see the recommended clothes fitted realistically onto your body before you make any online purchase.",
      },
    },
    {
      "@type": "Question",
      name: "Does Slidez offer personalized clothing recommendations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez offers deeply personalized fashion recommendations by combining occasion context, style cues, color matching, and virtual try-on previews specifically calibrated to your taste.",
      },
    },
    {
      "@type": "Question",
      name: "Is an AI clothes recommender better than traditional online shopping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional online shopping often leaves you scrolling through thousands of disjointed products with uncertainty about fit and pairing. An AI clothes recommender curates full outfits tailored to you and allows virtual try-on, saving hours of searching and drastically reducing returns.",
      },
    },
    {
      "@type": "Question",
      name: "Is Slidez's AI clothes recommender free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez is 100% free to use on iOS and Android. You can generate unlimited outfit recommendations, explore personalized clothing ideas, and try on looks with zero subscription fees.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "AI Clothes Recommender", item: CANONICAL },
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
  name: "Slidez AI Clothes Recommender",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: DESCRIPTION,
  url: CANONICAL,
};

/* ── Content Data ─────────────────────────────────────────────── */

const PROBLEM_POINTS = [
  {
    title: "Silhouette & Proportion Harmony",
    desc: "Stop buying pieces that look great on a mannequin but don't flatter your frame. Get cuts calibrated to your natural proportions.",
    img: "/inspiration/date-night.jpg",
    badge: "Proportion Matching",
  },
  {
    title: "Personal Taste & Aesthetic Matching",
    desc: "Whether you lean toward minimalist neutrals, street style, or relaxed luxury, the AI creates looks that resonate with your authentic style.",
    img: "/inspiration/street-minimal.jpg",
    badge: "Style Matching",
  },
  {
    title: "Color Theory & Contrast",
    desc: "Harmonize palettes that elevate your complexion and combine top, bottom, and accessory tones seamlessly.",
    img: "/inspiration/summer-casual.jpg",
    badge: "Palette Harmony",
  },
  {
    title: "Existing Wardrobe Integration",
    desc: "Build complete outfits around foundational items you already own instead of buying one-off items that collect dust.",
    img: "/inspiration/winter-street.jpg",
    badge: "Wardrobe Synergy",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Share your style preference or occasion",
    body: "Tell the AI what you're dressing for — a casual weekend brunch, an upscale dinner date, a job interview, or building around your favorite trench coat.",
  },
  {
    step: "02",
    title: "AI curates tailored clothing recommendations",
    body: "Our fashion recommendation algorithms evaluate thousands of garment pairings, color dynamics, and proportion rules to produce coordinated options.",
  },
  {
    step: "03",
    title: "Explore and refine complete outfits",
    body: "Swap individual tops, bottoms, shoes, or outerwear pieces with one click. Adjust the aesthetic from relaxed to formal instantly.",
  },
  {
    step: "04",
    title: "See how it looks on you before buying",
    body: "Upload your photo for instant virtual try-on. Experience true-to-life visualization so you can shop online with absolute certainty.",
  },
];

const FEATURES_GRID = [
  {
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    title: "Personalized Fashion Recommendations",
    desc: "Algorithms that understand your unique aesthetic, preferences, and lifestyle to deliver looks you will genuinely love wearing.",
  },
  {
    icon: <Wand2 className="w-5 h-5 text-indigo-500" />,
    title: "Instant Full-Outfit Generation",
    desc: "Get head-to-toe coordinated looks including tops, trousers, skirts, outerwear, shoes, and jewelry in under 3 seconds.",
  },
  {
    icon: <Eye className="w-5 h-5 text-emerald-500" />,
    title: "Built-In AI Virtual Try-On",
    desc: "Preview any recommended piece directly on your own photo to see realistic drape, fit, and proportions before checking out.",
  },
  {
    icon: <Shirt className="w-5 h-5 text-cyan-500" />,
    title: "Style With Clothes You Already Own",
    desc: "Integrate your existing closet. Tell the AI what you have, and it will recommend the missing pieces to complete the look.",
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-rose-500" />,
    title: "Multi-Occasion Style Intelligence",
    desc: "From smart casual and corporate office wear to festival streetwear, vacation vibes, and black-tie elegance.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-teal-500" />,
    title: "100% Free Forever",
    desc: "No hidden subscriptions or paywalls. Access full-featured AI clothing recommendations and virtual try-on at zero cost.",
  },
];

const FAQS_LIST = [
  {
    q: "What is an AI clothes recommender?",
    a: "An AI clothes recommender is an intelligent digital fashion tool that uses artificial intelligence and machine learning to analyze your style preferences, body proportions, and occasion needs to suggest clothing items and complete outfits that truly suit you.",
  },
  {
    q: "How does an AI clothes recommender work?",
    a: "An AI clothes recommender works by evaluating fashion datasets, color harmony rules, garment cuts, and user inputs. When you provide a prompt, style vibe, or occasion, the AI matches complementary tops, bottoms, footwear, and accessories to produce cohesive personalized clothing recommendations.",
  },
  {
    q: "Can AI recommend clothes based on my personal style?",
    a: "Yes. Slidez adapts to your specific aesthetic — whether you prefer minimalist capsule wardrobes, bold streetwear, classic business casual, vintage, or modern chic. It learns from your feedback and saved looks to deliver tailored clothing style recommendations.",
  },
  {
    q: "Can an AI clothes recommender consider my body shape?",
    a: "Yes. Slidez lets you choose diverse representative model profiles or upload your own photo for virtual try-on, ensuring recommended garments flatter your unique silhouette, height, and proportions.",
  },
  {
    q: "Can AI recommend clothes for different occasions?",
    a: "Absolutely. Whether you need outfits for a formal wedding, summer vacation, first date, casual coffee run, job interview, or winter holiday party, the AI clothes recommender provides contextual outfit recommendations that fit the dress code.",
  },
  {
    q: "Can Slidez help me find clothes that match my existing style?",
    a: "Yes. You can describe or upload pieces you already own (like a favorite black blazer or leather boots), and Slidez will suggest complementary items to build fresh, cohesive looks around your current wardrobe.",
  },
  {
    q: "Can I see how recommended clothes look before buying?",
    a: "Yes. Slidez includes built-in AI Virtual Try-On. Upload a photo of yourself to see the recommended clothes fitted realistically onto your body before you make any online purchase.",
  },
  {
    q: "Does Slidez offer personalized clothing recommendations?",
    a: "Yes. Slidez offers deeply personalized fashion recommendations by combining occasion context, style cues, color matching, and virtual try-on previews specifically calibrated to your taste.",
  },
  {
    q: "Is an AI clothes recommender better than traditional online shopping?",
    a: "Traditional online shopping often leaves you scrolling through thousands of disjointed products with uncertainty about fit and pairing. An AI clothes recommender curates full outfits tailored to you and allows virtual try-on, saving hours of searching and drastically reducing returns.",
  },
  {
    q: "Is Slidez's AI clothes recommender free to use?",
    a: "Yes. Slidez is 100% free to use on iOS and Android. You can generate unlimited outfit recommendations, explore personalized clothing ideas, and try on looks with zero subscription fees.",
  },
];

const RELATED_PAGES = [
  { label: "AI Fashion Stylist", href: "/ai-fashion-stylist", desc: "Create complete outfits and discover your signature look with AI." },
  { label: "Free AI Stylist App", href: "/free-ai-stylist-app", desc: "Plan your wardrobe with a free virtual stylist app." },
  { label: "AI Virtual Try-On", href: "/ai-virtual-try-on", desc: "See how clothes look on your photo before buying." },
  { label: "Outfit Ideas Hub", href: "/outfit-ideas", desc: "Browse curated AI outfit ideas for every event and dress code." },
  { label: "What to Wear", href: "/what-to-wear", desc: "Not sure what to wear today? Let AI style you in seconds." },
  { label: "Try On From Anywhere", href: "/try-on-from-anywhere", desc: "Import clothes from Instagram or shopping sites and try them on." },
];

/* ── Page Component ───────────────────────────────────────────── */

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

        {/* ── Fold 1: Hero Section with Interactive Stylist Tool ── */}
        <StylistToolHeroSection
          ariaLabel="Free AI clothes recommender"
          eyebrow="AI Clothes Recommender · Personalized Fashion"
          title="Free AI Clothes Recommender"
          subtitle="Find clothes that match your style with an AI clothes recommender. Get personalized fashion recommendations, discover coordinated looks, and try clothes on before you buy."
          submitLabel="Recommend outfits"
          chips={["Casual Chic", "Date Night", "Smart Office", "Minimalist", "Streetwear", "Summer Vacation", "Winter Warm"]}
          prompts={[
            "Find clothes that match a relaxed weekend brunch vibe",
            "Recommend an elegant dinner date outfit with leather jacket",
            "What should I wear to a creative office job interview?",
            "Style a monochrome minimalist outfit for autumn",
          ]}
          maxWidthClassName="max-w-3xl"
        />

        {/* ── Fold 2: Stop Guessing Which Clothes Will Suit You ── */}
        <section data-nav-theme="light-bg" className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">
              Personalized Fashion Intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-6 text-center max-w-3xl mx-auto">
              Stop Guessing Which Clothes Will Suit You
            </h2>
            <p className="text-black/55 text-base sm:text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Online shopping often leads to decision fatigue, mismatched items, and costly returns. Our AI clothing recommender analyzes cut, color, aesthetics, and proportions to ensure every piece works in harmony with your style.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {PROBLEM_POINTS.map(({ title, desc, img, badge }) => (
                <div
                  key={title}
                  className="group rounded-3xl border border-black/[0.08] bg-[#fafafa] p-6 sm:p-7 hover:border-black/20 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-black/5">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-medium rounded-full">
                      {badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
                    <p className="text-black/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fold 3: Smart AI Fashion Recommendations In Action ── */}
        <section data-nav-theme="dark-bg" className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#0a0a0a] py-24 px-6 text-white">
          <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.07) 0%, transparent 70%)" }} />
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
                Smart Curation Engine
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
                AI Clothing Recommendations Tailored to You
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                Experience full-look recommendations generated with deep understanding of garment pairing, body proportions, and lifestyle aesthetics.
              </p>
            </div>

            {/* Visual showcase grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-2xl bg-white/[0.06] text-white mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Style Taste Learning</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    The clothing recommendation app learns what you love and what you dismiss, continuously refining fashion recommendations to match your evolving wardrobe.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Adaptive Taste Mapping
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-2xl bg-white/[0.06] text-white mb-6">
                    <Shirt className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Complete Coordinated Looks</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Never worry about how to style a single piece. Get head-to-toe outfits including tops, bottoms, shoes, and accessories assembled seamlessly.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Full-Outfit Assembly
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-2xl bg-white/[0.06] text-white mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Virtual Fitting Preview</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Preview AI clothing recommendations on your own photo with realistic virtual try-on, eliminating the uncertainty of online fashion purchases.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Visual Try-On Included
                </div>
              </div>
            </div>

            {/* Quick stats banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Free to Use</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">&lt; 3s</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Instant Styling</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">500k+</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Looks Created</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">24/7</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Always Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fold 4: How Slidez's AI Clothes Recommender Works ── */}
        <section data-nav-theme="light-bg" className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">
              Step by Step
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5 text-center">
              How Slidez&apos;s AI Clothes Recommender Works
            </h2>
            <p className="text-black/50 text-base sm:text-lg text-center max-w-xl mx-auto mb-14 leading-relaxed">
              From entering a simple idea to seeing complete, photorealistic outfit suggestions on your body in four straightforward steps.
            </p>

            <ol className="space-y-6">
              {HOW_IT_WORKS_STEPS.map(({ step, title, body }) => (
                <li
                  key={step}
                  className="flex flex-col sm:flex-row gap-5 sm:gap-7 p-6 sm:p-8 rounded-3xl border border-black/[0.07] bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-black/20 shrink-0 leading-none pt-1">
                    {step}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-2">{title}</h3>
                    <p className="text-black/60 text-base leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Fold 5: See How Your Choices Look Before You Buy ── */}
        <section data-nav-theme="light-bg" className="relative z-[45] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-b border-black/[0.05]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">
                  Visual Fitting Room
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight mb-6">
                  See How Your Choices Could Look Before You Buy
                </h2>
                <p className="text-black/60 text-base sm:text-lg leading-relaxed mb-6">
                  No more wondering whether a trending jacket matches your frame or if those trousers drape properly. With Slidez, you don&apos;t just receive text suggestions — you see the outfit realistically fitted onto your photo.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">Eliminate Fitting Room Anxiety</p>
                      <p className="text-black/50 text-xs sm:text-sm">Preview cuts, sleeve lengths, and proportions accurately on your own figure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">Reduce Sizing and Return Hassles</p>
                      <p className="text-black/50 text-xs sm:text-sm">Make confident purchasing decisions and stop returning ill-fitting garments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">Mix Real Brands With Your Closet</p>
                      <p className="text-black/50 text-xs sm:text-sm">Test new pieces from top fashion retailers alongside your staple clothing.</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://linkly.link/2FWYm"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-black/80 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Try Virtual Dressing Room
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-black/[0.08] shadow-2xl bg-black/5">
                <Image
                  src="/screenshots/ai-stylist-demo.png"
                  alt="Slidez AI Clothes Recommender and Virtual Try-On demonstration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Fold 6: Everything You Need to Plan Better Outfits ── */}
        <section data-nav-theme="light-bg" className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#fafafa] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">
              All-In-One Styling Toolkit
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5 text-center">
              Everything You Need to Plan Better Outfits
            </h2>
            <p className="text-black/50 text-base sm:text-lg text-center max-w-xl mx-auto mb-16 leading-relaxed">
              Our fashion recommendation app combines deep style analysis, instant outfit assembly, and digital closet planning into one seamless experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES_GRID.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="p-7 rounded-3xl border border-black/[0.07] bg-white hover:border-black/20 hover:shadow-lg transition-all duration-200"
                >
                  <div className="p-3 rounded-2xl bg-black/[0.04] w-fit mb-5">{icon}</div>
                  <h3 className="font-bold text-black text-lg mb-2">{title}</h3>
                  <p className="text-black/55 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────── */}
        <section data-nav-theme="dark-bg" className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6">
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.06) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              Available Free on iOS & Android
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Get Personalized Clothing Recommendations Today
            </h2>
            <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands who style smarter, dress with confidence, and try on clothes virtually before purchasing.
            </p>
            <a
              href="https://linkly.link/2FWYm"
              className="inline-flex items-center gap-2 px-9 py-4 bg-white text-black text-sm font-semibold rounded-full shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.05] hover:-translate-y-px active:scale-[0.97] transition-all duration-200"
            >
              Open Slidez AI Clothes Recommender
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── Fold 7: Frequently Asked Questions ────────────────── */}
        <section data-nav-theme="light-bg" className="relative z-[60] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">
              Questions & Answers
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-14 text-center">
              Frequently Asked
            </h2>

            <div className="space-y-4">
              {FAQS_LIST.map(({ q, a }, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-black/[0.07] bg-white p-6 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="text-base sm:text-lg font-bold text-black group-hover:text-black/70 transition-colors duration-200 text-left">
                      {q}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/50 group-hover:border-black/30 transition-all duration-200 relative">
                      <span className="block w-3.5 h-px bg-current" />
                      <span className="block w-px h-3.5 bg-current absolute group-open:opacity-0 transition-opacity duration-200" />
                    </span>
                  </summary>
                  <p className="pt-4 text-black/65 text-sm sm:text-base leading-relaxed border-t border-black/[0.05] mt-4">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Pages ─────────────────────────────────────── */}
        <section data-nav-theme="dark-bg" className="relative z-[65] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
                Explore More
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Related Styling Features
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {RELATED_PAGES.map(({ label, href, desc }) => (
                <Link
                  key={label}
                  href={href}
                  className="group p-6 rounded-3xl border border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.25)] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-white text-base mb-1.5">{label}</h3>
                    <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/50 font-semibold mt-4 group-hover:text-white transition-colors duration-200">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="relative z-[70] -mt-10 rounded-t-[2.5rem] overflow-hidden">
          <Footer />
        </div>
      </main>
    </>
  );
}
