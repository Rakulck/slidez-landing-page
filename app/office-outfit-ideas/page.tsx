import type { Metadata } from "next";
import OutfitIdeasTemplate from "@/components/templates/OutfitIdeasTemplate";
import {
  createOutfitPageConfig,
  generateOutfitPageMetadata,
  UNSPLASH_BASE as U,
} from "@/lib/outfit-pages";

const config = createOutfitPageConfig("Office", {
  title: "Office Outfit Ideas – AI Stylist | Slidez",
  description:
    "Look polished at work without overthinking it. Get instant office outfit ideas from the Slidez AI Stylist — business casual, corporate formal, and creative workplace looks.",
  keywords: [
    "office outfit ideas",
    "work outfit ideas",
    "business casual outfits",
    "what to wear to work",
    "professional outfit ideas",
    "office fashion",
    "AI stylist",
    "Slidez AI Stylist",
  ],
  ogTitle: "Office Outfit Ideas – AI Stylist | Slidez",
  ogDescription:
    "Look polished at work without overthinking it. Get instant office outfit ideas with the Slidez AI Stylist.",

  heroSubtext:
    "Look polished at work without overthinking it. Describe your workplace and Slidez AI generates complete office outfits — from business casual to full corporate — that feel modern and intentional.",

  styleCards: [
    {
      label: "Business Casual",
      desc: "Relaxed but polished — tailored trousers, knits, and loafers that look considered without being stiff.",
      img: `${U}1490481651871-ab68de25d43d?w=400&q=85&fit=crop&crop=top`,
      alt: "Business casual office outfit idea from Slidez AI Stylist",
    },
    {
      label: "Corporate Formal",
      desc: "Sharp, structured, and serious — suits, blazers, and classic footwear for boardrooms and client-facing days.",
      img: `${U}1483985988355-763728e1935b?w=400&q=85&fit=crop&crop=top`,
      alt: "Corporate formal office outfit idea from Slidez AI Stylist",
    },
    {
      label: "Creative Office",
      desc: "Fashion-forward workwear for studios, agencies, and startups — personality-first, still pulled-together.",
      img: `${U}1524504388940-b1c1722653e1?w=400&q=85&fit=crop&crop=top`,
      alt: "Creative office outfit idea from Slidez AI Stylist",
    },
    {
      label: "Smart Casual Friday",
      desc: "The dressed-down version that still looks intentional — jeans done right, with the rest of the outfit doing the heavy lifting.",
      img: `${U}1539109136881-3be0616acf4b?w=400&q=85&fit=crop&crop=top`,
      alt: "Smart casual Friday office outfit from Slidez AI Stylist",
    },
  ],

  whatGoesWith: [
    {
      category: "Tops",
      body: "A good office top is versatile — a fitted button-down, silk blouse, or structured knit all work depending on the dress code. Slidez AI matches your top to the workplace vibe, pairing it with the right bottom and shoes.",
    },
    {
      category: "Bottoms",
      body: "Tailored trousers, midi skirts, and dark straight-leg jeans all have a place in the office wardrobe. Slidez considers the full silhouette — what works business casual in one company may be underdressed in another.",
    },
    {
      category: "Shoes",
      body: "Office footwear shapes how professional you read in a room. Loafers, block heels, Chelsea boots, and clean leather trainers are all viable — Slidez picks what fits the outfit and the workplace.",
    },
    {
      category: "Outerwear & Layers",
      body: "A blazer is the easiest way to elevate any office look. Slidez suggests layering pieces — structured coats, longline cardigans, and tailored jackets — that work from commute to conference room.",
    },
  ],

  faqItems: [
    {
      q: "What should I wear to the office?",
      a: "It depends on your workplace dress code — business casual, corporate formal, or creative. Tell the Slidez AI Stylist your environment and it generates a complete, appropriate office outfit in seconds.",
    },
    {
      q: "What counts as business casual in 2025?",
      a: "Business casual today typically means tailored trousers or dark jeans, a smart top or knit, and clean footwear like loafers or low heels. Slidez AI builds business casual outfits that feel modern, not dated.",
    },
    {
      q: "How can I look professional without wearing a suit every day?",
      a: "The key is in the details — a well-fitted knit, tailored trousers, and the right shoes can look just as polished as a suit. Slidez AI Stylist finds those combinations for your specific workplace and style.",
    },
    {
      q: "Can I try office outfits on with Slidez before buying?",
      a: "Yes. Slidez includes a virtual try-on feature so you can see exactly how an office outfit looks on you before committing to a purchase. Download the app on iOS or Android.",
    },
  ],

  relatedPages: [
    { label: "Outfit Ideas",            href: "/outfit-ideas",            desc: "Browse AI outfit ideas for any style or occasion." },
    { label: "Black Jeans Outfit Ideas", href: "/black-jeans-outfit-ideas", desc: "How to make black jeans work-appropriate." },
    { label: "What to Wear",            href: "/what-to-wear",            desc: "Not sure where to start? Let AI decide." },
    { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas",     desc: "Stay warm and professional through winter." },
  ],
});

export const metadata: Metadata = generateOutfitPageMetadata(config);

export default function Page() {
  return <OutfitIdeasTemplate config={config} />;
}
