import type { Metadata } from "next";
import OutfitIdeasTemplate from "@/components/templates/OutfitIdeasTemplate";
import {
  createOutfitPageConfig,
  generateOutfitPageMetadata,
  UNSPLASH_BASE as U,
} from "@/lib/outfit-pages";

const config = createOutfitPageConfig("Date Night", {
  title: "Date Night Outfit Ideas – AI Stylist | Slidez",
  description:
    "Not sure what to wear on a date? Get instant date night outfit ideas from the Slidez AI Stylist — from dinner looks to late-night cocktail outfits.",
  keywords: [
    "date night outfit ideas",
    "what to wear on a date",
    "date night outfits",
    "romantic outfit ideas",
    "dinner date outfit",
    "what to wear tonight",
    "AI stylist",
    "Slidez AI Stylist",
  ],
  ogTitle: "Date Night Outfit Ideas – AI Stylist | Slidez",
  ogDescription:
    "Get instant date night outfit ideas with the Slidez AI Stylist. From dinner looks to cocktail outfits.",

  heroSubtext:
    "Find the perfect date night outfit — from intimate dinners to late-night cocktails. Describe your plans and let Slidez AI build the full look.",

  styleCards: [
    {
      label: "Restaurant Dinner",
      desc: "Elegant but not overdressed — the sweet spot between effort and ease for a seated dinner date.",
      img: `${U}1524504388940-b1c1722653e1?w=400&q=85&fit=crop&crop=top`,
      alt: "Restaurant dinner date night outfit idea from Slidez AI Stylist",
    },
    {
      label: "Cocktail Bar",
      desc: "Polished, confident, and just the right amount of dressed up for drinks and conversation.",
      img: `${U}1483985988355-763728e1935b?w=400&q=85&fit=crop&crop=top`,
      alt: "Cocktail bar date night outfit from Slidez AI Stylist",
    },
    {
      label: "Night Out Dancing",
      desc: "Outfits that move with you — fun, flirty, and ready for whatever the night turns into.",
      img: `${U}1490481651871-ab68de25d43d?w=400&q=85&fit=crop&crop=top`,
      alt: "Night out dancing date outfit from Slidez AI Stylist",
    },
    {
      label: "Rooftop or Outdoor Evening",
      desc: "Date night under the sky — layered, stylish, and ready for cooler air without losing the look.",
      img: `${U}1539109136881-3be0616acf4b?w=400&q=85&fit=crop&crop=top`,
      alt: "Rooftop evening date night outfit from Slidez AI Stylist",
    },
  ],

  whatGoesWith: [
    {
      category: "Tops",
      body: "For date night, your top sets the tone — a fitted cami, satin blouse, or backless top signals the occasion without trying too hard. Slidez AI matches it to the right bottom and shoes for the venue.",
    },
    {
      category: "Bottoms",
      body: "A slip skirt, tailored trousers, or dark straight jeans all work for date night — the difference is in how the pieces pair together. Slidez AI considers the full silhouette, not just individual items.",
    },
    {
      category: "Shoes",
      body: "Heels elevate any date night look, but a sleek flat or block-heeled boot can be just as intentional. Slidez picks footwear that fits the venue — dinner, drinks, or dancing.",
    },
    {
      category: "Accessories",
      body: "Date night accessories should feel effortless — a simple chain, small bag, or one statement earring. Slidez AI keeps the look polished without overloading it.",
    },
  ],

  faqItems: [
    {
      q: "What should I wear on a date night?",
      a: "The best date night outfit matches the venue and feels like you — confident and comfortable. Tell the Slidez AI Stylist where you're going and it'll suggest a complete look: top, bottom, shoes, and accessories.",
    },
    {
      q: "What colors work best for date night outfits?",
      a: "Black, deep burgundy, navy, and rich jewel tones are classic date night choices. But the right color depends on your skin tone and personal style. Slidez AI builds outfits with color and contrast in mind.",
    },
    {
      q: "What shoes should I wear on a date night?",
      a: "It depends on the vibe — strappy heels for dinner, sleek ankle boots for a bar, block heels for a long night out. Slidez suggests footwear that fits the occasion and matches the rest of your look.",
    },
    {
      q: "Can I try date night outfits on with Slidez before buying?",
      a: "Yes. Slidez includes a virtual try-on feature so you can see exactly how a date night outfit looks on you before committing to it. Download the app on iOS or Android.",
    },
  ],

  relatedPages: [
    { label: "Outfit Ideas",        href: "/outfit-ideas",        desc: "Browse AI outfit ideas for any style or occasion." },
    { label: "Winter Outfit Ideas", href: "/winter-outfit-ideas", desc: "Cozy layered looks for cold-weather dates." },
    { label: "Office Outfit Ideas", href: "/office-outfit-ideas", desc: "Professional styles for the modern workplace." },
    { label: "What to Wear",        href: "/what-to-wear",        desc: "Not sure where to start? Let AI decide." },
  ],
});

export const metadata: Metadata = generateOutfitPageMetadata(config);

export default function Page() {
  return <OutfitIdeasTemplate config={config} />;
}
