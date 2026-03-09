import type { Metadata } from "next";
import OutfitIdeasHubTemplate from "@/components/templates/OutfitIdeasHubTemplate";
import {
  type OutfitPageConfig,
  generateOutfitPageMetadata,
  sharedSoftwareAppSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/outfit-pages";

/* ── Page config ──────────────────────────────────────────────── */

const config: OutfitPageConfig = {
  slug: "outfit-ideas",

  title: "Outfit Ideas – AI Stylist for Any Occasion | Slidez",
  description:
    "Describe your style, mood, or occasion and generate outfit ideas instantly. Slidez AI Stylist creates complete looks in seconds — free to use.",
  keywords: [
    "outfit ideas",
    "AI outfit generator",
    "AI stylist",
    "outfit generator",
    "what to wear",
    "fashion AI",
    "style ideas",
    "outfit inspiration",
    "Slidez AI Stylist",
    "generate outfit",
  ],
  ogTitle: "AI Outfit Generator – Instant Ideas | Slidez",
  ogDescription:
    "Describe your style or occasion and generate complete outfit ideas instantly with Slidez AI Stylist.",

  heroEyebrow: "AI Outfit Generator",
  heroH1: "Generate Your Outfit in Seconds",
  heroSubtext:
    "Describe your occasion or style. Slidez AI Stylist creates outfits instantly.",

  // Unused by hub template — required by type
  styleCards:   [],
  whatGoesWith: [],
  popularIdeas: [],
  relatedPages: [],

  faqItems: [
    {
      q: "What should I wear today?",
      a: "Describe the occasion, weather, or vibe in the prompt above — like 'casual Monday at the office' or 'brunch with friends.' Slidez AI Stylist generates a complete outfit in seconds.",
    },
    {
      q: "How does an AI stylist work?",
      a: "Type a short prompt describing your occasion or style preference. Slidez AI reads your description and assembles a full outfit — top, bottom, shoes, and accessories — matched to your request.",
    },
    {
      q: "Can I try outfits before buying?",
      a: "Yes. Slidez includes a virtual try-on feature that lets you see any outfit on your actual photo. Download the app on iOS or Android — free to use.",
    },
  ],
};

/* ── Metadata + page ──────────────────────────────────────────── */

export const metadata: Metadata = generateOutfitPageMetadata(config);

export default function OutfitIdeasPage() {
  const faqSchema     = generateFaqSchema(config.faqItems);
  const breadcrumb    = generateBreadcrumbSchema(config.slug, config.heroH1);
  const webPageSchema = generateWebPageSchema(config);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sharedSoftwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <OutfitIdeasHubTemplate />
    </>
  );
}
