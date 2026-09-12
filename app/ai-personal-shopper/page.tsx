import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StylistToolHeroSection, { StylistToolSection } from "@/components/features/ai-stylist/StylistToolHeroSection";
import {
  ArrowRight,
  Sparkles,
  Shirt,
  Wand2,
  Eye,
  ShoppingBag,
  Compass,
  Palette,
  CheckCircle2,
  RefreshCw,
  Layers,
  HeartHandshake,
  ShieldCheck,
  Search,
} from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata & SEO ───────────────────────────────────────────── */

const TITLE = "AI Personal Shopper: Find Clothes for Your Style";
const DESCRIPTION =
  "Find clothes you'll love with an AI personal shopper. Get personalized fashion recommendations, discover new outfits, and see looks before you buy.";
const CANONICAL = `${CANONICAL_BASE}/ai-personal-shopper`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ai personal shopper",
    "ai personal shopper app",
    "ai personal shopping assistant",
    "ai fashion personal shopper",
    "ai shopping assistant",
    "personalized shopping assistant",
    "personalized fashion shopping",
    "ai clothing shopping assistant",
    "fashion shopping app",
    "personal shopper app",
    "ai clothes shopping assistant",
    "personalized clothing recommendations",
    "ai fashion recommendations",
    "online personal shopper",
    "virtual personal shopper",
    "smart fashion shopping",
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

/* ── Structured Data Schemas (JSON-LD) ────────────────────────── */

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Slidez's AI Personal Shopper Works",
  description:
    "Follow these 5 steps to find clothes you love, get personalized fashion recommendations, and visualize outfits on yourself before shopping.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Tell Slidez What You're Looking For",
      text: "Describe the style, occasion, clothing item, or type of outfit you want. From effortless weekend casual to formal events, tell the AI shopping assistant your aesthetic.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Get Personalized Fashion Recommendations",
      text: "Slidez helps you discover clothing and outfit ideas based on your preferences, silhouette, and color harmony.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Explore Different Looks",
      text: "Compare styles, combinations, colors, and complete coordinated outfits with tops, bottoms, outerwear, and accessories.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "See the Look on You",
      text: "Use built-in AI virtual try-on to visualize selected clothing and complete outfits realistically on your own photo before making any purchase.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Shop With More Confidence",
      text: "Find the clothes you truly love, eliminate fit uncertainty, and make well-informed purchase decisions with zero buyer's remorse.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI personal shopper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI personal shopper is an intelligent digital shopping assistant that leverages artificial intelligence to understand your personal style, body proportions, and wardrobe needs. Unlike traditional retail algorithms that push generic bestsellers, an AI personal shopper curates head-to-toe outfits, suggests complementary garments, and helps you discover clothes you will genuinely wear.",
      },
    },
    {
      "@type": "Question",
      name: "How does an AI personal shopper work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI personal shopper works by analyzing your style prompts, preferred aesthetics, occasion dress codes, and fit criteria. It scans extensive fashion catalogs and style knowledge to assemble balanced, cohesive outfits. On Slidez, it also incorporates realistic virtual try-on technology, allowing you to preview recommended clothes directly on your photo.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI personal shopper recommend clothes based on my style?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez adapts specifically to your aesthetic — whether you favor minimalist streetwear, quiet luxury, relaxed business casual, vintage bohemian, or athletic casual. The AI clothing shopping assistant refines recommendations as you save or swap pieces, tailoring each look to your distinct taste.",
      },
    },
    {
      "@type": "Question",
      name: "Can Slidez recommend clothes for different occasions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Whether you need an outfit for a summer wedding, a job interview, date night at a rooftop restaurant, a casual coffee meet-up, or winter holiday travels, Slidez suggests occasion-ready fashion that respects dress codes while elevating your personal vibe.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI personal shopper consider my preferences when recommending clothes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez considers your color preferences, preferred silhouettes, coverage requirements, and specific items you want to style around (such as a black blazer or leather boots) to create tailored, cohesive looks.",
      },
    },
    {
      "@type": "Question",
      name: "Can Slidez help me discover new clothing styles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! If you are stuck in a style rut, Slidez introduces fresh fashion aesthetics, trend-forward layering ideas, and new color combinations that step slightly outside your comfort zone while still flattering your proportions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see how recommended clothes look on me before buying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez includes an advanced AI virtual try-on engine. Simply upload a photo of yourself or select a representative model profile, and you can see how recommended garments drape, fit, and combine on your body before spending any money.",
      },
    },
    {
      "@type": "Question",
      name: "Does Slidez offer personalized fashion recommendations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez specializes in hyper-personalized fashion shopping. Every recommendation is built around your individual style prompts, occasion context, and virtual try-on feedback rather than one-size-fits-all advertisements.",
      },
    },
    {
      "@type": "Question",
      name: "Can an AI personal shopper help me shop online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez helps you browse items from top online fashion brands, discover where to purchase each component of an outfit, and import items from any shopping site or social platform (like Instagram and Pinterest) to try them on virtually.",
      },
    },
    {
      "@type": "Question",
      name: "Is Slidez's AI personal shopper free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez's AI personal shopper app is 100% free to use on iOS, Android, and web. You can generate unlimited outfit recommendations, explore personalized clothing ideas, and try on looks with zero subscription fees.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "AI Personal Shopper", item: CANONICAL },
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
  name: "Slidez AI Personal Shopper",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: DESCRIPTION,
  url: CANONICAL,
};

/* ── Content Data ─────────────────────────────────────────────── */

const SAMPLE_LOOKS = [
  {
    title: "Minimalist City Chic",
    occasion: "Daily Smart Casual",
    vibe: "Clean, Tailored, Modern",
    src: "/inspiration/street-minimal.jpg",
    alt: "Minimalist city chic outfit recommended by Slidez AI personal shopper",
    tags: ["Neutral Palette", "Wide-Leg Trousers", "Boxy Blazer"],
  },
  {
    title: "Elevated Dinner Date",
    occasion: "Evening Drinks & Dinner",
    vibe: "Sleek, Sophisticated, Confident",
    src: "/outfits/restaurant-dinner.jpeg",
    alt: "Evening dinner date outfit curated by personal shopping assistant",
    tags: ["Midi Dress / Silk Skirt", "Statement Jewelry", "Heeled Boots"],
  },
  {
    title: "Smart Casual Office",
    occasion: "Workplace & Client Meetings",
    vibe: "Polished, Comfortable, Professional",
    src: "/outfits/winter-office.jpeg",
    alt: "Smart office outfit recommended by AI fashion personal shopper",
    tags: ["Layered Knitwear", "Structured Trousers", "Classic Loafers"],
  },
  {
    title: "Weekend Brunch & Stroll",
    occasion: "Casual Weekend Vibes",
    vibe: "Effortless, Relaxed, Contemporary",
    src: "/inspiration/summer-casual.jpg",
    alt: "Relaxed weekend brunch outfit styled by virtual personal shopper",
    tags: ["Relaxed Denim", "Linen Shirt", "Minimal White Sneakers"],
  },
];

const SHOPPING_UNCERTAINTY_SOLUTIONS = [
  {
    icon: <Eye className="w-5 h-5 text-neutral-900" />,
    title: "Eliminate Sizing & Fit Guesswork",
    body: "Stop wondering if clothes will flatter your proportions. Visualize the complete look mapped to your silhouette before purchasing.",
  },
  {
    icon: <Palette className="w-5 h-5 text-neutral-900" />,
    title: "Guaranteed Palette & Color Harmony",
    body: "Every recommended piece is styled with complementary undertones and balanced contrast that elevates your natural complexion.",
  },
  {
    icon: <Layers className="w-5 h-5 text-neutral-900" />,
    title: "Build Head-to-Toe Coordinated Looks",
    body: "Say goodbye to 'closet full of clothes, nothing to wear'. Slidez ensures every top has matching bottoms, shoes, and outerwear.",
  },
  {
    icon: <Shirt className="w-5 h-5 text-neutral-900" />,
    title: "Shop Around Pieces You Already Own",
    body: "Tell the AI personal shopper about a favorite jacket or pair of boots, and get outfits that seamlessly integrate with your existing wardrobe.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Tell Slidez What You're Looking For",
    body: "Describe the style, occasion, clothing, or type of outfit you want. Type anything from 'Parisian chic for autumn' to 'formal dinner outfit with comfortable shoes'.",
    badge: "Step 1: Style Prompt",
  },
  {
    step: "02",
    title: "Get Personalized Fashion Recommendations",
    body: "Slidez helps you discover clothing and outfit ideas based on your preferences, evaluating cut, balance, occasion etiquette, and aesthetic alignment.",
    badge: "Step 2: AI Recommendations",
  },
  {
    step: "03",
    title: "Explore Different Looks",
    body: "Compare styles, combinations, colors, and complete outfits. Swap individual pieces with one tap until the entire ensemble matches your taste.",
    badge: "Step 3: Look Exploration",
  },
  {
    step: "04",
    title: "See the Look on You",
    body: "Use virtual try-on to visualize selected clothing and outfits. Upload your photo and see how the drape, fit, and proportions appear on your own body.",
    badge: "Step 4: Virtual Fitting",
  },
  {
    step: "05",
    title: "Shop With More Confidence",
    body: "Find the clothes you like and make a more informed purchase decision. Buy the exact items with zero doubt about how they'll look when they arrive.",
    badge: "Step 5: Confident Checkout",
  },
];

const CAPABILITIES = [
  {
    icon: <Wand2 className="w-5 h-5 text-neutral-950" />,
    title: "Personalized clothing recommendations",
    desc: "Cuts, silhouettes, and fabrics hand-selected specifically for your personal aesthetic and body type.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-neutral-950" />,
    title: "AI fashion recommendations",
    desc: "Smart algorithmic styling based on color theory, occasion dress codes, and current fashion sensibilities.",
  },
  {
    icon: <Compass className="w-5 h-5 text-neutral-950" />,
    title: "Outfit ideas for different occasions",
    desc: "From wedding guest attire to business meetings, date nights, and casual weekends — ready for any event.",
  },
  {
    icon: <Shirt className="w-5 h-5 text-neutral-950" />,
    title: "Personal style discovery",
    desc: "Uncover and refine your unique aesthetic profile if you are looking to reinvent your day-to-day fashion.",
  },
  {
    icon: <Eye className="w-5 h-5 text-neutral-950" />,
    title: "Virtual try-on",
    desc: "Photo-realistic preview that projects garments onto your personal photo or representative model silhouette.",
  },
  {
    icon: <Layers className="w-5 h-5 text-neutral-950" />,
    title: "Clothing and outfit exploration",
    desc: "Easily mix-and-match separates, swap layers, and test alternative colors across thousands of items.",
  },
  {
    icon: <Search className="w-5 h-5 text-neutral-950" />,
    title: "Fashion inspiration from different sources",
    desc: "Import looks from Instagram, Pinterest, or your favorite online stores and try them on instantly.",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-neutral-950" />,
    title: "Shopping assistance",
    desc: "Direct guidance on where to find pieces, how to style them, and what accessories bring the look together.",
  },
];

const RELATED_PAGES = [
  {
    label: "AI Clothes Recommender",
    href: "/ai-clothes-recommender",
    desc: "Find clothes that suit your style with algorithmic clothing suggestions.",
  },
  {
    label: "AI Fashion Stylist",
    href: "/ai-fashion-stylist",
    desc: "Create full coordinated outfits with an intelligent virtual stylist.",
  },
  {
    label: "AI Outfit Generator",
    href: "/ai-outfit-generator",
    desc: "Generate complete outfits for any vibe, weather, or event in seconds.",
  },
  {
    label: "AI Virtual Try-On",
    href: "/ai-virtual-try-on",
    desc: "See how clothes look on your own body photo before spending money.",
  },
];

const RECOMMENDED_BLOGS = [
  {
    title: "How AI Personalizes Online Fashion Shopping",
    href: "/blog/how-ai-personalizes-online-fashion-shopping",
    desc: "Discover how AI shopping assistants are eliminating return rates and revolutionizing online retail.",
  },
  {
    title: "How to Stop Buying Clothes You Never Wear",
    href: "/blog/how-to-stop-buying-clothes-you-never-wear",
    desc: "Practical strategies to make smarter wardrobe investments using personal shopper tools.",
  },
  {
    title: "Virtual Try-On vs Online Shopping",
    href: "/blog/virtual-try-on-vs-online-shopping",
    desc: "Why visualizing clothes on your body is the new gold standard for online apparel shopping.",
  },
  {
    title: "AI Stylist vs Human Personal Stylist",
    href: "/blog/ai-stylist-vs-human-stylist",
    desc: "Comparing costs, convenience, and styling speed between AI tools and traditional personal shoppers.",
  },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function AIPersonalShopperPage() {
  return (
    <>
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <main className="overflow-hidden bg-[#ffffff]">
        <Navbar />

        {/* ── Fold 1: Hero Section ──────────────────────────── */}
        <StylistToolHeroSection
          ariaLabel="AI personal shopper"
          eyebrow="AI Personal Shopper · Free to Use"
          title="AI Personal Shopper for Smarter Fashion Shopping"
          subtitle={
            <>
              Slidez acts as your personal AI shopping assistant to help you discover clothes you love, get personalized fashion
              recommendations for any occasion, and explore coordinated looks before buying.
            </>
          }
          submitLabel="Find my style"
          chips={["Casual", "Office", "Date Night", "Winter", "Party", "Vacation"]}
        />

        {/* ── Fold 2: Find Clothes You'll Actually Want to Wear ── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Smart Fashion Discovery
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
                Find Clothes You&apos;ll Actually Want to Wear
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                Online shopping often feels like an endless cycle of scrolling, second-guessing fits, and returning items that looked
                great on a model but disappointing in real life. Slidez works as your AI personal shopper to remove the uncertainty:
                discovering pieces tailored to your exact taste, body shape, and lifestyle so you can shop with confidence.
              </p>
            </div>

            {/* Sample Outfits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {SAMPLE_LOOKS.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl overflow-hidden border border-neutral-200/80 bg-neutral-50 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-black/65 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full">
                      {item.occasion}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-lg mb-1">{item.title}</h3>
                      <p className="text-neutral-500 text-xs mb-3.5">Vibe: {item.vibe}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-200/60">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block text-[10px] font-medium bg-white text-neutral-600 px-2 py-0.5 rounded-md border border-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reducing Uncertainty Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {SHOPPING_UNCERTAINTY_SOLUTIONS.map((sol) => (
                <div
                  key={sol.title}
                  className="p-6 rounded-2xl border border-neutral-200/70 bg-[#fafafa] hover:bg-white hover:border-neutral-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-center mb-4 shadow-sm">
                    {sol.icon}
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-base mb-2">{sol.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{sol.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fold 3: Your Personal Shopper, Powered by AI ── */}
        <section
          data-nav-theme="dark-bg"
          className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6 text-white"
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3">
                Intelligent Styling
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Your Personal Shopper, Powered by AI
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Experience fashion shopping reimagined. Slidez combines fashion discovery, personalized recommendations, outfit
                inspiration from multiple platforms, and instant virtual try-on into one seamless personal shopping assistant.
              </p>
            </div>

            {/* 4 Pillars of AI Personal Shopping */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">AI Fashion Discovery</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Instead of browsing through thousands of irrelevant catalog pages, type what you are envisioning in natural language.
                  Our AI retrieves garments tailored to your criteria instantly.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Palette className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Personalized Recommendations</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Get curated outfit pairings designed around color balance, proportion harmony, and dress code appropriateness for
                  work, dating, vacations, or formal events.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Multi-Source Outfit Inspiration</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Save inspiration from Instagram, Pinterest, or trending street style looks and let the personal shopping app find
                  real matching pieces you can buy.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Virtual Try-On Fitting Room</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Visualize selected clothing on your own body photo before purchasing. Experience true fit confidence with photorealistic
                  draping and silhouette modeling.
                </p>
              </div>
            </div>

            {/* Interactive Embedded Tool Section */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-neutral-300 text-sm font-medium mb-6">
                Try typing an occasion or aesthetic to see how the AI Personal Shopper works:
              </p>
              <StylistToolSection
                submitLabel="Ask AI Shopper"
                chips={["Casual", "Office", "Date Night", "Winter", "Party", "Vacation"]}
                className="w-full max-w-[760px] mx-auto"
              />
            </div>
          </div>
        </section>

        {/* ── Fold 4: How Slidez's AI Personal Shopper Works ──── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Step-by-Step Workflow
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-5">
                How Slidez&apos;s AI Personal Shopper Works
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                From finding outfit inspiration to testing looks in a virtual fitting room, here is how Slidez guides your shopping
                journey from start to finish.
              </p>
            </div>

            <div className="relative space-y-6">
              {HOW_IT_WORKS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col sm:flex-row items-start gap-6 p-7 sm:p-8 rounded-3xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 transition-all hover:shadow-md"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-900 text-white font-bold text-xl shrink-0 shadow-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <div className="inline-block text-[11px] font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                      {item.badge}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-neutral-600 text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Fold 5: See Your Style Before You Shop (Try-On Visuals) ── */}
        <section
          data-nav-theme="dark-bg"
          className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#0c0c0c] py-24 px-6 text-white"
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3">
                Virtual Try-On Visuals
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                See Your Style Before You Shop
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Why guess if a recommended shirt or dress will suit you? Slidez lets you visualize clothing and outfit ideas on your
                own photo before deciding what to buy.
              </p>
            </div>

            {/* Visual Try-On Showcase Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 mb-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Step 1: Pick Item */}
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.04] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <Shirt className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">Step 1</span>
                  <h3 className="font-semibold text-white mb-3">Choose Recommended Item</h3>
                  <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                    <Image
                      src="/outfits/oversized-white-tee.jpeg"
                      alt="Recommended clothing product"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-neutral-400 mt-3">Selected by AI Personal Shopper</p>
                </div>

                {/* Arrow / Transform Icon */}
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-neutral-400 mt-2">AI Neural Try-On</span>
                </div>

                {/* Step 2: See on Photo */}
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.04] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">Step 2</span>
                  <h3 className="font-semibold text-white mb-3">See It On Your Body</h3>
                  <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                    <Image
                      src="/models/brunette-woman.png"
                      alt="Virtual try-on model preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-neutral-400 mt-3">Realistic fit, drape, and proportion</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3">
                  <div className="text-2xl font-bold text-white mb-1">100% Free</div>
                  <div className="text-xs text-neutral-400">Unlimited try-ons on iOS & Android</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl font-bold text-white mb-1">&lt; 5 Seconds</div>
                  <div className="text-xs text-neutral-400">Instant AI garment fitting preview</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl font-bold text-white mb-1">Zero Remorse</div>
                  <div className="text-xs text-neutral-400">Drastically reduce return trips</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fold 6: Everything You Need for Smarter Fashion Shopping ── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Comprehensive Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-5">
                Everything You Need for Smarter Fashion Shopping
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                Whether you need complete outfit ideas, style advice, or virtual try-on before checkout, Slidez brings all your
                fashion tools into one intuitive personal shopping assistant app.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="p-6 rounded-3xl border border-neutral-200/80 bg-neutral-50/60 hover:bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-white border border-neutral-200/80 flex items-center justify-center mb-4 shadow-sm">
                      {cap.icon}
                    </div>
                    <h3 className="font-bold text-neutral-900 text-base mb-2">{cap.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────── */}
        <section
          data-nav-theme="dark-bg"
          className="relative z-[60] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#0a0a0a] py-24 px-6 text-white text-center"
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-4">
              Get Started Free
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Open Slidez AI Personal Shopper
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
              Discover clothes you love, generate coordinated outfit ideas, and try garments on your own photo in seconds. Free on
              iOS and Android.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://linkly.link/2FWYm"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-neutral-900 text-sm font-semibold rounded-full shadow-[0_2px_16px_rgba(255,255,255,0.25)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                Open Slidez App
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/ai-virtual-try-on"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-200"
              >
                Explore Virtual Try-On
              </Link>
            </div>
          </div>
        </section>

        {/* ── Fold 7: Frequently Asked (FAQ) ────────────────── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-[65] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Questions & Answers
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-5">
                Frequently Asked
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed">
                Everything you need to know about using an AI personal shopper, getting personalized recommendations, and trying on
                clothes virtually.
              </p>
            </div>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 transition-colors"
                >
                  <h3 className="font-bold text-neutral-900 text-base sm:text-lg mb-3">
                    {item.name}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {item.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Tools & Guides ────────────────────────── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-[70] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#fafafa] py-20 px-6 border-t border-neutral-200/60"
        >
          <div className="max-w-6xl mx-auto">
            {/* Related Tools */}
            <div className="mb-14">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Explore More Slidez AI Tools</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {RELATED_PAGES.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="p-5 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm group-hover:text-black mb-1 flex items-center justify-between">
                        {page.label}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">{page.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Reading */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Recommended Fashion Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {RECOMMENDED_BLOGS.map((blog) => (
                  <Link
                    key={blog.href}
                    href={blog.href}
                    className="p-5 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm group-hover:text-black mb-1.5 leading-snug">
                        {blog.title}
                      </h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">{blog.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
