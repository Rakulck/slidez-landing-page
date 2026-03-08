import type { Metadata } from "next";
import OutfitIdeasTemplate from "@/components/templates/OutfitIdeasTemplate";
import {
  createOutfitPageConfig,
  generateOutfitPageMetadata,
  UNSPLASH_BASE as U,
} from "@/lib/outfit-pages";

const config = createOutfitPageConfig("Winter", {
  title: "Winter Outfit Ideas – AI Stylist | Slidez",
  description:
    "Stay warm without losing style. Get instant winter outfit ideas from the Slidez AI Stylist — layered looks for cold weather, work, weekends, and everything in between.",
  keywords: [
    "winter outfit ideas",
    "winter outfits",
    "cold weather outfit ideas",
    "what to wear in winter",
    "layered winter looks",
    "cozy winter style",
    "AI stylist",
    "Slidez AI Stylist",
  ],
  ogTitle: "Winter Outfit Ideas – AI Stylist | Slidez",
  ogDescription:
    "Stay warm without losing style. Get instant winter outfit ideas with the Slidez AI Stylist.",

  heroSubtext:
    "Stay warm without losing style. Describe your plans and Slidez AI builds cold-weather looks with layers that actually work — coats, knits, boots, and everything in between.",

  styleCards: [
    {
      label: "Cozy Weekend",
      desc: "Warm, relaxed layers for errands and lazy weekends — comfort-first without looking like you gave up.",
      img: `${U}1483985988355-763728e1935b?w=400&q=85&fit=crop&crop=top`,
      alt: "Cozy winter weekend outfit idea from Slidez AI Stylist",
    },
    {
      label: "Winter Office Look",
      desc: "Polished cold-weather workwear — structured coats, turtlenecks, and tailored layers that still mean business.",
      img: `${U}1490481651871-ab68de25d43d?w=400&q=85&fit=crop&crop=top`,
      alt: "Winter office outfit idea from Slidez AI Stylist",
    },
    {
      label: "Winter Date Night",
      desc: "Romantic and warm — long coats, velvet, and boots that make a cold night feel like an occasion.",
      img: `${U}1524504388940-b1c1722653e1?w=400&q=85&fit=crop&crop=top`,
      alt: "Winter date night outfit idea from Slidez AI Stylist",
    },
    {
      label: "Snow Day Casual",
      desc: "Practical and still stylish — puffer coats, chunky knits, and warm boots that look like a choice, not an emergency.",
      img: `${U}1539109136881-3be0616acf4b?w=400&q=85&fit=crop&crop=top`,
      alt: "Snow day casual winter outfit from Slidez AI Stylist",
    },
  ],

  whatGoesWith: [
    {
      category: "Coats & Outerwear",
      body: "Your coat is the first thing people see in winter — it sets the entire tone. Slidez AI matches your outerwear to what's underneath, building a layered look with consistent silhouette and proportion.",
    },
    {
      category: "Knits & Layers",
      body: "Turtlenecks, chunky cardigans, and longline knits are the backbone of a winter wardrobe. Slidez suggests exactly which layer goes where without making the outfit feel bulky or overdone.",
    },
    {
      category: "Boots",
      body: "Winter footwear does heavy lifting — Chelsea boots, knee-highs, and lug-sole styles anchor the look while keeping you warm. Slidez picks boots that match both the outfit and the temperature.",
    },
    {
      category: "Accessories",
      body: "Scarves, beanies, and gloves can elevate or break a winter look. Slidez AI chooses cold-weather accessories that feel intentional — adding warmth without cluttering the outfit.",
    },
  ],

  faqItems: [
    {
      q: "What should I wear in winter to stay warm but look stylish?",
      a: "Layering is the key — start with a base layer, add a knit or sweatshirt, and finish with a structured coat. Slidez AI Stylist builds complete winter outfits with layering in mind, so you stay warm and look put-together.",
    },
    {
      q: "How do I layer winter outfits without looking bulky?",
      a: "The trick is to vary the weights and fits — a slim turtleneck under a relaxed coat looks balanced, while two oversized layers don't. Slidez considers proportion across every layer it suggests.",
    },
    {
      q: "What are the best winter outfit ideas for different occasions?",
      a: "Winter dressing varies a lot by occasion — a cozy weekend look is very different from a winter office outfit or a date night. Tell the Slidez AI Stylist your plans and it builds the right layered look for each one.",
    },
    {
      q: "Can I try winter outfits on with Slidez before buying?",
      a: "Yes. Slidez includes a virtual try-on feature so you can see exactly how a winter outfit looks on you before buying anything. Download the app on iOS or Android.",
    },
  ],

  relatedPages: [
    { label: "Outfit Ideas",            href: "/outfit-ideas",            desc: "Browse AI outfit ideas for any style or occasion." },
    { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas", desc: "Romantic evening looks, even in cold weather." },
    { label: "Office Outfit Ideas",     href: "/office-outfit-ideas",     desc: "Professional winter styles for the modern workplace." },
    { label: "What to Wear",            href: "/what-to-wear",            desc: "Not sure where to start? Let AI decide." },
  ],
});

export const metadata: Metadata = generateOutfitPageMetadata(config);

export default function Page() {
  return <OutfitIdeasTemplate config={config} />;
}
