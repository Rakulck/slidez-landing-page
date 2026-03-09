import type { Metadata } from "next";

/* ── Site constants ───────────────────────────────────────────── */

// Asset base: the current Vercel deployment (images, og-image, etc.)
export const ASSETS_BASE_URL = "https://slidez-landing-page.vercel.app";

// Canonical base: target production domain (used for all href / schema URLs)
export const CANONICAL_BASE = "https://slidez.ai";

export const UNSPLASH_BASE = "https://images.unsplash.com/photo-";

const isProduction = process.env.VERCEL_ENV === "production";

/* ── Config types ─────────────────────────────────────────────── */

export type StyleCard = {
  label: string;
  desc: string;
  img: string;
  alt: string;
};

export type WhatGoesWithItem = {
  category: string;
  body: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type RelatedPage = {
  label: string;
  href: string;
  desc: string;
};

export type PopularIdea = {
  label: string;
  href: string;
};

export type OutfitPageConfig = {
  // Routing — the URL segment after the domain, e.g. "outfit-ideas"
  slug: string;

  // SEO metadata
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;

  // Hero
  heroEyebrow?: string; // defaults to "AI Stylist" in the template
  heroH1: string;
  heroSubtext: string;

  // Section data
  styleCards: StyleCard[];
  whatGoesWith: WhatGoesWithItem[];
  faqItems: FaqItem[];
  popularIdeas: PopularIdea[];
  relatedPages: RelatedPage[];
};

/* ── Metadata generator ───────────────────────────────────────── */

export function generateOutfitPageMetadata(config: OutfitPageConfig): Metadata {
  const canonicalUrl = `${CANONICAL_BASE}/${config.slug}`;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    robots: isProduction
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: false },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: config.ogTitle,
      description: config.ogDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "Slidez",
      images: [
        {
          url: `${ASSETS_BASE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: config.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.ogTitle,
      description: config.ogDescription,
      site: "@slidez_social",
      creator: "@slidez_social",
      images: [`${ASSETS_BASE_URL}/opengraph-image`],
    },
  };
}

/* ── Schema generators ────────────────────────────────────────── */

// Shared across all outfit pages — describes the Slidez app itself
export const sharedSoftwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Slidez AI Stylist",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description:
    "Slidez is an AI stylist and virtual fitting room that lets users generate outfit ideas and try clothes before buying them.",
  url: CANONICAL_BASE,
  featureList: [
    "AI Stylist",
    "Virtual Try On",
    "Outfit Generator",
    "Social Shopping",
    "AI Outfit Recommendations",
  ],
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "Slidez" },
};

export function generateFaqSchema(faqItems: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function generateBreadcrumbSchema(slug: string, pageLabel: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
      {
        "@type": "ListItem",
        position: 2,
        name: pageLabel,
        item: `${CANONICAL_BASE}/${slug}`,
      },
    ],
  };
}

export function generateWebPageSchema(config: OutfitPageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.title,
    url: `${CANONICAL_BASE}/${config.slug}`,
    description: config.description,
    isPartOf: { "@type": "WebSite", name: "Slidez", url: CANONICAL_BASE },
    publisher: { "@type": "Organization", name: "Slidez" },
  };
}

/* ── Keyword helpers ──────────────────────────────────────────── */

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}

/* ── Shared default content ───────────────────────────────────── */

export const DEFAULT_STYLE_CARDS: StyleCard[] = [
  {
    label: "Casual Everyday",
    desc: "Relaxed pieces that feel intentional — jeans, tees, and effortless layers for every day.",
    img: `${UNSPLASH_BASE}1539109136881-3be0616acf4b?w=400&q=85&fit=crop&crop=top`,
    alt: "Casual everyday outfit idea from Slidez AI Stylist",
  },
  {
    label: "Office / Work",
    desc: "Professional looks that feel modern and put-together without being stiff or overdone.",
    img: `${UNSPLASH_BASE}1490481651871-ab68de25d43d?w=400&q=85&fit=crop&crop=top`,
    alt: "Office work outfit idea from Slidez AI Stylist",
  },
  {
    label: "Date Night",
    desc: "Effortlessly romantic looks for dinner, drinks, or a late-night walk that turns heads.",
    img: `${UNSPLASH_BASE}1524504388940-b1c1722653e1?w=400&q=85&fit=crop&crop=top`,
    alt: "Date night outfit idea from Slidez AI Stylist",
  },
  {
    label: "Winter Layers",
    desc: "Cozy, considered layering that keeps you warm without sacrificing style or proportion.",
    img: `${UNSPLASH_BASE}1483985988355-763728e1935b?w=400&q=85&fit=crop&crop=top`,
    alt: "Winter layered outfit idea from Slidez AI Stylist",
  },
];

export const DEFAULT_WHAT_GOES_WITH: WhatGoesWithItem[] = [
  {
    category: "Tops",
    body: "The right top sets the tone for the entire outfit. Slidez AI matches your top — whether a fitted tee, silk blouse, or chunky knit — to bottoms, shoes, and accessories that balance proportion and vibe.",
  },
  {
    category: "Bottoms",
    body: "From wide-leg trousers to leather skirts, Slidez AI finds what pairs best above and below. It considers silhouette, fabric, and occasion to make sure nothing clashes.",
  },
  {
    category: "Shoes",
    body: "Shoes anchor the look. Slidez suggests footwear that matches the outfit's energy — sleek loafers for work, strappy heels for evening, clean sneakers for casual. The right shoe makes the outfit.",
  },
  {
    category: "Accessories",
    body: "Jewelry, bags, belts, and layers are chosen to elevate — not overpower. Slidez AI keeps accessories intentional, selecting pieces that feel finished without trying too hard.",
  },
];

export const DEFAULT_POPULAR_IDEAS: PopularIdea[] = [
  { label: "Date Night Outfit Ideas",   href: "/date-night-outfit-ideas"   },
  { label: "Winter Outfit Ideas",       href: "/winter-outfit-ideas"       },
  { label: "Concert Outfit Ideas",      href: "/concert-outfit-ideas"      },
  { label: "Office Outfit Ideas",       href: "/office-outfit-ideas"       },
  { label: "Black Jeans Outfit Ideas",  href: "/black-jeans-outfit-ideas"  },
  { label: "Casual Coffee Date Outfit", href: "/casual-coffee-date-outfit" },
];

export const DEFAULT_RELATED_PAGES: RelatedPage[] = [
  { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas", desc: "Romantic looks for any evening out." },
  { label: "Office Outfit Ideas",     href: "/office-outfit-ideas",     desc: "Professional styles for the modern workplace." },
  { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas",     desc: "Cozy layered looks for the colder months." },
  { label: "Concert Outfit Ideas",    href: "/concert-outfit-ideas",    desc: "Standout looks for live music and festivals." },
];

export function createDefaultFaqItems(keyword: string): FaqItem[] {
  return [
    {
      q: `What are good ${keyword} outfit ideas?`,
      a: `The best ${keyword} outfit ideas balance your personal style with the occasion. Slidez AI Stylist generates complete looks — tops, bottoms, shoes, and accessories — tailored to ${keyword} specifically.`,
    },
    {
      q: "How does the Slidez AI stylist work?",
      a: "Describe what you need — a vibe, occasion, or specific item — and Slidez AI generates curated outfit suggestions with matching pieces and color palettes. The more specific you are, the more tailored the results.",
    },
    {
      q: `Can I try on ${keyword} outfits before buying?`,
      a: `Yes. Slidez includes a virtual try-on feature so you can see exactly how any ${keyword} outfit looks on you before buying. Download the app on iOS or Android to access the full try-on experience.`,
    },
    {
      q: "Is Slidez free to use?",
      a: "Yes, Slidez is free to download on iOS and Android. Generate outfit ideas and use the virtual try-on to see looks on your photo before committing to any purchase.",
    },
  ];
}

/* ── Config factory ───────────────────────────────────────────── */

/**
 * Create a complete OutfitPageConfig from just a keyword.
 * All fields have sensible keyword-driven defaults and can be overridden.
 *
 * @example
 *   // Minimal — everything auto-generated
 *   const config = createOutfitPageConfig("Date Night");
 *   // slug       → "date-night-outfit-ideas"
 *   // heroH1     → "Date Night Outfit Ideas"
 *   // title      → "Date Night Outfit Ideas – AI Stylist | Slidez"
 *
 * @example
 *   // With overrides for custom style cards or FAQ
 *   const config = createOutfitPageConfig("Concert", {
 *     styleCards: CONCERT_STYLE_CARDS,
 *     faqItems:   CONCERT_FAQ,
 *   });
 */
export function createOutfitPageConfig(
  keyword: string,
  overrides: Partial<OutfitPageConfig> = {}
): OutfitPageConfig {
  const slug = overrides.slug ?? `${slugify(keyword)}-outfit-ideas`;

  return {
    slug,
    title:          `${keyword} Outfit Ideas – AI Stylist | Slidez`,
    description:    `Discover ${keyword} outfit ideas instantly with the Slidez AI Stylist. Get a complete look for any occasion, then try it on virtually — free on iOS and Android.`,
    keywords: [
      `${keyword.toLowerCase()} outfit ideas`,
      `${keyword.toLowerCase()} outfits`,
      "AI stylist",
      "outfit ideas",
      "what to wear",
      "fashion AI",
      "Slidez AI Stylist",
    ],
    ogTitle:        `${keyword} Outfit Ideas – AI Stylist | Slidez`,
    ogDescription:  `Get instant ${keyword} outfit ideas with the Slidez AI Stylist and virtual try-on.`,
    heroEyebrow:    "AI Stylist",
    heroH1:         `${keyword} Outfit Ideas`,
    heroSubtext:    `Get instant ${keyword} outfit ideas based on your style, mood, or occasion.`,
    styleCards:     DEFAULT_STYLE_CARDS,
    whatGoesWith:   DEFAULT_WHAT_GOES_WITH,
    faqItems:       createDefaultFaqItems(keyword),
    popularIdeas:   DEFAULT_POPULAR_IDEAS,
    relatedPages:   DEFAULT_RELATED_PAGES,
    ...overrides,
  };
}
