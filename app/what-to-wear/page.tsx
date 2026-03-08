import type { Metadata } from "next";
import OutfitIdeasTemplate from "@/components/templates/OutfitIdeasTemplate";
import {
  createOutfitPageConfig,
  generateOutfitPageMetadata,
  UNSPLASH_BASE as U,
} from "@/lib/outfit-pages";

const config = createOutfitPageConfig("What to Wear", {
  slug: "what-to-wear",

  title: "What Should I Wear? – AI Stylist | Slidez",
  description:
    "Not sure what to wear? Describe your mood, occasion, or style and get instant outfit ideas with the Slidez AI Stylist.",
  keywords: [
    "what to wear",
    "what should I wear",
    "what to wear today",
    "what to wear tonight",
    "outfit ideas",
    "AI stylist",
    "what should I wear today",
    "Slidez AI Stylist",
  ],
  ogTitle: "What Should I Wear? – AI Stylist | Slidez",
  ogDescription:
    "Not sure what to wear? Get instant outfit ideas with the Slidez AI Stylist.",

  heroH1: "What Should I Wear?",
  heroSubtext:
    "Describe your mood, occasion, or style and get instant outfit ideas with the Slidez AI Stylist.",

  styleCards: [
    {
      label: "Casual Day Out",
      desc: "Relaxed, put-together looks for errands, coffee runs, and easy weekend moments.",
      img: `${U}1539109136881-3be0616acf4b?w=400&q=85&fit=crop&crop=top`,
      alt: "Casual day out outfit idea from Slidez AI Stylist",
    },
    {
      label: "Office Ready",
      desc: "Sharp, modern workwear that looks intentional without feeling stiff or overdone.",
      img: `${U}1490481651871-ab68de25d43d?w=400&q=85&fit=crop&crop=top`,
      alt: "Office ready outfit idea from Slidez AI Stylist",
    },
    {
      label: "Dinner Date",
      desc: "Effortlessly romantic looks for dinners, cocktails, or any evening that calls for something special.",
      img: `${U}1524504388940-b1c1722653e1?w=400&q=85&fit=crop&crop=top`,
      alt: "Dinner date outfit idea from Slidez AI Stylist",
    },
    {
      label: "Weekend Brunch",
      desc: "The sweet spot between casual and polished — looks great in photos and feels even better in person.",
      img: `${U}1483985988355-763728e1935b?w=400&q=85&fit=crop&crop=top`,
      alt: "Weekend brunch outfit idea from Slidez AI Stylist",
    },
  ],

  whatGoesWith: [
    {
      category: "Tops",
      body: "Not sure what to wear on top? Slidez AI matches your starting point — a tee, blouse, or knit — to bottoms, shoes, and accessories that make the full look feel considered.",
    },
    {
      category: "Bottoms",
      body: "Whether you're building around jeans, trousers, or a skirt, Slidez figures out what goes with it — balancing silhouette, fabric, and occasion so nothing clashes.",
    },
    {
      category: "Shoes",
      body: "The right shoe changes everything. Slidez picks footwear that fits the outfit's energy — sneakers for casual, heels for evening, loafers for work. The look lands when the shoes are right.",
    },
    {
      category: "Accessories",
      body: "Jewelry, bags, and layers are chosen to finish the look — not overwhelm it. Slidez keeps accessories intentional so the outfit feels complete without trying too hard.",
    },
  ],

  faqItems: [
    {
      q: "What should I wear today?",
      a: "Start by thinking about your plans — a casual day out, work, a dinner, or something else. Then tell the Slidez AI Stylist your occasion or vibe and it will generate a complete outfit instantly. No more standing in front of your wardrobe wondering.",
    },
    {
      q: "How does an AI stylist help me decide what to wear?",
      a: "The Slidez AI Stylist takes your input — an occasion, a mood, or a piece you already own — and builds a full outfit around it. It considers proportion, color, and vibe to suggest tops, bottoms, shoes, and accessories that work together.",
    },
    {
      q: "Can I get outfit ideas for specific occasions?",
      a: "Yes. Slidez works for any occasion — casual, office, date night, brunch, parties, vacations, and more. Just tell the AI what you need and it builds the full look in seconds.",
    },
    {
      q: "Can I try the outfit on with Slidez?",
      a: "Yes. Slidez includes a virtual try-on feature so you can see exactly how any outfit looks on you before buying. Download the app on iOS or Android to access the full try-on experience.",
    },
  ],

  popularIdeas: [
    { label: "Date Night Outfit Ideas",        href: "/date-night-outfit-ideas"        },
    { label: "Office Outfit Ideas",            href: "/office-outfit-ideas"            },
    { label: "Winter Outfit Ideas",            href: "/winter-outfit-ideas"            },
    { label: "Concert Outfit Ideas",           href: "/concert-outfit-ideas"           },
    { label: "Black Jeans Outfit Ideas",       href: "/black-jeans-outfit-ideas"       },
    { label: "Casual Coffee Date Outfit",      href: "/casual-coffee-date-outfit"      },
    { label: "Office Outfit Ideas for Women",  href: "/office-outfit-ideas-for-women"  },
    { label: "Office Outfit Ideas for Men",    href: "/office-outfit-ideas-for-men"    },
    { label: "Party Night Outfit Ideas",       href: "/party-night-outfit-ideas"       },
    { label: "Vacation Outfit Ideas",          href: "/vacation-outfit-ideas"          },
  ],

  relatedPages: [
    { label: "Outfit Ideas",            href: "/outfit-ideas",            desc: "Browse AI outfit ideas for any style or occasion." },
    { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas", desc: "Romantic looks for any evening out." },
    { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas",     desc: "Cozy layered looks for the colder months." },
    { label: "Office Outfit Ideas",     href: "/office-outfit-ideas",     desc: "Professional styles for the modern workplace." },
  ],
});

export const metadata: Metadata = generateOutfitPageMetadata(config);

export default function Page() {
  return <OutfitIdeasTemplate config={config} />;
}
