import type { Metadata } from "next";
import WhatToWearTemplate from "@/components/templates/WhatToWearTemplate";
import {
  CANONICAL_BASE,
  ASSETS_BASE_URL,
  sharedSoftwareAppSchema,
  generateBreadcrumbSchema,
  generateFaqSchema,
  generateWebPageSchema,
  type OutfitPageConfig,
} from "@/lib/outfit-pages";

const isProduction = process.env.VERCEL_ENV === "production";
const CANONICAL = `${CANONICAL_BASE}/what-to-wear`;

const TITLE = "What to Wear – Outfit Ideas for Any Occasion | Slidez";
const DESCRIPTION =
  "Not sure what to wear? Explore outfit ideas for any occasion — date night, office, casual, party, beach, and more. Create a look that fits your style with Slidez.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "what to wear",
    "what should I wear",
    "what to wear today",
    "what to wear tonight",
    "outfit ideas",
    "outfit ideas for any occasion",
    "what should I wear today",
    "Slidez AI Stylist",
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
    images: [{ url: `${ASSETS_BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@slidez_social",
    images: [`${ASSETS_BASE_URL}/opengraph-image`],
  },
};

// Reuse schema generators with a minimal config shape
const pageConfig = {
  slug: "what-to-wear",
  title: TITLE,
  description: DESCRIPTION,
  heroH1: "What Should You Wear?",
} as OutfitPageConfig;

const faqItems = [
  {
    q: "What should I wear today?",
    a: "Think about where you're going — a casual day out, the office, a dinner, or something else. Describe your occasion or vibe and get a complete outfit instantly. No more staring at your wardrobe.",
  },
  {
    q: "How do I choose an outfit for an occasion?",
    a: "Start with your occasion, then think about the vibe you want — relaxed, polished, bold, or minimal. Slidez helps you put together a complete look that fits the moment, from clothing to shoes and accessories.",
  },
  {
    q: "Can I try outfit ideas before buying?",
    a: "Yes. Slidez includes a virtual try-on feature so you can see how any outfit looks on your actual photo before buying. Download the app on iOS or Android — free to use.",
  },
];

export default function Page() {
  const faqSchema      = generateFaqSchema(faqItems);
  const breadcrumb     = generateBreadcrumbSchema("what-to-wear", "What to Wear");
  const webPageSchema  = generateWebPageSchema(pageConfig);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sharedSoftwareAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <WhatToWearTemplate />
    </>
  );
}
