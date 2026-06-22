import type { Metadata } from "next";
import AiStylistTemplate from "@/components/templates/AiStylistTemplate";
import { CANONICAL_BASE, ASSETS_BASE_URL } from "@/lib/outfit-pages";

/* ── Metadata ─────────────────────────────────────────────────── */

const TITLE       = "What Is an AI Stylist? How AI Fashion Styling Works";
const DESCRIPTION = "An AI stylist generates personalized outfit recommendations based on your occasion, vibe, and style. Learn how it works and try Slidez free on iOS and Android.";
const CANONICAL   = `${CANONICAL_BASE}/ai-stylist`;
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI stylist",
    "what is an AI stylist",
    "how does AI styling work",
    "AI fashion stylist",
    "outfit generator",
    "AI outfit recommendations",
    "personal stylist app",
    "Slidez AI stylist",
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
  name: "How to Use an AI Stylist",
  description: "How to get personalized outfit recommendations from an AI stylist app.",
  step: [
    { "@type": "HowToStep", position: 1, name: "Describe your occasion or vibe", text: "Tell the AI what you need — a date night, work meeting, concert, or just a casual day. The more specific, the better the result." },
    { "@type": "HowToStep", position: 2, name: "AI generates a complete outfit", text: "The AI builds a full look: top, bottom, shoes, and accessories — all matched for colour, proportion, and the occasion." },
    { "@type": "HowToStep", position: 3, name: "Browse and refine", text: "Review the outfit suggestions. Ask for alternatives, adjust the vibe, or swap individual pieces." },
    { "@type": "HowToStep", position: 4, name: "Try it on virtually", text: "Use Slidez virtual try-on to see exactly how the outfit looks on your own photo before buying anything." },
    { "@type": "HowToStep", position: 5, name: "Shop with confidence", text: "Buy the pieces you love, knowing the outfit works together and looks right on you." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI stylist?",
      acceptedAnswer: { "@type": "Answer", text: "An AI stylist is software that generates personalized outfit recommendations based on your occasion, preferences, and style goals. You describe what you need — a vibe, event, or specific item — and the AI builds a complete look: top, bottom, shoes, and accessories, all matched together." },
    },
    {
      "@type": "Question",
      name: "How does an AI stylist work?",
      acceptedAnswer: { "@type": "Answer", text: "AI stylists use machine learning to understand fashion combinations, colour theory, and occasion-appropriate dressing. You input a prompt describing your need, and the model generates outfit suggestions by matching pieces that work together in terms of style, colour, and proportion." },
    },
    {
      "@type": "Question",
      name: "Is an AI stylist better than a personal stylist?",
      acceptedAnswer: { "@type": "Answer", text: "AI stylists are faster, always available, and free — making them practical for everyday outfit decisions. Personal stylists offer deeper human insight, especially for major events or wardrobe overhauls. For daily styling and outfit ideas, an AI stylist like Slidez is more than sufficient." },
    },
    {
      "@type": "Question",
      name: "Is Slidez AI stylist free?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez is free to download on iOS and Android. Generate outfit ideas, get AI styling recommendations, and use virtual try-on at no cost." },
    },
    {
      "@type": "Question",
      name: "Can an AI stylist suggest outfits for specific occasions?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Slidez AI Stylist is designed for occasion-specific styling. Describe your event — date night, office meeting, concert, wedding guest — and it generates outfits suited to that context, dress code, and vibe." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_BASE },
    { "@type": "ListItem", position: 2, name: "What Is an AI Stylist?", item: CANONICAL },
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

/* ── Page ─────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <AiStylistTemplate />
    </>
  );
}
