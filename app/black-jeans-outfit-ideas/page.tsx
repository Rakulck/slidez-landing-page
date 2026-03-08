import type { Metadata } from "next";
import OutfitIdeasTemplate from "@/components/templates/OutfitIdeasTemplate";
import {
  createOutfitPageConfig,
  generateOutfitPageMetadata,
  UNSPLASH_BASE as U,
} from "@/lib/outfit-pages";

const config = createOutfitPageConfig("Black Jeans", {
  title: "Black Jeans Outfit Ideas – AI Stylist | Slidez",
  description:
    "What to wear with black jeans? Get instant outfit ideas from the Slidez AI Stylist — casual looks, office styles, date nights, and more, all built around your black jeans.",
  keywords: [
    "black jeans outfit ideas",
    "what to wear with black jeans",
    "black jeans outfits",
    "how to style black jeans",
    "black jeans outfit men",
    "black jeans outfit women",
    "AI stylist",
    "Slidez AI Stylist",
  ],
  ogTitle: "Black Jeans Outfit Ideas – AI Stylist | Slidez",
  ogDescription:
    "What to wear with black jeans? Get instant outfit ideas with the Slidez AI Stylist.",

  heroSubtext:
    "Black jeans go with almost everything — but knowing exactly what to pair them with makes all the difference. Let Slidez AI build the perfect look around your black jeans.",

  styleCards: [
    {
      label: "Black Jeans + White Tee",
      desc: "The most effortless combination in fashion — made better with the right fit, footwear, and one key accessory.",
      img: `${U}1539109136881-3be0616acf4b?w=400&q=85&fit=crop&crop=top`,
      alt: "Black jeans and white tee outfit idea from Slidez AI Stylist",
    },
    {
      label: "Black Jeans for the Office",
      desc: "Smart-casual done right — black jeans paired with a blazer, loafers, or a tucked blouse for a work-appropriate look.",
      img: `${U}1490481651871-ab68de25d43d?w=400&q=85&fit=crop&crop=top`,
      alt: "Black jeans office outfit idea from Slidez AI Stylist",
    },
    {
      label: "Black Jeans Date Night",
      desc: "Dressed-up denim — black jeans elevated with a silk top, heels, or a leather jacket for an evening out.",
      img: `${U}1524504388940-b1c1722653e1?w=400&q=85&fit=crop&crop=top`,
      alt: "Black jeans date night outfit idea from Slidez AI Stylist",
    },
    {
      label: "Smart Weekend Look",
      desc: "Beyond casual — black jeans styled with a knit, Chelsea boots, or a structured coat for an intentional weekend outfit.",
      img: `${U}1483985988355-763728e1935b?w=400&q=85&fit=crop&crop=top`,
      alt: "Smart weekend black jeans outfit idea from Slidez AI Stylist",
    },
  ],

  whatGoesWith: [
    {
      category: "Tops",
      body: "Black jeans are a neutral base — they work with white, grey, cream, bold colors, and prints. Slidez AI matches your top to the occasion, whether that's a fitted tee for weekend or a silk blouse for dinner.",
    },
    {
      category: "Outerwear",
      body: "A leather jacket, structured blazer, or long coat all transform black jeans differently. Slidez considers the silhouette of your outerwear relative to the jeans — slim vs. oversized, cropped vs. long.",
    },
    {
      category: "Shoes",
      body: "Black jeans are versatile enough for white sneakers, boots, loafers, or heels. The shoe choice shifts the whole register of the look. Slidez picks footwear that matches the outfit's vibe, not just the color.",
    },
    {
      category: "Accessories",
      body: "With black jeans, accessories do the heavy lifting on personality. A belt, chain, or bag can shift a simple outfit into something that feels considered. Slidez builds these finishing details into every look.",
    },
  ],

  faqItems: [
    {
      q: "What should I wear with black jeans?",
      a: "Black jeans are one of the most versatile pieces in any wardrobe — they work with white tees, blazers, knitwear, leather jackets, and more. Slidez AI Stylist builds the full outfit around your black jeans based on your occasion.",
    },
    {
      q: "Are black jeans appropriate for work?",
      a: "Yes, in most workplaces — especially paired with a blazer, tailored top, or smart footwear. Slidez AI can suggest office-appropriate black jeans outfits that look polished rather than casual.",
    },
    {
      q: "How do I style black jeans for a date night?",
      a: "Elevate the denim — pair black jeans with a silk or satin top, heeled boots or strappy shoes, and keep accessories minimal but intentional. Slidez builds complete date night looks around black jeans instantly.",
    },
    {
      q: "What shoes go with black jeans?",
      a: "Almost any shoe works with black jeans — white sneakers for casual, ankle boots for everyday, loafers for smart-casual, and heels for evening. Slidez picks the right footwear based on the full look and occasion.",
    },
  ],

  relatedPages: [
    { label: "Outfit Ideas",            href: "/outfit-ideas",            desc: "Browse AI outfit ideas for any style or occasion." },
    { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas", desc: "Romantic looks for any evening out." },
    { label: "Office Outfit Ideas",     href: "/office-outfit-ideas",     desc: "Professional styles for the modern workplace." },
    { label: "What to Wear",            href: "/what-to-wear",            desc: "Not sure where to start? Let AI decide." },
  ],
});

export const metadata: Metadata = generateOutfitPageMetadata(config);

export default function Page() {
  return <OutfitIdeasTemplate config={config} />;
}
