import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StylistToolHeroSection from "@/components/features/ai-stylist/StylistToolHeroSection";
import { ArrowRight, Sparkles, Wand2, Camera, Eye, Layers, ShieldCheck, CheckCircle2, ShoppingBag } from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata ─────────────────────────────────────────────────── */

const TITLE = "AI Outfit Generator: Create Personalized Outfits Instantly";
const DESCRIPTION =
  "Plan outfits effortlessly with an AI-powered outfit planner app. Organize your wardrobe, create stylish looks, and get personalized outfit recommendations.";
const CANONICAL = `${CANONICAL_BASE}/ai-outfit-generator`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI Outfit Generator",
    "ai outfit generator",
    "ai outfit generator app",
    "ai outfit creator",
    "ai outfit maker",
    "outfit generator",
    "outfit generator from photo",
    "outfit inspiration",
    "free ai outfit generator",
    "ai clothing app",
    "virtual outfit planner",
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
  name: "How to Use Slidez's AI Outfit Generator",
  description: "Create complete, personalized outfits and try them on virtually using Slidez AI Outfit Generator.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Describe your event, aesthetic, or upload a photo",
      text: "Enter your style prompt — such as 'casual date night outfit' or 'smart casual for a tech conference' — or upload a photo of a clothing item you want to style.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "AI generates a complete coordinated outfit",
      text: "The AI outfit maker matches tops, bottoms, outerwear, footwear, and accessories tailored to your vibe and body proportions.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Refine and explore alternative pieces",
      text: "Easily swap individual items, experiment with different colorways, or adjust the formality with a single tap.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Virtually try on the outfit on your own photo",
      text: "See how the full ensemble looks on your body using realistic AI Virtual Try-On before making any buying decisions.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI outfit generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI outfit generator is an advanced digital fashion tool that uses artificial intelligence to instantly create complete, stylish outfit combinations. By analyzing your prompts, style preferences, occasion, or uploaded photos, it suggests harmonized tops, bottoms, shoes, and accessories.",
      },
    },
    {
      "@type": "Question",
      name: "How does an AI outfit generator work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI outfit generator leverages deep learning models trained on fashion design principles, color theory, aesthetic categories, and garment pairings. When given an occasion or style description, it evaluates millions of combinations to assemble a cohesive look in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "Can I generate outfits based on my personal style?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez adapts to any personal aesthetic — including minimalist, streetwear, old money, vintage, business chic, bohemian, or casual luxury. As you interact, the AI tailors its suggestions to your specific preferences.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI outfit generator create outfits from a photo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With Slidez, you can upload a photo of any clothing item you own or see online (such as a jacket, dress, or pair of sneakers), and the AI will generate full outfits built around that specific item.",
      },
    },
    {
      "@type": "Question",
      name: "Can I generate outfits for different occasions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Slidez covers hundreds of occasions — including cocktail parties, weddings, date nights, casual weekends, office workdays, concert festivals, beach vacations, and seasonal gatherings.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI recommend clothes that match my style?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez provides personalized clothing recommendations that align with your taste, silhouette, and favorite color palettes, helping you discover new pieces that integrate seamlessly into your wardrobe.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try an outfit virtually before buying it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez includes realistic AI Virtual Try-On. You can upload your photo to preview how any generated outfit fits and drapes on your body before purchasing.",
      },
    },
    {
      "@type": "Question",
      name: "Is Slidez's AI outfit generator free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez is completely free on iOS and Android. You can generate unlimited outfits, plan your wardrobe, and use virtual try-on at no cost without hidden subscriptions.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI outfit generator help me shop for new clothes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez curates pieces from leading fashion brands and allows you to discover where to buy individual items that make up your generated look.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an AI outfit generator and an AI stylist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI outfit generator focuses primarily on instantly assembling and generating complete clothing combinations from prompts or photos. An AI stylist encompasses broader personal styling features, such as continuous taste learning, wardrobe auditing, body shape consultation, and virtual try-on. Slidez brings both capabilities together in one unified app.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "AI Outfit Generator", item: CANONICAL },
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
  name: "Slidez AI Outfit Generator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: DESCRIPTION,
  url: CANONICAL,
};

/* ── Content Data ─────────────────────────────────────────────── */

const OUTFIT_CREATOR_CARDS = [
  {
    title: "Instant Style Matching",
    desc: "Generate coordinated outfits from a simple prompt or event vibe. Complete looks assembled in seconds without endless searching.",
    img: "/inspiration/party.jpg",
    badge: "Prompt to Outfit",
  },
  {
    title: "Outfit Generator From Photo",
    desc: "Upload a picture of an item from your closet or social media. The AI builds complementary outfits around that centerpiece.",
    img: "/inspiration/black-dress.jpg",
    badge: "Photo-Driven",
  },
  {
    title: "Endless Outfit Inspiration",
    desc: "Discover trending aesthetics, fresh layering concepts, and seasonal color palettes customized to your aesthetic.",
    img: "/inspiration/casual-men.jpg",
    badge: "Inspiration Engine",
  },
  {
    title: "Proportion & Silhouette Balance",
    desc: "Achieve balanced proportions with curated pairings of outerwear, tops, tailored trousers, footwear, and accessories.",
    img: "/inspiration/winter-street.jpg",
    badge: "Proportion Harmony",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Describe your occasion or upload a photo",
    body: "Tell the AI what you need — from a chic dinner date look to a summer festival outfit — or upload a photo of a piece you want to style.",
  },
  {
    step: "02",
    title: "AI analyzes aesthetics, cuts, and colors",
    body: "The AI outfit creator evaluates thousands of garment combinations, matching cuts, textures, and color harmonies into a complete look.",
  },
  {
    step: "03",
    title: "Customize and refine individual pieces",
    body: "Review the suggested ensemble. Swap pieces, adjust footwear, or switch layers with instant alternative recommendations.",
  },
  {
    step: "04",
    title: "Virtually try on your outfit before buying",
    body: "See the finished look on your own photo using AI Virtual Try-On, making online styling and shopping completely effortless.",
  },
];

const FEATURES_GRID = [
  {
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    title: "AI Outfit Creator & Maker",
    desc: "Generate complete, fashion-forward outfits with tops, bottoms, shoes, and accessories matched for any dress code.",
  },
  {
    icon: <Camera className="w-5 h-5 text-indigo-500" />,
    title: "Outfit Generator From Photo",
    desc: "Snap a photo of a single clothing item or screenshot an aesthetic you love to generate full looks built around it.",
  },
  {
    icon: <Wand2 className="w-5 h-5 text-purple-500" />,
    title: "Daily Outfit Inspiration",
    desc: "Never struggle with what to wear. Get curated daily styling ideas tailored to the weather, your schedule, and personal taste.",
  },
  {
    icon: <Eye className="w-5 h-5 text-emerald-500" />,
    title: "AI Virtual Try-On",
    desc: "Preview any generated outfit directly on your body before buying. Test proportions, colors, and drape in realistic photorealism.",
  },
  {
    icon: <Layers className="w-5 h-5 text-cyan-500" />,
    title: "Closet & Wardrobe Integration",
    desc: "Style pieces you already own with fresh recommendations, maximizing the versatility of your current wardrobe.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-teal-500" />,
    title: "Free to Use Forever",
    desc: "Enjoy unlimited outfit creation, prompt-based styling, and virtual try-on with zero subscription fees.",
  },
];

const FAQS_LIST = [
  {
    q: "What is an AI outfit generator?",
    a: "An AI outfit generator is an advanced digital fashion tool that uses artificial intelligence to instantly create complete, stylish outfit combinations. By analyzing your prompts, style preferences, occasion, or uploaded photos, it suggests harmonized tops, bottoms, shoes, and accessories.",
  },
  {
    q: "How does an AI outfit generator work?",
    a: "An AI outfit generator leverages deep learning models trained on fashion design principles, color theory, aesthetic categories, and garment pairings. When given an occasion or style description, it evaluates millions of combinations to assemble a cohesive look in seconds.",
  },
  {
    q: "Can I generate outfits based on my personal style?",
    a: "Yes. Slidez adapts to any personal aesthetic — including minimalist, streetwear, old money, vintage, business chic, bohemian, or casual luxury. As you interact, the AI tailors its suggestions to your specific preferences.",
  },
  {
    q: "Can an AI outfit generator create outfits from a photo?",
    a: "Yes. With Slidez, you can upload a photo of any clothing item you own or see online (such as a jacket, dress, or pair of sneakers), and the AI will generate full outfits built around that specific item.",
  },
  {
    q: "Can I generate outfits for different occasions?",
    a: "Absolutely. Slidez covers hundreds of occasions — including cocktail parties, weddings, date nights, casual weekends, office workdays, concert festivals, beach vacations, and seasonal gatherings.",
  },
  {
    q: "Can AI recommend clothes that match my style?",
    a: "Yes. Slidez provides personalized clothing recommendations that align with your taste, silhouette, and favorite color palettes, helping you discover new pieces that integrate seamlessly into your wardrobe.",
  },
  {
    q: "Can I try an outfit virtually before buying it?",
    a: "Yes. Slidez includes realistic AI Virtual Try-On. You can upload your photo to preview how any generated outfit fits and drapes on your body before purchasing.",
  },
  {
    q: "Is Slidez's AI outfit generator free to use?",
    a: "Yes. Slidez is completely free on iOS and Android. You can generate unlimited outfits, plan your wardrobe, and use virtual try-on at no cost without hidden subscriptions.",
  },
  {
    q: "Can an AI outfit generator help me shop for new clothes?",
    a: "Yes. Slidez curates pieces from leading fashion brands and allows you to discover where to buy individual items that make up your generated look.",
  },
  {
    q: "What is the difference between an AI outfit generator and an AI stylist?",
    a: "An AI outfit generator focuses primarily on instantly assembling and generating complete clothing combinations from prompts or photos. An AI stylist encompasses broader personal styling features, such as continuous taste learning, wardrobe auditing, body shape consultation, and virtual try-on. Slidez brings both capabilities together in one unified app.",
  },
];

const RELATED_PAGES = [
  { label: "AI Clothes Recommender", href: "/ai-clothes-recommender", desc: "Get smart, personalized clothing recommendations tailored to your style." },
  { label: "AI Fashion Stylist", href: "/ai-fashion-stylist", desc: "Create complete outfits and discover your signature look with AI." },
  { label: "Free AI Stylist App", href: "/free-ai-stylist-app", desc: "Plan your wardrobe with a free virtual stylist app." },
  { label: "AI Virtual Try-On", href: "/ai-virtual-try-on", desc: "See how clothes look on your photo before buying." },
  { label: "Outfit Ideas Hub", href: "/outfit-ideas", desc: "Browse curated AI outfit ideas for every event and dress code." },
  { label: "What to Wear", href: "/what-to-wear", desc: "Not sure what to wear today? Let AI style you in seconds." },
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
          ariaLabel="Free AI outfit generator"
          eyebrow="AI Outfit Generator · Smart Style Creator"
          title="Free AI Outfit Generator"
          subtitle="Create personalized outfits instantly with an AI outfit generator app. Discover endless outfit inspiration, generate complete looks with our AI outfit creator, and try on styles before you buy."
          submitLabel="Generate outfit"
          chips={["Date Night", "Streetwear", "Minimalist Casual", "Office Meeting", "Party Vibe", "Summer Beach", "Autumn Layering"]}
          prompts={[
            "Create a chic date night outfit with neutral tones",
            "Generate a street style look with baggy jeans and sneakers",
            "What should I wear to an outdoor summer wedding?",
            "Style a cozy minimalist winter outfit with a trench coat",
          ]}
          maxWidthClassName="max-w-3xl"
        />

        {/* ── Fold 2: Create Your Perfect Outfit With AI ── */}
        <section data-nav-theme="light-bg" className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">
              Intelligent Outfit Creation
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-6 text-center max-w-3xl mx-auto">
              Create Your Perfect Outfit With AI
            </h2>
            <p className="text-black/55 text-base sm:text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Never get stuck staring at an empty wardrobe. Our AI outfit creator transforms simple style prompts and photos into complete, coordinated outfits ready for any occasion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {OUTFIT_CREATOR_CARDS.map(({ title, desc, img, badge }) => (
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

        {/* ── Fold 3: Smart AI Outfit Creator in Action ── */}
        <section data-nav-theme="dark-bg" className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#0a0a0a] py-24 px-6 text-white">
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.07) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
                State-of-the-Art Outfit Engine
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
                AI Outfit Maker for Every Dress Code
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                Whether you need everyday casual inspiration or a high-impact evening look, our AI generates balanced, head-to-toe styling instantly.
              </p>
            </div>

            {/* Feature showcase cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-2xl bg-white/[0.06] text-white mb-6">
                    <Wand2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Prompt-to-Look Generation</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Type any vibe, aesthetic, or event. The AI outfit generator creates fully matched clothing combinations ready to wear.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Instant Style Generation
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-2xl bg-white/[0.06] text-white mb-6">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Outfit Generator From Photo</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Upload an image of a single piece from your closet or Pinterest, and let the AI build coordinated looks around it.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Visual Wardrobe Pairing
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex p-3 rounded-2xl bg-white/[0.06] text-white mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Virtual Try-On Confidence</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Try on your generated outfits virtually on your own photo before you buy anything, guaranteeing the perfect look.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-white/70 text-xs font-semibold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Photorealistic Try-On
                </div>
              </div>
            </div>

            {/* Quick stats banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02] text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Free App</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">&lt; 3s</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Generation Speed</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">100+</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Dress Codes</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">24/7</p>
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider">Style On Demand</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fold 4: How Slidez's AI Outfit Generator Works ── */}
        <section data-nav-theme="light-bg" className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4 text-center">
              Step by Step
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5 text-center">
              How Slidez&apos;s AI Outfit Generator Works
            </h2>
            <p className="text-black/50 text-base sm:text-lg text-center max-w-xl mx-auto mb-14 leading-relaxed">
              Turn any idea into a fully styled, photorealistic outfit in four easy steps.
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

        {/* ── Fold 5: See Your Outfit Before You Buy ── */}
        <section data-nav-theme="light-bg" className="relative z-[45] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-b border-black/[0.05]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">
                  Virtual Try-On Experience
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight mb-6">
                  See Your Outfit Before You Buy
                </h2>
                <p className="text-black/60 text-base sm:text-lg leading-relaxed mb-6">
                  Shopping online shouldn&apos;t feel like a gamble. Slidez lets you test full outfits on your own photo, so you can evaluate proportions, color contrast, and styling compatibility before spending a penny.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">Accurate Fit & Silhouette Preview</p>
                      <p className="text-black/50 text-xs sm:text-sm">See how different garment silhouettes hang and look on your natural frame.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">Shop Directly From Outfits</p>
                      <p className="text-black/50 text-xs sm:text-sm">Easily find and purchase the exact items curated in your generated looks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="p-1 rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">Zero Guesswork or Returns</p>
                      <p className="text-black/50 text-xs sm:text-sm">Know with total confidence that the outfit looks stunning before you order.</p>
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
                  src="/screenshots/import-outfit-mockup.png"
                  alt="Slidez AI Outfit Generator and Virtual Try-On demonstration"
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
              Comprehensive Outfit Planner
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight mb-5 text-center">
              Everything You Need to Plan Better Outfits
            </h2>
            <p className="text-black/50 text-base sm:text-lg text-center max-w-xl mx-auto mb-16 leading-relaxed">
              Our AI outfit creator combines instant prompt styling, photo-driven garment pairing, and virtual try-on into one easy-to-use platform.
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
              Create Your Dream Outfits With AI
            </h2>
            <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Explore limitless outfit combinations, style clothes from your closet, and try on new looks virtually in seconds.
            </p>
            <a
              href="https://linkly.link/2FWYm"
              className="inline-flex items-center gap-2 px-9 py-4 bg-white text-black text-sm font-semibold rounded-full shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.05] hover:-translate-y-px active:scale-[0.97] transition-all duration-200"
            >
              Open Slidez AI Outfit Generator
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
