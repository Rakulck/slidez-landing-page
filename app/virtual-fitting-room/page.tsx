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
  Layers,
  ShieldCheck,
  Search,
  Camera,
  Check,
  X,
  Smartphone,
  RefreshCw,
} from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata & SEO ───────────────────────────────────────────── */

const TITLE = "Virtual Fitting Room: Try Clothes On Virtually";
const DESCRIPTION =
  "Try clothes virtually with Slidez's AI virtual fitting room. See how outfits could look on you, explore new styles, and shop with more confidence.";
const CANONICAL = `${CANONICAL_BASE}/virtual-fitting-room`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "virtual fitting room",
    "virtual fitting room app",
    "virtual fitting room online",
    "virtual fitting room for clothes",
    "online virtual fitting room",
    "virtual clothes fitting room",
    "virtual try on clothes",
    "virtual try on app",
    "virtual try on online",
    "AI virtual fitting room",
    "AI fitting room",
    "digital fitting room",
    "virtual clothing try on",
    "virtual fashion fitting room",
    "try clothes virtually",
    "online clothes fitting room",
    "virtual shopping experience",
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
  name: "How Slidez's Virtual Fitting Room Works",
  description:
    "Follow these 5 steps to try clothes virtually, explore new outfits, and shop with confidence using Slidez's AI virtual fitting room.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Add Your Photo",
      text: "Upload a photo to create your personalized try-on experience. A clear selfie or full-body picture helps the AI match your proportions and posture.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Choose a Clothing Item or Look",
      text: "Explore clothing and outfits you want to try. Pick items from curated collections or import pieces from any online store or inspiration board.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Try It On Virtually",
      text: "See how the selected clothing or outfit could look on you. Slidez renders realistic drape, fit, textures, and lighting in seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Explore Different Styles",
      text: "Try different clothes, combinations, and looks to compare your options. Mix-and-match tops, bottoms, outerwear, and accessories effortlessly.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Shop With More Confidence",
      text: "Use what you see to make a more informed fashion shopping decision. Buy the styles you love with zero doubt about how they fit and look.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a virtual fitting room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual fitting room is a digital fashion tool powered by artificial intelligence and computer vision that enables shoppers to try on clothes virtually before purchasing. It simulates how garments fit, drape, and look on a customer's specific photo or body silhouette, replacing static flat images with personalized try-on visualization.",
      },
    },
    {
      "@type": "Question",
      name: "How does a virtual fitting room work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A virtual fitting room analyzes a photo of the user along with digital images of apparel items. Deep learning models map the contours, posture, and dimensions of the person, realistic fabric physics simulate draping and folds, and neural rendering blends lighting and shadows to present an accurate preview of the garment on your body.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try clothes on virtually before buying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With Slidez, you can try clothes on virtually before making any purchase online. Simply upload a picture of yourself and select any garment—from dresses and coats to tees and trousers—to instantly preview how it looks on your frame.",
      },
    },
    {
      "@type": "Question",
      name: "How does Slidez's AI virtual fitting room work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slidez uses proprietary AI virtual try-on technology that accurately isolates clothing items and warps them photorealistically onto your uploaded photo. The AI respects your posture, body dimensions, and lighting conditions, providing an authentic representation of fit, proportion, and styling harmony.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a virtual fitting room for clothes I find online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez allows you to import clothing from any online store or social platform, including Zara, ASOS, Amazon, Instagram, and Pinterest. You can upload a screenshot or use the Slidez Chrome Extension to try on pieces directly from any product page.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see how an outfit looks on me before buying it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez specializes in complete outfit visualization. Beyond single items, you can assemble head-to-toe combinations—including tops, bottoms, outerwear, footwear, and accessories—and preview the entire coordinated ensemble on your photo.",
      },
    },
    {
      "@type": "Question",
      name: "Does a virtual fitting room replace trying clothes on in person?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While an in-person fitting room lets you physically feel fabric stretch and weight, a virtual fitting room solves the biggest challenge of online shopping: visual uncertainty. It gives you an immediate, realistic preview of style, color complement, and silhouette proportions without visiting a brick-and-mortar store or ordering multiple sizes to return.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try different clothing styles virtually?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You can experiment with hundreds of aesthetics—from streetwear and quiet luxury to minimalist business casual, festival party looks, and seasonal winter layering. The virtual fitting room gives you total freedom to test bold styles risk-free.",
      },
    },
    {
      "@type": "Question",
      name: "Can Slidez help me find clothes after trying them on virtually?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez connects recommended outfits and virtual try-on items directly to purchasing links from partner brands and retailers, allowing you to easily buy the exact pieces that looked great on you.",
      },
    },
    {
      "@type": "Question",
      name: "Is Slidez's virtual fitting room free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez's AI virtual fitting room is 100% free to use on iOS and Android. You can upload photos, generate outfit styling, and virtually try on clothes without requiring a paid subscription or hidden fees.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "Virtual Fitting Room", item: CANONICAL },
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
  name: "Slidez Virtual Fitting Room",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: DESCRIPTION,
  url: CANONICAL,
};

/* ── Content Data ─────────────────────────────────────────────── */

const PROBLEM_VS_SOLUTION = [
  {
    type: "problem",
    title: "Standard Online Clothes Shopping",
    points: [
      "Flat studio catalog photos that hide how garments drape",
      "Mannequins and pinned clothes that create deceptive silhouettes",
      "Guessing whether a color or cut actually complements your complexion",
      "Buying multiple sizes only to deal with returns, post office runs, and refund delays",
    ],
  },
  {
    type: "solution",
    title: "Slidez AI Virtual Fitting Room",
    points: [
      "Photorealistic virtual try-on tailored directly to your own body photo",
      "True-to-life fabric physics showing natural drape, folds, and proportions",
      "Test complete head-to-toe outfits before spending a single dollar",
      "Shop with genuine confidence, zero sizing anxiety, and drastically fewer returns",
    ],
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Add Your Photo",
    body: "Upload a photo to create your personalized try-on experience. A standard selfie or full-body photo helps the AI map your body proportions accurately.",
    badge: "Step 1: Your Profile",
  },
  {
    step: "02",
    title: "Choose a Clothing Item or Look",
    body: "Explore clothing and outfits you want to try. Pick from trending aesthetics or import any piece you discover across the web.",
    badge: "Step 2: Garment Selection",
  },
  {
    step: "03",
    title: "Try It On Virtually",
    body: "See how the selected clothing or outfit could look on you. Slidez AI fits the garment seamlessly with realistic lighting and texture rendering.",
    badge: "Step 3: Neural Fitting",
  },
  {
    step: "04",
    title: "Explore Different Styles",
    body: "Try different clothes, combinations, and looks to compare your options. Swap colors, test layers, and experiment with new fashion vibes.",
    badge: "Step 4: Style Exploration",
  },
  {
    step: "05",
    title: "Shop With More Confidence",
    body: "Use what you see to make a more informed fashion shopping decision. Check out knowing exactly how the outfit flatters your body.",
    badge: "Step 5: Confident Checkout",
  },
];

const STYLE_SHOWCASE = [
  {
    title: "Casual Street Style",
    vibe: "Relaxed & Contemporary",
    desc: "Test wide-leg denim, vintage tees, and statement sneakers with balanced street proportions.",
    src: "/inspiration/casual-men.jpg",
    tag: "Weekend Wear",
  },
  {
    title: "Chic Date Night",
    vibe: "Sleek & Elevated",
    desc: "Visualize tailored blazers, silk slip dresses, and sophisticated accessories before dinner.",
    src: "/inspiration/party.jpg",
    tag: "Evening Out",
  },
  {
    title: "Smart Office Tailoring",
    vibe: "Polished & Professional",
    desc: "Pair crisp trousers, structured shirts, and minimalist knitwear suited for boardroom meetings.",
    src: "/inspiration/black-dress.jpg",
    tag: "Workday Chic",
  },
  {
    title: "Seasonal Autumn Layering",
    vibe: "Cozy & Textured",
    desc: "Experiment with trench coats, chunky cardigans, and wool scarves to perfect cold-weather layers.",
    src: "/inspiration/winter-street.jpg",
    tag: "Winter Warmth",
  },
];

const CAPABILITIES = [
  {
    icon: <Eye className="w-5 h-5 text-neutral-950" />,
    title: "AI virtual fitting room",
    desc: "State-of-the-art computer vision algorithms render clothes naturally on your photo in seconds.",
  },
  {
    icon: <Shirt className="w-5 h-5 text-neutral-950" />,
    title: "Virtual try-on for clothes",
    desc: "Preview tops, dresses, coats, pants, and accessories with realistic drape, texture, and silhouette.",
  },
  {
    icon: <Wand2 className="w-5 h-5 text-neutral-950" />,
    title: "Personalized outfit visualization",
    desc: "See how complete coordinated ensembles look directly on your frame rather than an unfamiliar runway model.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-neutral-950" />,
    title: "Clothing recommendations",
    desc: "Receive smart garment suggestions that harmonize with your body silhouette, skin tone, and existing closet.",
  },
  {
    icon: <Palette className="w-5 h-5 text-neutral-950" />,
    title: "AI fashion styling",
    desc: "Get expert styling formulas that balance proportions, color temperatures, and occasion requirements.",
  },
  {
    icon: <Compass className="w-5 h-5 text-neutral-950" />,
    title: "Outfit ideas for different occasions",
    desc: "Browse and try looks curated for weddings, job interviews, parties, weekend coffee runs, and vacations.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-neutral-950" />,
    title: "Try clothes before buying",
    desc: "Protect your shopping budget and eliminate buyer's remorse by confirming styles before you spend.",
  },
  {
    icon: <Search className="w-5 h-5 text-neutral-950" />,
    title: "Explore clothing from different sources",
    desc: "Import clothes from Instagram, Pinterest, or any fashion retailer website directly into your fitting room.",
  },
  {
    icon: <Layers className="w-5 h-5 text-neutral-950" />,
    title: "Discover new styles",
    desc: "Safely test aesthetics you've always wanted to try without making costly impulse purchase mistakes.",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-neutral-950" />,
    title: "Shop with more confidence",
    desc: "Eliminate sizing hesitation, order the pieces you genuinely love, and enjoy clothes you'll actually wear.",
  },
];

const RELATED_PAGES = [
  {
    label: "AI Virtual Try-On",
    href: "/ai-virtual-try-on",
    desc: "Learn how AI virtual try-on works and why smart online shoppers use it.",
  },
  {
    label: "Try On from Anywhere",
    href: "/try-on-from-anywhere",
    desc: "Import clothing items from Instagram or any retail site and try them on.",
  },
  {
    label: "AI Personal Shopper",
    href: "/ai-personal-shopper",
    desc: "Get tailored fashion recommendations and find clothes matching your personal taste.",
  },
  {
    label: "AI Outfit Generator",
    href: "/ai-outfit-generator",
    desc: "Instantly create coordinated outfits from style prompts or uploaded photos.",
  },
  {
    label: "AI Clothes Recommender",
    href: "/ai-clothes-recommender",
    desc: "Discover new garments that match your style, body silhouette, and closet.",
  },
  {
    label: "What to Wear",
    href: "/what-to-wear",
    desc: "Get personalized styling recommendations for any occasion in seconds.",
  },
];

const RECOMMENDED_BLOGS = [
  {
    title: "Virtual Try-On vs Traditional Online Shopping",
    href: "/blog/virtual-try-on-vs-online-shopping",
    desc: "Why visualizing clothes on your own body is changing online retail forever.",
  },
  {
    title: "How to Style New Clothes Before You Buy Them Online",
    href: "/blog/style-new-clothes-before-you-buy-online",
    desc: "Step-by-step methods to test out new pieces virtually and make confident purchases.",
  },
  {
    title: "How to Stop Buying Clothes You Never Wear",
    href: "/blog/how-to-stop-buying-clothes-you-never-wear",
    desc: "Actionable styling strategies to curb impulse purchases and build a high-utility wardrobe.",
  },
  {
    title: "How AI Helps Find Clothes That Suit You",
    href: "/blog/how-ai-helps-find-clothes-that-suit-you",
    desc: "Explore how machine learning analyzes body proportions, color harmony, and style preferences.",
  },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function VirtualFittingRoomPage() {
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

        {/* ── Fold 1: Hero Section (H1 + 2-line Byline + Stylist Tool) ── */}
        <StylistToolHeroSection
          ariaLabel="Virtual fitting room"
          eyebrow="AI Virtual Fitting Room · Free Online Try-On"
          title="Virtual Fitting Room for Online Clothes Shopping"
          subtitle={
            <div className="space-y-2 max-w-2xl mx-auto text-black/60 text-base sm:text-lg">
              <p>
                Slidez provides an AI virtual fitting room that lets you virtually try on clothes, explore different looks,
                and visualize full outfits before you buy online.
              </p>
              <p className="text-black/45 text-sm sm:text-base">
                Upload your photo, test garments from any store, and discover styles that flatter your body with complete
                confidence.
              </p>
            </div>
          }
          submitLabel="Try on clothes"
          chips={["Casual", "Office", "Date Night", "Winter", "Party", "Vacation"]}
          prompts={[
            "Try on a minimalist linen shirt with tailored trousers",
            "Style an oversized blazer for a chic date night",
            "Virtually try on a vintage leather bomber jacket",
            "Explore casual street style with wide-leg jeans and sneakers",
          ]}
        />

        {/* ── Fold 2: See How Clothes Could Look on You Before You Buy ── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Eliminate Online Shopping Uncertainty
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
                See How Clothes Could Look on You Before You Buy
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                The biggest frustration with online clothing shopping is that flat retailer photos and hanger shots don&apos;t
                make it easy to imagine how a piece will actually look on your body. Slidez transforms the shopping experience:
                visualize clothing, drape, and complete outfits on your own photo before making a purchase.
              </p>
            </div>

            {/* Before / After & Problem vs Solution Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {PROBLEM_VS_SOLUTION.map((item) => (
                <div
                  key={item.title}
                  className={`p-8 rounded-3xl border transition-all duration-200 ${
                    item.type === "problem"
                      ? "border-red-100 bg-red-50/30"
                      : "border-emerald-100 bg-emerald-50/30 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        item.type === "problem" ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {item.type === "problem" ? <X className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                    </div>
                    <h3 className="font-bold text-neutral-900 text-xl">{item.title}</h3>
                  </div>
                  <ul className="space-y-3.5">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                        <span
                          className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                            item.type === "problem" ? "bg-red-400" : "bg-emerald-500"
                          }`}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Product + Virtual Try-On Visual Flow */}
            <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50/60 p-7 sm:p-10">
              <div className="text-center max-w-xl mx-auto mb-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Try-On Preview Flow</span>
                <h3 className="text-2xl font-bold text-neutral-900 mt-1">From Product Shot to Real Fit Preview</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
                {/* 1. Retailer Product */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center mb-3">
                    <Shirt className="w-5 h-5 text-neutral-800" />
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 mb-1">Product</span>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-3">Online Clothing Item</h4>
                  <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                    <Image
                      src="/outfits/oversized-white-tee.jpeg"
                      alt="Clothing item to try on virtually"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-neutral-400 mt-3">From Zara, ASOS, or anywhere</p>
                </div>

                {/* Arrow / Engine Indicator */}
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold shadow-md">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-600 mt-2">AI Neural Fitting</span>
                  <span className="text-[11px] text-neutral-400">Maps drape & body contours</span>
                </div>

                {/* 2. Virtual Try-On Result */}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-600 mb-1">Result</span>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-3">Virtual Fitting On You</h4>
                  <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-neutral-100 border border-emerald-200">
                    <Image
                      src="/models/brunette-woman.png"
                      alt="Virtual fitting room result on model"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-3">Realistic fit, drape, and lighting</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-neutral-900">Zero Guesswork</div>
                  <div className="text-xs text-neutral-500">Know how the cut looks on your frame</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">&lt; 3 Seconds</div>
                  <div className="text-xs text-neutral-500">Instant AI generation with no wait times</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">Fewer Returns</div>
                  <div className="text-xs text-neutral-500">Shop online with total purchase certainty</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fold 3: Turn Any Clothing Inspiration Into a Look You Can Try ── */}
        <section
          data-nav-theme="dark-bg"
          className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6 text-white"
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3">
                Inspiration Into Reality
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Turn Any Clothing Inspiration Into a Look You Can Try
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Found an eye-catching piece on Instagram, Pinterest, or a fashion blog? Slidez allows you to bring any clothing
                or outfit inspiration into the virtual fitting room and explore it with realistic try-on. Experiment with individual
                pieces, swap colors, and assemble full outfits effortlessly.
              </p>
            </div>

            {/* Brief Image 2 Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
              <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-sm overflow-hidden flex flex-col items-center">
                <div className="w-full relative aspect-[624/349] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/virtual-fitting-room/image2.png"
                    alt="Create Your Own Style With AI - Slidez Virtual Fitting Room"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                <p className="text-xs text-neutral-400 mt-4 text-center">
                  Prompt-driven AI stylist and virtual try-on engine in action
                </p>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <Camera className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white text-base">Import from Any Source</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Upload screenshots from social media or use our Chrome Extension to import clothes directly from product pages.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white text-base">Mix & Match Separates</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Pair an imported coat with pants already in your closet to see how new garments fit into your rotation.
                  </p>
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <Wand2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-white text-base">Head-to-Toe Harmony</h3>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    AI suggests the ideal footwear, accessories, and outerwear to complete whatever statement piece you choose.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Stylist Section */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-6">
                Try the virtual fitting room prompt engine right here:
              </p>
              <StylistToolSection
                submitLabel="Virtually try on"
                chips={["Casual", "Office", "Date Night", "Winter", "Party", "Vacation"]}
                className="w-full max-w-[760px] mx-auto"
              />
            </div>
          </div>
        </section>

        {/* ── Fold 4: How Slidez's Virtual Fitting Room Works ── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Simple 5-Step Process
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-5">
                How Slidez&apos;s Virtual Fitting Room Works
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                Trying clothes on virtually is quick, seamless, and accurate. Follow these 5 steps to visualize your dream
                outfits before buying.
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

        {/* ── Fold 5: Try Different Looks Before You Shop ── */}
        <section
          data-nav-theme="dark-bg"
          className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#0c0c0c] py-24 px-6 text-white"
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-3">
                Limitless Style Testing
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Try Different Looks Before You Shop
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Why limit yourself to a single style? Experiment with different clothing styles, colors, silhouettes, and
                outfit combinations before deciding what to purchase. Compare how a relaxed street vibe stacks up against tailored
                elegance on your own body.
              </p>
            </div>

            {/* Multiple Try-On Results Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {STYLE_SHOWCASE.map((style) => (
                <div
                  key={style.title}
                  className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] flex flex-col transition-all duration-300 hover:border-white/25 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={style.src}
                      alt={style.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full border border-white/10">
                      {style.tag}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1">{style.title}</h3>
                      <p className="text-neutral-400 text-xs mb-2">Vibe: {style.vibe}</p>
                      <p className="text-neutral-300 text-xs leading-relaxed">{style.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-white/10 mt-4 flex items-center gap-1.5 text-xs text-white/60 font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      Virtual Try-On Result
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brief Image 3 Showcase Card */}
            <div className="max-w-xl mx-auto rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md text-center">
              <div className="w-full relative aspect-[624/409] rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                <Image
                  src="/images/virtual-fitting-room/image3.png"
                  alt="Open Slidez AI Stylist - Virtual Try-On Fitting Room"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Try On Your Outfits?</h3>
              <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                Upload your photo, generate outfits with our AI Stylist, and virtually try clothes before checkout.
              </p>
              <a
                href="https://linkly.link/2FWYm"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-neutral-900 text-sm font-semibold rounded-full shadow-[0_2px_16px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Open Slidez Virtual Fitting Room
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Fold 6: Everything You Need for a Better Virtual Shopping Experience ── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Key Capabilities
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-5">
                Everything You Need for a Better Virtual Shopping Experience
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                Slidez combines realistic garment simulation, intelligent styling algorithms, and multi-store compatibility to
                deliver the ultimate online clothes fitting room.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="p-6 sm:p-7 rounded-3xl border border-neutral-200/80 bg-neutral-50/60 hover:bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
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
              Free to Use Forever
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Try Any Outfit Virtually Right Now
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
              Take the guesswork out of fashion shopping. Try on clothes virtually with Slidez, explore trending outfit ideas,
              and checkout with total fit certainty. Free on iOS and Android.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://linkly.link/2FWYm"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-neutral-900 text-sm font-semibold rounded-full shadow-[0_2px_16px_rgba(255,255,255,0.25)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                Download Slidez Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/ai-virtual-try-on"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/15 hover:bg-white/15 hover:border-white/25 transition-all duration-200"
              >
                Explore Virtual Try-On Guide
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
                Got questions about virtual fitting rooms and trying on clothes online? Here are answers to the most common
                inquiries.
              </p>
            </div>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                    <span className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors duration-200 text-left">
                      {item.name}
                    </span>
                    <span className="shrink-0 w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 group-hover:border-neutral-500 transition-all duration-200 relative">
                      <span className="block w-3.5 h-px bg-current" />
                      <span className="block w-px h-3.5 bg-current absolute group-open:opacity-0 transition-opacity duration-200" />
                    </span>
                  </summary>
                  <p className="pt-4 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-200/60 mt-4">
                    {item.acceptedAnswer.text}
                  </p>
                </details>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
