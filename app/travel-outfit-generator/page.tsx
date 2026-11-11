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
  Luggage,
  Plane,
  Sun,
  Palmtree,
  MapPin,
  CloudSun,
  Waves,
  Search,
} from "lucide-react";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata & SEO ───────────────────────────────────────────── */

const TITLE = "Travel Outfit Generator | Create Stylish Travel Looks with AI";
const DESCRIPTION =
  "Discover travel outfit ideas with Slidez. Explore personalized vacation looks, find clothes for different destinations, and virtually try on outfits before you travel.";
const CANONICAL = `${CANONICAL_BASE}/travel-outfit-generator`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "travel outfit generator",
    "travel outfit ideas",
    "travel outfits for women",
    "travel outfits for men",
    "AI travel outfit generator",
    "vacation outfit ideas",
    "travel clothing ideas",
    "airport outfit ideas",
    "comfortable travel outfits",
    "travel fashion inspiration",
    "outfits for vacation",
    "travel wardrobe planner",
    "holiday outfit ideas",
    "travel outfit combinations",
    "what to wear while travelling",
    "destination outfit ideas",
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
  name: "How Slidez's AI Travel Outfit Generator Works",
  description:
    "Follow these 5 simple steps to discover travel outfit ideas, plan stylish vacation combinations, and virtually try on outfits before you travel.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Tell Slidez What You're Looking For",
      text: "Share your travel destination, climate, trip duration, planned activities, and aesthetic preferences — from breezy beach resort linen to chic European city walking looks.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Get Personalized Travel Clothing Recommendations",
      text: "Slidez's AI analyzes destination weather, luggage space limits, and style preferences to generate coordinated travel outfits for women and men.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Explore & Refine Travel Outfit Combinations",
      text: "Compare multiple holiday outfit combinations, mix-and-match versatile capsule pieces, and adjust layers for warm days or breezy evenings.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Virtually Try On Travel Outfits on Yourself",
      text: "Use built-in AI virtual try-on to visualize drape, fit, and proportions of vacation dresses, linen sets, and airport outfits directly on your photo.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Pack Light and Travel With Complete Confidence",
      text: "Shop missing travel essentials using direct store links or recreate looks from your existing closet knowing every item coordinates seamlessly.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a travel outfit generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A travel outfit generator is an intelligent fashion tool powered by artificial intelligence that creates personalized travel outfit ideas and vacation clothing combinations. By analyzing your travel destination, planned activities, climate conditions, and personal style, it curates versatile, packable wardrobe combinations and allows you to virtually try them on before you pack or shop.",
      },
    },
    {
      "@type": "Question",
      name: "How can I generate travel outfit ideas using AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generating travel outfit ideas on Slidez is effortless: simply type your destination and trip plans in natural language (such as '7 days in Italy in June with lots of walking' or 'relaxed beach resort vacation in Mexico'), choose a style chip, and Slidez instantly creates coordinated head-to-toe looks tailored to your body type and itinerary.",
      },
    },
    {
      "@type": "Question",
      name: "What should I wear when travelling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When traveling, prioritize breathable, wrinkle-resistant fabrics with comfortable stretch. The golden rule is smart layering: wear a soft breathable base layer (like a cotton tee or modal tank), an insulating mid-layer (like a cardigan or lightweight fleece), stretchy bottoms (like relaxed joggers or drawstring chinos), and supportive slip-on sneakers for easy airport security checks.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose outfits based on my travel destination?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To choose outfits effectively, research your destination's daytime temperature swing, humidity, precipitation, and local cultural norms. For beach destinations, focus on lightweight natural linen and sun protection. For European cities, choose comfortable walking sneakers and smart-casual layers. Slidez automatically analyzes destination climates to recommend weather-appropriate outfits.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best outfits for beach vacations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top beach vacation outfits combine breezy functionality with effortless resort style: (1) Breathable linen button-downs over swim trunks or tailored shorts, (2) Flowy floral maxi or slip dresses with woven straw totes and slide sandals, (3) Matching linen two-piece sets for seamless day-to-night transitions, and (4) Lightweight kimonos or crochet cover-ups with oversized sunglasses.",
      },
    },
    {
      "@type": "Question",
      name: "What should I wear for comfortable airport travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For comfortable airport outfits, focus on unrestricted mobility and temperature regulation. Pair high-waisted relaxed joggers or stretch trousers with a soft t-shirt, an oversized hoodie or cardigan, and cushioned slip-on sneakers. Avoid stiff fabrics and belts with heavy metal hardware, and carry a lightweight scarf that can double as a blanket on cold flights.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI suggest outfits based on my destination and weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Slidez factors in local weather patterns, seasonal temperature ranges, and destination environments. Whether you are traveling to a humid tropical island, a rainy coastal city, or a chilly mountain retreat, the AI travel wardrobe planner recommends garments with appropriate breathability, insulation, and rain resistance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I generate travel outfit ideas for men and women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Slidez provides dedicated AI styling logic for both women and men. It generates travel outfits tailored to men's vacation styles (linen shirts, performance chinos, resort polo shirts, travel sneakers) and women's holiday looks (sundresses, modular separates, versatile skirts, walkable heels), with distinct fit and silhouette guidance.",
      },
    },
    {
      "@type": "Question",
      name: "Can I virtually try on travel outfits before buying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Slidez features advanced AI virtual try-on technology. Upload a photo of yourself or choose an avatar matching your body shape, and you can visualize recommended vacation dresses, linen sets, and airport layers directly on your silhouette with realistic draping, texture rendering, and fit proportions.",
      },
    },
    {
      "@type": "Question",
      name: "Is Slidez's travel outfit generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Slidez's AI travel outfit generator is 100% free to use on iOS, Android, and web. You can generate unlimited destination outfit ideas, create travel wardrobe combinations, and virtually try on vacation clothes with zero subscription fees.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "AI Travel Outfit Generator", item: CANONICAL },
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
  name: "Slidez AI Travel Outfit Generator",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android, Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description: DESCRIPTION,
  url: CANONICAL,
};

/* ── Content Data ─────────────────────────────────────────────── */

const SAMPLE_TRAVEL_LOOKS = [
  {
    title: "Breezy Resort Linen & Woven Accessories",
    occasion: "Tropical Vacation & Beach Resort",
    vibe: "Effortless, Breathable, Sun-Kissed",
    src: "/outfit-vacation.jpg",
    alt: "Travel outfits for women with airy linen resort wear and woven tote bag",
    tags: ["Linen Button-Down", "Breezy Trousers", "Straw Tote", "Slide Sandals"],
  },
  {
    title: "Tailored Chinos & Breathable Overshirt",
    occasion: "Travel Outfits for Men & Transit",
    vibe: "Relaxed, Functional, Sharp",
    src: "/outfit-weekend.jpg",
    alt: "Travel outfits for men with comfortable walking chinos and lightweight jacket",
    tags: ["Stretch Chinos", "Light Overshirt", "White Sneakers", "Minimalist Duffel"],
  },
  {
    title: "City Walking Layers & Supportive Sneakers",
    occasion: "European City Exploration",
    vibe: "Cosmopolitan, Practical, Polished",
    src: "/outfit-nyc.jpg",
    alt: "City exploration travel outfit ideas with comfortable sneakers and crossbody bag",
    tags: ["Structured Trench", "Cropped Denim", "Supportive Sneakers", "Crossbody Bag"],
  },
  {
    title: "Romantic Sunset Slip Dress & Strappy Mules",
    occasion: "Vacation Dinners & Nightlife",
    vibe: "Sleek, Romantic, Vacation Glam",
    src: "/outfits/rooftop-outfit.jpeg",
    alt: "Vacation outfit ideas for dinner with elegant evening slip dress",
    tags: ["Silk Midi Dress", "Block Heel Mules", "Gold Jewelry", "Mini Shoulder Bag"],
  },
];

const TRAVEL_STYLE_SOLUTIONS = [
  {
    icon: <CloudSun className="w-5 h-5 text-neutral-900" />,
    title: "Destination Weather & Climate Layering",
    body: "From humid island mornings to brisk evening breezes, Slidez coordinates breathable base pieces and packable layers so you stay comfortable in changing climates.",
  },
  {
    icon: <Luggage className="w-5 h-5 text-neutral-900" />,
    title: "Capsule Mix-and-Match Versatility",
    body: "Pack less and wear more. Every recommended piece pairs with multiple items, creating dozens of stylish travel outfit combinations from just a carry-on bag.",
  },
  {
    icon: <Shirt className="w-5 h-5 text-neutral-900" />,
    title: "Wrinkle-Resistant & Packable Fabrics",
    body: "Slidez prioritizes low-maintenance textiles like linen blends, modal cotton, and performance stretch that emerge from your suitcase ready to wear.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-neutral-900" />,
    title: "Cultural & Itinerary Etiquette",
    body: "From modest attire for historic landmarks and religious temples to chic resort dress codes, get outfits that match local customs and specific activities.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Tell Slidez Your Destination & Style Plans",
    body: "Describe where you're heading, your planned activities, the climate, or a specific vibe. Try prompts like '5-day trip to Lisbon with cobblestone walking' or 'relaxing Bali beach resort vacation'.",
    badge: "Step 1: Your Destination Prompt",
  },
  {
    step: "02",
    title: "Get Personalized Travel Clothing Recommendations",
    body: "The AI fashion stylist analyzes destination weather, silhouette comfort, and dress codes to assemble complete, coordinated vacation outfit ideas in seconds.",
    badge: "Step 2: AI Vacation Analysis",
  },
  {
    step: "03",
    title: "Explore Different Travel Outfit Combinations",
    body: "Easily swap individual pieces — test a linen button-up vs. a breezy knit, or switch walking sneakers for evening slide sandals with a single tap.",
    badge: "Step 3: Mix & Match Capsule Layers",
  },
  {
    step: "04",
    title: "Virtually Try On Travel Outfits on Yourself",
    body: "Upload your photo or pick an avatar to preview how vacation dresses, airport sets, and resort wear drape and fit your body before packing or buying.",
    badge: "Step 4: AI Virtual Fitting Room",
  },
  {
    step: "05",
    title: "Pack Light and Travel With Complete Confidence",
    body: "Shop exact pieces with direct brand links, or recreate the AI-generated travel outfit ideas using staples already in your wardrobe with zero overpacking.",
    badge: "Step 5: Stress-Free Packing",
  },
];

const DESTINATIONS_DATA = [
  {
    category: "Beach & Tropical Resort Outfits",
    subtitle: "Coastal relaxation and breezy island elegance",
    description:
      "For tropical escapes and beach vacations, prioritize ultra-breathable natural fibers, sun protection, and effortless transition from sand to seaside cafe.",
    keyPieces: ["Linen Button-Down Shirts", "Airy Crochet Cover-Ups", "Woven Straw Beach Tote", "Waterproof Slide Sandals"],
    stylingTip: "Choose 100% linen or lightweight poplin that keeps you cool under the sun and dries quickly after a swim.",
    src: "/outfits/beach-look.jpeg",
    alt: "Beach vacation outfit ideas with breezy linen and summer accessories",
  },
  {
    category: "City Exploration & Sightseeing",
    subtitle: "All-day walking comfort and cosmopolitan chic",
    description:
      "Navigating historic European cobblestones and cultural galleries calls for polished smart-casual outfits paired with supportive footwear.",
    keyPieces: ["Supportive White Sneakers", "Tailored Elastic-Waist Trousers", "Lightweight Trench Coat", "Anti-Theft Crossbody Bag"],
    stylingTip: "Pair structured outerwear with versatile neutral sneakers so you look sophisticated in photos without sore feet.",
    src: "/outfit-nyc.jpg",
    alt: "City sightseeing travel outfits for women and men with comfortable walking shoes",
  },
  {
    category: "Comfortable Airport & Transit Outfits",
    subtitle: "Wrinkle-free ease for flights, road trips & trains",
    description:
      "Conquer chilly airplane cabins and long travel days with cozy, flexible layers that look put-together when you step off the plane.",
    keyPieces: ["Relaxed Stretch Joggers", "Oversized Soft French Terry Hoodie", "Slip-On Cushion Sneakers", "Compact Travel Scarf"],
    stylingTip: "Wear your heaviest jacket and footwear during transit to save maximum suitcase weight and cabin luggage space.",
    src: "/outfit-casual.jpg",
    alt: "Comfortable airport outfit ideas with layered transit apparel",
  },
  {
    category: "Vacation Evening & Fine Dining Looks",
    subtitle: "Sunset cocktails, oceanfront dining and nightlife",
    description:
      "Elevate your vacation style for rooftop dinners, wine tastings, and romantic evenings with wrinkle-resistant silky fabrics and modular accessories.",
    keyPieces: ["Silk-Blend Slip Dress", "Unstructured Linen Blazer", "Comfortable Block Heels", "Gold Accent Jewelry"],
    stylingTip: "Pack statement jewelry and a bold lip color to instantly transform casual daytime linen pieces into glamorous evening looks.",
    src: "/outfits/rooftop-outfit.jpeg",
    alt: "Vacation outfit ideas for dinner with elegant evening slip dress and accessories",
  },
];

const CAPABILITIES = [
  {
    icon: <Wand2 className="w-5 h-5 text-neutral-950" />,
    title: "Destination-Aware Recommendations",
    desc: "Cuts, fabrics, and silhouettes hand-selected specifically for your trip destination, local weather, and itinerary.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-neutral-950" />,
    title: "AI Travel Outfit Generator",
    desc: "Intelligent algorithmic styling built on packing efficiency, versatile color palettes, and global fashion trends.",
  },
  {
    icon: <Compass className="w-5 h-5 text-neutral-950" />,
    title: "Outfits for Every Destination",
    desc: "From European cobblestone walking tours and tropical Caribbean resorts to mountain weekend road trips.",
  },
  {
    icon: <Shirt className="w-5 h-5 text-neutral-950" />,
    title: "Travel Outfits for Women & Men",
    desc: "Dedicated styling logic tailored to women's and men's distinct travel silhouettes, fits, and capsule wardrobe essentials.",
  },
  {
    icon: <Eye className="w-5 h-5 text-neutral-950" />,
    title: "AI Virtual Try-On Before Packing",
    desc: "Realistic preview projecting vacation dresses, linen sets, and transit layers directly onto your photo before you pack.",
  },
  {
    icon: <Layers className="w-5 h-5 text-neutral-950" />,
    title: "Capsule Wardrobe Planning",
    desc: "Easily mix-and-match a compact set of tops, bottoms, layers, and shoes to unlock dozens of unique vacation looks.",
  },
  {
    icon: <Search className="w-5 h-5 text-neutral-950" />,
    title: "Travel Fashion Inspiration",
    desc: "Import vacation mood boards from Pinterest or Instagram and let Slidez find shoppable matching travel garments.",
  },
  {
    icon: <ShoppingBag className="w-5 h-5 text-neutral-950" />,
    title: "Smart Packing Assistance",
    desc: "Direct retailer links, packing checklists, and suitcase gap analysis so you only bring clothes you will actually wear.",
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
    title: "What to Wear for Every Occasion: AI Style Guide",
    href: "/blog/what-to-wear-every-occasion-ai-guide",
    desc: "Master dress codes for vacations, airport transit, casual day trips, and upscale dinners.",
  },
  {
    title: "How to Build a Wardrobe Around Your Lifestyle",
    href: "/blog/build-a-wardrobe-around-your-lifestyle",
    desc: "Create versatile modular capsule wardrobes that pack light and travel effortlessly anywhere.",
  },
  {
    title: "How to Choose Clothes: Fit, Fabric & Silhouette",
    href: "/blog/how-to-choose-clothes-fit-fabric-silhouette",
    desc: "Select breathable, wrinkle-resistant travel fabrics that hold shape and keep you comfortable.",
  },
  {
    title: "What Colors Go Together in an Outfit",
    href: "/blog/what-colors-go-together-outfit",
    desc: "Master cohesive color harmony so all your travel tops and bottoms mix and match seamlessly.",
  },
  {
    title: "How to Match Clothes Like a Stylist",
    href: "/blog/how-to-match-clothes-like-a-stylist",
    desc: "Learn expert formulas for pairing textures, layers, and footwear for effortless holiday outfits.",
  },
  {
    title: "How to Layer Clothes: Pro Styling Tips",
    href: "/blog/how-to-layer-clothes-for-fall",
    desc: "Navigate chilly airplanes and variable destination weather with smart, lightweight layering.",
  },
];

/* ── Page Component ───────────────────────────────────────────── */

export default function AITravelOutfitGeneratorPage() {
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
          ariaLabel="AI travel outfit generator"
          eyebrow="AI Travel Outfit Generator · Free to Use"
          title="AI Travel Outfit Generator"
          subtitle={
            <>
              Discover stylish travel outfit ideas and explore curated vacation outfit ideas with Slidez&apos;s AI travel outfit generator.
              <br className="hidden sm:inline" /> Create comfortable travel outfit combinations for any destination, get holiday outfit inspiration for women and men, and virtually try on clothes before you pack.
            </>
          }
          submitLabel="Generate travel outfit"
          chips={[
            "Airport Comfort",
            "Beach Vacation",
            "European City Break",
            "Tropical Resort",
            "Mountain & Hiking",
            "Business Travel",
          ]}
        />

        {/* Hero Visual Preview Card */}
        <section
          aria-label="Travel outfit generator preview"
          className="relative z-10 -mt-6 sm:-mt-8 max-w-4xl mx-auto px-6 mb-10 text-center"
        >
          <div className="relative rounded-3xl overflow-hidden border border-neutral-200/80 bg-gradient-to-b from-neutral-50 to-white p-3 sm:p-5 shadow-lg">
            <div className="relative w-full aspect-[624/164] max-h-[170px] rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src="/travel-outfit-hero.png"
                alt="AI Travel Outfit Generator interface showing vacation fashion recommendations"
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
                Destination-Aware Outfits
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Comfortable Airport Looks
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Virtual Try-On Before Packing
              </span>
            </div>
          </div>
        </section>

        {/* ── Fold 2: Discover Travel Outfits That Match Your Destination ────── */}
        <section
          data-nav-theme="light-bg"
          className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6 border-t border-neutral-100"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-3">
                Personalized Destination Styling
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">
                Discover Travel Outfits That Match Your Destination
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                Packing for a trip can be challenging: limited suitcase space, unpredictable weather, and different cultural dress
                codes often lead to overpacking unworn clothes. Slidez lets you share your destination, planned activities, personal
                aesthetic, and climate so you discover tailored travel clothing ideas and complete outfits for vacation tailored
                exclusively to you.
              </p>
            </div>

            {/* Sample Outfits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {SAMPLE_TRAVEL_LOOKS.map((item) => (
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

            {/* Travel Style Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TRAVEL_STYLE_SOLUTIONS.map((sol) => (
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

        {/* ── Fold 3: Create Your Perfect Travel Look With AI ──────── */}
        <section
          data-nav-theme="dark-bg"
          className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6 text-white"
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(14,165,233,0.08) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 mb-3">
                Intelligent Vacation Wardrobe
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Create Your Perfect Travel Look With AI
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Unlock endless travel fashion inspiration powered by artificial intelligence. Slidez combines local destination
                climate data, packing space optimization, multi-source style inspiration, and virtual try-on into one intuitive
                travel wardrobe planner.
              </p>
            </div>

            {/* Feature Banner Showcase (image2 from design doc) */}
            <div className="mb-14 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur-md">
              <div className="relative w-full aspect-[624/349] max-h-[360px] rounded-2xl overflow-hidden bg-black/40">
                <Image
                  src="/travel-outfit-features.png"
                  alt="Slidez AI Travel Outfit Generator features and interface preview"
                  fill
                  loading="lazy"
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 950px"
                />
              </div>
            </div>

            {/* 4 Pillars of AI Travel Styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                    <Luggage className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">AI Travel Wardrobe Planner</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Instead of guessing what to pack, share your travel itinerary. The AI generates a modular capsule wardrobe of
                  tops, bottoms, layers, and footwear that mix and match for every day of your trip.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Sun className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Destination & Weather Intelligence</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Automatically adapts to temperature swings, humidity levels, and seasonal rainfall across global destinations,
                  ensuring your vacation outfits keep you comfortable from arrival to departure.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Multi-Source Vacation Inspiration</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Save vacation looks from Pinterest, Instagram, or TikTok and import them into Slidez. The AI breaks down each
                  ensemble and finds matching, shoppable travel clothing items.
                </p>
              </div>

              <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">AI Virtual Try-On Before Packing</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Preview how vacation dresses, linen sets, and airport outfits look on your silhouette before packing or buying.
                  Realistic neural drape modeling eliminates fit doubts.
                </p>
              </div>
            </div>

            {/* Interactive Embedded Tool Section */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-neutral-300 text-sm font-medium mb-6">
                Try typing a travel destination or trip style to see how the AI Travel Outfit Generator styles you:
              </p>
              <StylistToolSection
                submitLabel="Generate Travel Look"
                chips={["Beach Resort", "Airport Comfort", "Europe Sightseeing", "Tropical Getaway", "Mountain Trip", "Business Trip"]}
                className="w-full max-w-[760px] mx-auto"
              />
            </div>
          </div>
        </section>

        {/* ── Fold 4: How Slidez's Travel Outfit Generator Works ── */}
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
                How Slidez&apos;s Travel Outfit Generator Works
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                From telling Slidez what you are looking for to previewing complete looks in a virtual fitting room, here is how Slidez
                curates your perfect travel wardrobe.
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

        {/* ── Fold 5: Discover Travel Outfits for Every Destination ── */}
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
                Destination Versatility
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Discover Travel Outfits for Every Destination
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Whether you need breezy beach vacation outfits, comfortable airport travel attire, chic European city looks, or
                sophisticated holiday dinners, Slidez coordinates every outfit with climate awareness and effortless style.
              </p>
            </div>

            {/* Destination Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
              {DESTINATIONS_DATA.map((dest) => (
                <div
                  key={dest.category}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={dest.src}
                      alt={dest.alt}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                        {dest.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{dest.category}</h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <p className="text-neutral-300 text-sm leading-relaxed mb-6">{dest.description}</p>

                    <div>
                      <div className="mb-4">
                        <span className="text-xs uppercase font-semibold text-neutral-400 tracking-wider block mb-2">
                          Key Travel Staples
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {dest.keyPieces.map((piece) => (
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
                        <span className="text-sky-400 font-bold shrink-0">Styling Tip:</span>
                        <span>{dest.stylingTip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Travel Inspiration Callout */}
            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-sky-950/20 via-neutral-900 to-indigo-950/20 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Looking for Specific Vacation Outfit Inspiration?</h3>
              <p className="text-neutral-400 text-sm max-w-xl mx-auto mb-5">
                Explore dedicated style guides for packing light, color matching, dress codes, and smart seasonal layering.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/blog/what-to-wear-every-occasion-ai-guide"
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  What to Wear for Every Occasion →
                </Link>
                <Link
                  href="/blog/build-a-wardrobe-around-your-lifestyle"
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Build a Travel Capsule Wardrobe →
                </Link>
                <Link
                  href="/blog/how-to-choose-clothes-fit-fabric-silhouette"
                  className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  Best Travel Fabrics & Fit →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Fold 6: Try Your Travel Outfits Before You Buy ── */}
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
                Try Your Travel Outfits Before You Buy
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
                Vacation dresses, airy linen separates, and airport transit layers drape differently depending on height and body
                silhouette. Slidez lets you visualize recommended travel clothing directly on your photo so you only pack and buy
                pieces you love.
              </p>
            </div>

            {/* Interactive Try-On Demonstration Card */}
            <div className="rounded-3xl border border-neutral-200/90 bg-[#fafafa] p-6 sm:p-10 mb-12 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Step 1: Travel Garment */}
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-3">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">Step 1</span>
                  <h3 className="font-semibold text-neutral-900 mb-3">Choose Travel Outfit Item</h3>
                  <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                    <Image
                      src="/outfits/beach-look.jpeg"
                      alt="Vacation travel linen shirt and resort outfit"
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-3">Selected by AI Travel Outfit Generator</p>
                </div>

                {/* Arrow / Transform Icon */}
                <div className="flex flex-col items-center justify-center py-2">
                  <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold shadow-md">
                    <Sparkles className="w-6 h-6 text-sky-400" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-700 mt-2">AI Neural Try-On</span>
                  <span className="text-[11px] text-neutral-400">Drape, fit & destination comfort</span>
                </div>

                {/* Step 2: See on Photo */}
                <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-1">Step 2</span>
                  <h3 className="font-semibold text-neutral-900 mb-3">See It On Your Body</h3>
                  <div className="relative w-36 h-44 rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200">
                    <Image
                      src="/models/brunette-woman.png"
                      alt="Virtual try-on model preview wearing travel outfit"
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
                  <div className="text-xs text-neutral-500">Unlimited vacation try-ons on iOS & Android</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl font-bold text-neutral-900 mb-1">&lt; 5 Seconds</div>
                  <div className="text-xs text-neutral-500">Instant AI fabric drape & fit simulation</div>
                </div>
                <div className="p-3">
                  <div className="text-2xl font-bold text-neutral-900 mb-1">Zero Overpacking</div>
                  <div className="text-xs text-neutral-500">Never pack clothes you won&apos;t end up wearing</div>
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
                Everything You Need to Plan Your Vacation Wardrobe
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                Slidez brings destination wardrobe planning, outfit recommendations, and virtual try-on together into one
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
            style={{ background: "radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 mb-4">
              Get Started Free
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Pack Less, Dress Better With Slidez
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8">
              Explore travel outfit ideas, generate personalized vacation wardrobe combinations, and virtually try on clothes
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
                Everything you need to know about using Slidez&apos;s AI travel outfit generator, planning vacation combinations,
                and trying on travel looks virtually.
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
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Recommended Travel & Fashion Guides</h3>
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

