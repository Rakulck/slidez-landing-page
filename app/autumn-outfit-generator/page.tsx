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
  Calendar,
  Wind,
  ThermometerSnowflake,
  SunMedium,
  Sparkle,
} from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata & SEO ───────────────────────────────────────────── */

const TITLE = "AI Autumn Outfit Generator | Discover Your Fall Style";
const DESCRIPTION =
  "Discover autumn outfit ideas with Slidez. Explore seasonal fashion, create stylish combinations, and virtually try on clothes before you buy.";
const CANONICAL = `${CANONICAL_BASE}/autumn-outfit-generator`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI Autumn Outfit Generator",
    "autumn outfit ideas",
    "autumn outfits for women",
    "autumn outfits for men",
    "fall outfit generator",
    "fall fashion outfits",
    "autumn clothing ideas",
    "autumn fashion inspiration",
    "casual autumn outfits",
    "autumn outfit combinations",
    "autumn wardrobe ideas",
    "autumn fashion trends",
    "what to wear in autumn",
    "autumn outfit planner",
    "fall fashion inspiration",
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
  name: "How Slidez's AI Autumn Outfit Generator Works",
  description:
    "Follow these 5 simple steps to discover autumn outfit ideas, plan stylish fall combinations, and virtually try on clothes before you buy.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Tell Slidez What You're Looking For",
      text: "Describe your desired style, temperature, occasion, or fall wardrobe aesthetic — from cozy oversized knitwear to sharp office trench coats.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Get Personalized Autumn Outfit Recommendations",
      text: "Slidez's AI analyzes color theory, seasonal palettes (earthy neutrals, terracotta, olive, camel), and body proportions to assemble coordinated autumn outfits.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Explore and Refine Different Looks",
      text: "Compare multiple styling combinations, swap layers (trench coat vs. leather jacket, chunky knits vs. turtlenecks), and adjust accessories with one tap.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Try Your Favorite Autumn Looks on Yourself",
      text: "Use built-in AI virtual try-on to see realistic drape, fit, and proportions of recommended autumn clothing directly on your photo.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Shop and Wear With Complete Confidence",
      text: "Find direct purchase links for each piece or recreate the outfits using staples in your current wardrobe without second-guessing.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI autumn outfit generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI autumn outfit generator is an intelligent fashion tool that uses artificial intelligence to create seasonal outfit ideas and complete fall clothing combinations. By analyzing your personal style, the weather, occasion, and current autumn fashion trends, it pairs complementary outerwear, knits, pants, and footwear — and allows you to virtually try them on before buying.",
      },
    },
    {
      "@type": "Question",
      name: "How can I generate autumn outfit ideas using AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generating autumn outfit ideas on Slidez is effortless: simply type what you need in natural language (such as 'casual Sunday brunch in October' or 'business casual autumn outfit with a trench coat'), select an aesthetic or occasion chip, and Slidez instantly creates coordinated looks tailored to your preferences and body type.",
      },
    },
    {
      "@type": "Question",
      name: "What should I wear during autumn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autumn dressing is all about smart, breathable layering that adapts to shifting temperatures. Essential autumn wardrobe staples include lightweight base layers (cotton tees or fine knits), insulating mid-layers (cardigans, flannels, or cashmere sweaters), versatile outerwear (trench coats, leather jackets, or wool overcoats), durable bottoms (straight-leg denim, corduroys, or wool trousers), and footwear like Chelsea boots or leather loafers.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best autumn outfits for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top autumn outfits for women include: (1) A classic beige trench coat over a cream ribbed knit and wide-leg trousers with loafers, (2) An oversized chunky cardigan layered over a midi slip skirt with knee-high leather boots, (3) A leather moto jacket paired with high-waisted straight jeans and an ankle boot, and (4) A monochromatic camel wool sweater and trouser set for understated quiet luxury.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best autumn outfits for men?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best autumn outfits for men balance texture and structure: (1) A suede or chore jacket over an Oxford shirt and tailored chinos with leather boots, (2) A chunky waffle-knit sweater with dark selvedge denim and Chelsea boots, (3) A houndstooth or wool blazer over a merino turtleneck for smart-casual offices, and (4) A flannel overshirt layered over a neutral tee with relaxed-fit corduroys and clean leather sneakers.",
      },
    },
    {
      "@type": "Question",
      name: "How can I create stylish autumn outfits for different occasions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tailor your layers to the dress code. For work, lean on structured pieces like tailored blazers and trench coats in warm neutrals. For casual weekends, prioritize cozy knits, field jackets, and durable denim. For evening dates, mix soft and edgy textures — such as silk and leather or velvet and wool — with sleek footwear. Slidez automatically adapts formality, warmth, and dress codes for any event.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI suggest autumn outfits based on my personal style?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez adapts to your unique aesthetic — whether you love minimalist streetwear, classic academia, quiet luxury, bohemian vintage, or sporty casual. You can also specify favorite colors (like olive, rust, or charcoal) or items you already own, and the AI autumn outfit planner will tailor looks that feel authentic to you.",
      },
    },
    {
      "@type": "Question",
      name: "Can I virtually try on autumn clothes before buying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Slidez features advanced AI virtual try-on technology. Upload a photo of yourself or choose a model that matches your body type, and you can visualize recommended coats, sweaters, and full autumn outfits directly on your silhouette with realistic draping, texture rendering, and fit proportions.",
      },
    },
    {
      "@type": "Question",
      name: "Can I find clothes to recreate AI-generated autumn outfits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Slidez pairs every outfit recommendation with direct shopping links and brand details, making it easy to purchase each piece. You can also use the outfit blueprint to mix and match with staple pieces you already have in your closet.",
      },
    },
    {
      "@type": "Question",
      name: "Is Slidez's AI autumn outfit generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Slidez's AI autumn outfit generator is 100% free to use on iOS, Android, and web. You can generate unlimited seasonal outfit ideas, explore fall fashion trends, and virtually try on clothes with zero subscription fees.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "AI Autumn Outfit Generator", item: CANONICAL },
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
  name: "Slidez AI Autumn Outfit Generator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: DESCRIPTION,
  url: CANONICAL,
};

/* ── Content Data ─────────────────────────────────────────────── */

const SAMPLE_AUTUMN_LOOKS = [
  {
    title: "Tailored Trench & Wide-Leg Slacks",
    occasion: "Autumn Workwear & City Commute",
    vibe: "Structured, Polished, Timeless",
    src: "/fall-outfit-ideas-for-women.jpg",
    alt: "Autumn outfits for women with classic camel trench coat and tailored slacks",
    tags: ["Camel Trench", "Ribbed Knit", "Wide-Leg Trousers", "Leather Loafers"],
  },
  {
    title: "Rugged Flannel & Corduroy Chinos",
    occasion: "Casual Autumn Outfits for Men",
    vibe: "Textured, Warm, Masculine",
    src: "/fall-outfit-ideas-for-men.jpg",
    alt: "Autumn outfits for men with layered flannel overshirt and corduroy trousers",
    tags: ["Heavyweight Overshirt", "Merino Crewneck", "Corduroy Chinos", "Chelsea Boots"],
  },
  {
    title: "Ribbed Midi Dress & Leather Moto",
    occasion: "Fall Date Night & Evening Drinks",
    vibe: "Sleek, Romantic, Confident",
    src: "/fall-date-night-outfits.jpg",
    alt: "Fall date night outfit ideas with cozy knit midi and black leather jacket",
    tags: ["Ribbed Knit Midi", "Leather Jacket", "Burgundy Accents", "Knee-High Boots"],
  },
  {
    title: "Plaid Blazer & Cashmere Knit",
    occasion: "Smart Autumn Business Casual",
    vibe: "Sophisticated, Tailored, Modern",
    src: "/autumn-work-outfits.jpg",
    alt: "Autumn work outfits with check blazer and cashmere turtleneck",
    tags: ["Houndstooth Blazer", "Cashmere Layer", "Tailored Pants", "Leather Tote"],
  },
];

const AUTUMN_STYLE_SOLUTIONS = [
  {
    icon: <Wind className="w-5 h-5 text-neutral-900" />,
    title: "Smart Temperature & Weather Layering",
    body: "Autumn mornings are crisp while afternoons warm up. Slidez balances breathable base layers, cozy knits, and light outerwear so you stay comfortable all day.",
  },
  {
    icon: <Palette className="w-5 h-5 text-neutral-900" />,
    title: "Harmonized Fall Color Palettes",
    body: "Rich earth tones — warm camel, rust terracotta, deep olive, espresso brown, and burgundy — are matched with your skin tone and hair undertones.",
  },
  {
    icon: <Layers className="w-5 h-5 text-neutral-900" />,
    title: "Balanced Proportions Without Bulk",
    body: "Fall layering can easily look oversized or heavy. Slidez structures your outfits with proportion contrast: chunky knits paired with sleek trousers and tailored cuts.",
  },
  {
    icon: <Shirt className="w-5 h-5 text-neutral-900" />,
    title: "Style Around Your Existing Wardrobe",
    body: "Got a favorite pair of leather boots, a wool trench, or a denim jacket? Slidez crafts fresh autumn outfit combinations centered around your staple pieces.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Tell Slidez What You're Looking For",
    body: "Describe your aesthetic, desired weather, or specific occasion. Type prompts like 'cozy oversized sweater outfit for apple picking' or 'smart casual fall office look with ankle boots'.",
    badge: "Step 1: Your Style Prompt",
  },
  {
    step: "02",
    title: "Get Personalized Autumn Outfit Recommendations",
    body: "The AI fashion stylist analyzes silhouette balance, autumn color harmonies, and dress codes to generate cohesive, stylish head-to-toe looks in seconds.",
    badge: "Step 2: AI Fashion Analysis",
  },
  {
    step: "03",
    title: "Explore Different Autumn Outfit Combinations",
    body: "Easily swap individual garments — test a leather biker jacket vs. a long wool coat, or switch loafers for knee-high boots with a single tap.",
    badge: "Step 3: Mix & Match Layers",
  },
  {
    step: "04",
    title: "Virtually Try On Autumn Clothes on Yourself",
    body: "Upload your photo or pick an avatar to preview how recommended knits, outerwear, and trousers drape and fit your body before making any purchase.",
    badge: "Step 4: AI Virtual Fitting Room",
  },
  {
    step: "05",
    title: "Step Out in Confident Fall Style",
    body: "Shop the exact items with direct store links, or recreate the AI-generated autumn outfit ideas with items already hanging in your closet.",
    badge: "Step 5: Confident Seasonal Wardrobe",
  },
];

const OCCASIONS_DATA = [
  {
    category: "Casual Autumn Outfits",
    subtitle: "Effortless weekend comfort and street style",
    description:
      "For weekend strolls, coffee meetups, and crisp autumn farmers markets, prioritize relaxed silhouettes with textural depth.",
    keyPieces: ["Oversized Cable Knits", "Straight-Leg Selvedge Denim", "Chunky Sole Loafers", "Suede Crossbody Bag"],
    stylingTip: "Balance a slouchy sweater with slim or straight-leg bottoms to keep proportions intentional and flattering.",
    src: "/outfits/cozy-weekend.jpeg",
    alt: "Casual autumn outfits with cozy knitwear and relaxed trousers",
  },
  {
    category: "Autumn Workwear & Office",
    subtitle: "Polished, professional, and transition-ready",
    description:
      "Navigate heated conference rooms and chilly commutes with tailored blazers, fine-gauge turtlenecks, and flowing trousers.",
    keyPieces: ["Double-Breasted Trench", "Fine Merino Turtleneck", "High-Waisted Wool Slacks", "Structured Leather Tote"],
    stylingTip: "Stick to a monochromatic palette of camel, beige, and cream for an instant quiet luxury aesthetic.",
    src: "/outfits/winter-office.jpeg",
    alt: "Autumn work outfits for women and men with tailored outerwear",
  },
  {
    category: "Fall Date Night Outfits",
    subtitle: "Warmth, romance, and nighttime elegance",
    description:
      "Rooftop cocktails or candlelit dinners call for tactile contrast — smooth leather over soft knits or silk slip skirts.",
    keyPieces: ["Ribbed Knit Midi Dress", "Oversized Leather Jacket", "Pointed Heeled Booties", "Gold Statement Accents"],
    stylingTip: "Mix warm textures like cashmere with sleek finishes like leather or satin to add visual intrigue.",
    src: "/outfits/restaurant-dinner.jpeg",
    alt: "Fall date night outfit ideas with layered chic textures",
  },
  {
    category: "Outdoor & Fall Travel",
    subtitle: "Weatherproof layers for foliage and getaways",
    description:
      "Stay shielded from brisk autumn winds during weekend getaways, road trips, and scenic hikes without sacrificing style.",
    keyPieces: ["Quilted Barn Jacket", "Heavyweight Flannel Overshirt", "Water-Resistant Boots", "Ribbed Cashmere Beanie"],
    stylingTip: "Choose breathable wool or thermal base layers underneath durable canvas or waxed outerwear.",
    src: "/inspiration/winter-street.jpg",
    alt: "Outdoor autumn clothing ideas with durable layered outerwear",
  },
];

const CAPABILITIES = [
  {
    icon: <Wand2 className="w-5 h-5 text-neutral-950" />,
    title: "Personalized Autumn Recommendations",
    desc: "Cuts, silhouettes, and fabrics hand-selected specifically for your personal aesthetic and body proportions.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-neutral-950" />,
    title: "AI Fall Outfit Generator",
    desc: "Intelligent algorithmic styling built on seasonal color theory, layering balance, and autumn fashion trends.",
  },
  {
    icon: <Compass className="w-5 h-5 text-neutral-950" />,
    title: "Outfits for Every Occasion",
    desc: "From autumn weddings and corporate meetings to pumpkin patches and romantic date nights.",
  },
  {
    icon: <Shirt className="w-5 h-5 text-neutral-950" />,
    title: "Autumn Outfits for Women & Men",
    desc: "Dedicated styling logic tailored to women's and men's distinct seasonal silhouettes and wardrobe essentials.",
  },
  {
    icon: <Eye className="w-5 h-5 text-neutral-950" />,
    title: "AI Virtual Try-On",
    desc: "Realistic preview projecting autumn outerwear, sweaters, and trousers onto your photo before you buy.",
  },
  {
    icon: <Layers className="w-5 h-5 text-neutral-950" />,
    title: "Multi-Layer Exploration",
    desc: "Easily mix-and-match base layers, cardigans, trench coats, boots, and scarves across thousands of brands.",
  },
  {
    icon: <Search className="w-5 h-5 text-neutral-950" />,
    title: "Fall Fashion Inspiration",
    desc: "Import looks from Pinterest, Instagram, or street-style feeds and let Slidez find shoppable matching garments.",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-neutral-950" />,
    title: "Smart Shopping Assistance",
    desc: "Direct purchase guidance, style advice, and wardrobe gap analysis so you only buy pieces you will actually wear.",
  },
];

const RELATED_PAGES = [
  {
    label: "AI Outfit Generator",
    href: "/ai-outfit-generator",
    desc: "Generate complete outfits for any vibe, weather, or event in seconds.",
  },
  {
    label: "AI Fashion Stylist",
    href: "/ai-fashion-stylist",
    desc: "Create coordinated head-to-toe ensembles with an intelligent personal stylist.",
  },
  {
    label: "AI Personal Shopper",
    href: "/ai-personal-shopper",
    desc: "Find clothes you will actually love and eliminate online shopping uncertainty.",
  },
  {
    label: "AI Virtual Try-On",
    href: "/ai-virtual-try-on",
    desc: "See how clothes drape and look on your own photo before checkout.",
  },
];

const RECOMMENDED_BLOGS = [
  {
    title: "What to Wear in Autumn: Essential Guide",
    href: "/blog/what-to-wear-in-autumn",
    desc: "Master seasonal transition dressing with curated autumn wardrobe staples, layering formulas, and fabrics.",
  },
  {
    title: "Fall Outfit Ideas for Women: Chic Trends",
    href: "/blog/fall-outfit-ideas-for-women",
    desc: "Explore top autumn outfits for women, from quiet luxury trench coats to cozy knit midi dresses.",
  },
  {
    title: "Fall Outfit Ideas for Men: Layered Style",
    href: "/blog/fall-outfit-ideas-for-men",
    desc: "Discover masculine autumn essentials: corduroy, flannel overshirts, textured knits, and Chelsea boots.",
  },
  {
    title: "Autumn Work Outfits: Professional Style",
    href: "/blog/autumn-work-outfits",
    desc: "Polished cold-weather office attire that balances boardroom formality with warm seasonal comfort.",
  },
  {
    title: "Fall Date Night Outfits: Romantic & Warm",
    href: "/blog/fall-date-night-outfits",
    desc: "Elevated evening outfits combining textured knits, leather jackets, and sleek footwear for fall dates.",
  },
  {
    title: "How to Layer Clothes for Fall: Complete Guide",
    href: "/blog/how-to-layer-clothes-for-fall",
    desc: "Master the art of layering without adding bulk: proportions, base layers, and outerwear balance.",
  },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function AIAutumnOutfitGeneratorPage() {
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
          ariaLabel="AI autumn outfit generator"
          eyebrow="AI Autumn Outfit Generator · Free to Use"
          title="AI Autumn Outfit Generator"
          subtitle={
            <>
              Discover stylish autumn outfit ideas and explore curated fall fashion outfits with Slidez&apos;s AI autumn outfit generator.
              <br className="hidden sm:inline" /> Create complete autumn outfit combinations, get seasonal fashion inspiration for women and men, and virtually try on clothes before you buy.
            </>
          }
          submitLabel="Generate fall outfit"
          chips={[
            "Casual Autumn",
            "Autumn Workwear",
            "Fall Date Night",
            "Cozy Knits",
            "Autumn Trench Coats",
            "Fall Streetwear",
          ]}
        />

        {/* Hero Visual Preview Card */}
        <section
          aria-label="Autumn outfit generator preview"
          className="relative z-10 -mt-6 sm:-mt-8 max-w-4xl mx-auto px-6 mb-10 text-center"
        >
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200/80 bg-gradient-to-b from-neutral-50 to-white p-3 sm:p-5 shadow-lg">
            <div className="relative w-full aspect-[624/164] max-h-[170px] rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src="/autumn-outfit-hero.png"
                alt="AI Autumn Outfit Generator interface showing seasonal fashion recommendations"
                fill
                fetchPriority="high"
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 850px"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4 text-xs font-medium text-neutral-600">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Curated Autumn Palettes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Smart Weather Layering
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Virtual Try-On Included
              </span>
            </div>
          </div>
        </section>

        {/* ── Fold 2: Autumn Outfits That Match Your Style ────── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Personalized Seasonal Styling
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
                Autumn Outfits That Match Your Style
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                Autumn fashion is celebrated for its rich textures, deep color palettes, and cozy layers — but knowing how to
                combine them without feeling bulky or underdressed can be tricky. Slidez lets you share your personal style
                preferences, body silhouette, climate, and desired occasion to deliver curated autumn outfit recommendations
                tailored exclusively to you.
              </p>
            </div>

            {/* Sample Outfits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {SAMPLE_AUTUMN_LOOKS.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl overflow-hidden border border-neutral-200/80 bg-neutral-50 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full">
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

            {/* Autumn Style Hurdles Solved */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {AUTUMN_STYLE_SOLUTIONS.map((sol) => (
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

        {/* ── Fold 3: Create Autumn Outfit Ideas With AI ──────── */}
        <section
          data-nav-theme="dark-bg"
          className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6 text-white"
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 mb-3">
                Intelligent Seasonal Fashion
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Create Autumn Outfit Ideas With AI
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Unlock infinite autumn fashion inspiration powered by advanced artificial intelligence. Slidez combines seasonal
                trend forecasts, color science, multi-source outfit inspiration, and instant virtual try-on into one intuitive
                autumn outfit planner.
              </p>
            </div>

            {/* Feature Banner Showcase (image2 from design doc) */}
            <div className="mb-14 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-md">
              <div className="relative w-full aspect-[624/349] max-h-[360px] rounded-2xl overflow-hidden bg-black/40">
                <Image
                  src="/autumn-outfit-features.png"
                  alt="Slidez AI Autumn Outfit Generator features and interface preview"
                  fill
                  loading="lazy"
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 950px"
                />
              </div>
            </div>

            {/* 4 Pillars of AI Autumn Styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">AI Autumn Wardrobe Planner</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Instead of spending hours rummaging through your closet or browsing online catalogs, tell Slidez your plan.
                  The AI builds balanced head-to-toe combinations with knitwear, pants, coats, and boots in seconds.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Palette className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Autumn Trends & Color Theory</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Infuse current seasonal aesthetics — quiet luxury wools, suede chore coats, pleated trousers, and deep autumn
                  undertones (camel, terracotta, espresso, olive) — harmonized with your complexion.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Multi-Source Fall Inspiration</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Save street-style looks from Pinterest or Instagram and import them into Slidez. The AI breaks down each component
                  and recommends exact or alternative items you can shop and wear.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Virtual Fitting Room</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Preview how heavy knitwear and long trench coats actually look on your body shape before purchasing. Realistic
                  neural drape modeling eliminates sizing doubts.
                </p>
              </div>
            </div>

            {/* Interactive Embedded Tool Section */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-neutral-300 text-sm font-medium mb-6">
                Try typing a fall aesthetic or occasion to see how the AI Autumn Outfit Generator styles you:
              </p>
              <StylistToolSection
                submitLabel="Generate Autumn Look"
                chips={["Casual Autumn", "Autumn Workwear", "Fall Date Night", "Cozy Weekend", "Trench Coat Style", "Corduroy"]}
                className="w-full max-w-[760px] mx-auto"
              />
            </div>
          </div>
        </section>

        {/* ── Fold 4: How Slidez's AI Autumn Outfit Generator Works ── */}
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
                How Slidez&apos;s AI Autumn Outfit Generator Works
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                From describing what you are looking for to previewing complete looks in a virtual fitting room, here is how Slidez
                curates your seasonal wardrobe.
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

        {/* ── Fold 5: Explore Autumn Outfits for Every Occasion ── */}
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
                Seasonal Versatility
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Explore Autumn Outfits for Every Occasion
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Whether you need everyday casual autumn outfits, office-ready workwear, or romantic dinner looks, Slidez tailors
                every combination with seasonal warmth, texture balance, and dress code etiquette.
              </p>
            </div>

            {/* Occasion Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              {OCCASIONS_DATA.map((occ) => (
                <div
                  key={occ.category}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={occ.src}
                      alt={occ.alt}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="text-[11px] font-semibold text-orange-400 uppercase tracking-wider block mb-1">
                        {occ.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{occ.category}</h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <p className="text-neutral-300 text-sm leading-relaxed mb-6">{occ.description}</p>

                    <div>
                      <div className="mb-4">
                        <span className="text-xs uppercase font-semibold text-neutral-400 tracking-wider block mb-2">
                          Key Autumn Staples
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {occ.keyPieces.map((piece) => (
                            <span
                              key={piece}
                              className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/10 text-white/90 border border-white/10"
                            >
                              {piece}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 text-xs text-neutral-400 flex items-start gap-2">
                        <span className="text-orange-400 font-bold shrink-0">Styling Tip:</span>
                        <span>{occ.stylingTip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Inspiration Callout */}
            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-orange-950/20 via-neutral-900 to-amber-950/20 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Looking for Specific Autumn Fashion Inspiration?</h3>
              <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-5">
                Explore dedicated guides for men and women, date night outfits, smart workwear, and layering strategies.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/blog/fall-outfit-ideas-for-women"
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Autumn Outfits for Women →
                </Link>
                <Link
                  href="/blog/fall-outfit-ideas-for-men"
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Autumn Outfits for Men →
                </Link>
                <Link
                  href="/blog/what-to-wear-in-autumn"
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  What to Wear in Autumn →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fold 6: Try Your Favorite Autumn Looks Before You Buy ── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Virtual Try-On Experience
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
                Try Your Favorite Autumn Looks Before You Buy
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                Heavy wool coats, oversized knit sweaters, and tailored trousers drape differently depending on height, shoulder
                width, and silhouette. Slidez lets you visualize recommended clothes directly on your photo so you can buy with
                zero fit uncertainty.
              </p>
            </div>

            {/* Interactive Try-On Demonstration Card */}
            <div className="rounded-3xl border border-neutral-200/90 bg-[#fafafa] p-6 sm:p-10 mb-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Step 1: Autumn Garment */}
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center mb-3">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">Step 1</span>
                  <h3 className="font-semibold text-neutral-900 mb-3">Choose Autumn Outfit Item</h3>
                  <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                    <Image
                      src="/outfits/fitted-turtleneck.jpeg"
                      alt="Autumn knit turtleneck sweater"
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-3">Selected by AI Autumn Outfit Generator</p>
                </div>

                {/* Arrow / Transform Icon */}
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold shadow-md">
                    <Sparkles className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-700 mt-2">AI Neural Try-On</span>
                  <span className="text-[11px] text-neutral-400">Drape, texture & proportion</span>
                </div>

                {/* Step 2: See on Photo */}
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">Step 2</span>
                  <h3 className="font-semibold text-neutral-900 mb-3">See It On Your Body</h3>
                  <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                    <Image
                      src="/models/brunette-woman.png"
                      alt="Virtual try-on model preview wearing autumn outfit"
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-3">Realistic fit, drape, and proportion</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-3">
                  <div className="text-2xl font-bold text-neutral-900 mb-1">100% Free</div>
                  <div className="text-xs text-neutral-500">Unlimited autumn try-ons on iOS & Android</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl font-bold text-neutral-900 mb-1">&lt; 5 Seconds</div>
                  <div className="text-xs text-neutral-500">Instant AI fabric drape & fit simulation</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl font-bold text-neutral-900 mb-1">Zero Buyer&apos;s Remorse</div>
                  <div className="text-xs text-neutral-500">Drastically reduce sizing return trips</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Comprehensive Capabilities Grid ──────────────── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-[58] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#fafafa] py-24 px-6 border-t border-neutral-200/60"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Feature Highlights
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-5">
                Everything You Need to Plan Your Fall Style
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                Slidez brings seasonal wardrobe planning, styling recommendations, and virtual try-on together into one
                effortless app.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="p-6 rounded-3xl border border-neutral-200/80 bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center justify-center mb-4 shadow-sm">
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
            style={{ background: "radial-gradient(ellipse at center, rgba(234,88,12,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400 mb-4">
              Get Started Free
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Discover Your Autumn Style With Slidez
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
              Explore autumn outfit ideas, generate personalized fall wardrobe combinations, and virtually try on clothes
              in seconds. Free on iOS, Android, and web.
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

        {/* ── Fold 7: Frequently Asked Questions ────────────── */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed">
                Everything you need to know about using Slidez&apos;s AI autumn outfit generator, creating stylish combinations,
                and trying on seasonal looks virtually.
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
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Recommended Autumn Fashion Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

