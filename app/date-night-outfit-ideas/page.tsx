import type { Metadata } from "next";
import OutfitIdeasTemplate from "@/components/templates/OutfitIdeasTemplate";
import {
  createOutfitPageConfig,
  generateOutfitPageMetadata,
  UNSPLASH_BASE as U,
} from "@/lib/outfit-pages";

const config = createOutfitPageConfig("Date Night", {
  title: "Date Night Outfit Ideas: AI Date Night Outfit Planner",
  description:
    "Find the perfect date night outfit ideas with an AI outfit planner. Get personalized looks for dinner, movies, and special occasions instantly.",
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

  heroH1:
    "Date Night Outfit Ideas: AI Date Night Outfit Planner",
  heroSubtext:
    "Find the best date night outfit ideas for any plan, from intimate dinners to late night cocktails. Describe your plans and let Slidez AI create your perfect look.",

  styleCards: [
    {
      label: "Restaurant Dinner",
      desc: "Elegant but not overdressed — the sweet spot between effort and ease for a seated dinner date.",
      img: "/outfits/restaurant-dinner.jpeg",
      alt: "Restaurant dinner date night outfit idea from Slidez AI Stylist",
    },
    {
      label: "Cocktail Bar",
      desc: "Polished, confident, and just the right amount of dressed up for drinks and conversation.",
      img: "/outfits/cocktail-bar.jpeg",
      alt: "Cocktail bar date night outfit from Slidez AI Stylist",
    },
    {
      label: "Night Out Dancing",
      desc: "Outfits that move with you — fun, flirty, and ready for whatever the night turns into.",
      img: "/outfits/nightout-dancing.jpeg",
      alt: "Night out dancing date outfit from Slidez AI Stylist",
    },
    {
      label: "Rooftop or Outdoor Evening",
      desc: "Date night under the sky — layered, stylish, and ready for cooler air without losing the look.",
      img: "/outfits/rooftop-outfit.jpeg",
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
      q: "What are the best date night outfit ideas for different occasions?",
      a: "The best date night outfit ideas depend on your plans. For dinner dates, go for classy and elegant looks, while casual dates call for relaxed yet stylish outfits. Choosing outfits based on the setting helps you feel confident and comfortable.",
    },
    {
      q: "How can I choose the perfect date night outfit?",
      a: "To choose the perfect date night outfit, consider the location, time, and your personal style. Many people use AI date night outfit planners to get outfit ideas that match their vibe and make styling easier.",
    },
    {
      q: "Can I use AI to get date night outfit ideas?",
      a: "Yes, an AI outfit planner can generate date night outfit ideas instantly. By describing your plans and preferences, you can get personalized outfit suggestions tailored to your style and occasion.",
    },
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
      q: "What should I wear on a first date night?",
      a: "For a first date night, choose outfit ideas that are simple, comfortable, and stylish. Clean, well-fitted clothes that reflect your personality usually work best and help you make a great first impression.",
    },
    {
      q: "Can I try date night outfits on with Slidez before buying?",
      a: "Yes. Slidez includes a virtual try-on feature so you can see exactly how a date night outfit looks on you before committing to it. Download the app on iOS or Android.",
    },
  ],

  relatedPages: [
    { label: "Outfit Ideas",        href: "/outfit-ideas",        desc: "Browse AI outfit ideas for any style or occasion.", img: "/outfits/rooftop-outfit.jpeg" },
    { label: "Winter Outfit Ideas", href: "/winter-outfit-ideas", desc: "Cozy layered looks for cold-weather dates.",        img: "/outfits/winter-look.jpeg" },
    { label: "Office Outfit Ideas", href: "/office-outfit-ideas", desc: "Professional styles for the modern workplace.",     img: "/outfits/winter-office.jpeg" },
    { label: "What to Wear",        href: "/what-to-wear",        desc: "Not sure where to start? Let AI decide.",           img: "/outfits/oversized-white-tee.jpeg" },
  ],
});

export const metadata: Metadata = generateOutfitPageMetadata(config);

export default function Page() {
  return <OutfitIdeasTemplate config={config} />;
}
