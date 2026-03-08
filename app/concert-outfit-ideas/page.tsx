import type { Metadata } from "next";
import OutfitIdeasTemplate from "@/components/templates/OutfitIdeasTemplate";
import {
  createOutfitPageConfig,
  generateOutfitPageMetadata,
  UNSPLASH_BASE as U,
} from "@/lib/outfit-pages";

const config = createOutfitPageConfig("Concert", {
  title: "Concert Outfit Ideas – AI Stylist | Slidez",
  description:
    "What to wear to a concert? Get instant concert outfit ideas from the Slidez AI Stylist — from rock shows and festivals to intimate venues and pop nights.",
  keywords: [
    "concert outfit ideas",
    "what to wear to a concert",
    "festival outfit ideas",
    "music festival outfits",
    "concert outfits",
    "what to wear to a festival",
    "AI stylist",
    "Slidez AI Stylist",
  ],
  ogTitle: "Concert Outfit Ideas – AI Stylist | Slidez",
  ogDescription:
    "What to wear to a concert? Get instant concert and festival outfit ideas with the Slidez AI Stylist.",

  heroSubtext:
    "Dress to impress — without forgetting you'll be dancing, standing, or in a crowd. Describe your show and Slidez AI builds a concert-ready outfit that fits your music and your vibe.",

  styleCards: [
    {
      label: "Rock or Indie Show",
      desc: "Dark denim, leather, and boots — the kind of outfit that looks like you belong in the front row.",
      img: `${U}1539109136881-3be0616acf4b?w=400&q=85&fit=crop&crop=top`,
      alt: "Rock concert outfit idea from Slidez AI Stylist",
    },
    {
      label: "Outdoor Festival",
      desc: "Fun, layered, and practical — festival style that can handle the elements without losing its edge.",
      img: `${U}1483985988355-763728e1935b?w=400&q=85&fit=crop&crop=top`,
      alt: "Outdoor music festival outfit idea from Slidez AI Stylist",
    },
    {
      label: "Pop or R&B Night",
      desc: "Bold, expressive, and made for the moment — the kind of outfit that goes viral in a crowd photo.",
      img: `${U}1524504388940-b1c1722653e1?w=400&q=85&fit=crop&crop=top`,
      alt: "Pop concert outfit idea from Slidez AI Stylist",
    },
    {
      label: "Intimate Venue",
      desc: "Smaller stage, closer crowd — a considered look that feels effortless and personal, not overdressed.",
      img: `${U}1490481651871-ab68de25d43d?w=400&q=85&fit=crop&crop=top`,
      alt: "Intimate venue concert outfit idea from Slidez AI Stylist",
    },
  ],

  whatGoesWith: [
    {
      category: "Tops",
      body: "Concert tops need personality — a graphic tee, a mesh layer, or a cropped jacket all work depending on the vibe. Slidez AI matches your top to the genre, venue, and the rest of the outfit.",
    },
    {
      category: "Bottoms",
      body: "Comfort matters at a concert — you're standing, dancing, and moving all night. Slidez suggests bottoms that look great and move with you: jeans, mini skirts, or wide-leg trousers depending on the show.",
    },
    {
      category: "Shoes",
      body: "Concert footwear is a real consideration — heels on a festival field or clean sneakers at a black-box venue both miss the mark. Slidez picks shoes that match the venue as much as the outfit.",
    },
    {
      category: "Accessories",
      body: "Crossbody bags, layered chains, and statement earrings work concert crowds — hands-free, expressive, and nothing that gets in the way. Slidez builds accessories into the look from the start.",
    },
  ],

  faqItems: [
    {
      q: "What should I wear to a concert?",
      a: "It depends on the genre, venue, and whether you'll be standing or seated. Tell the Slidez AI Stylist the type of show and it builds a complete concert-ready outfit — top, bottom, shoes, and accessories.",
    },
    {
      q: "What shoes are best for concerts?",
      a: "Comfort and practicality matter — you're usually standing for hours. Chunky boots, platform sneakers, and clean trainers are reliable picks. Slidez AI matches footwear to both the outfit and the venue.",
    },
    {
      q: "How do I dress for an outdoor music festival?",
      a: "Layer for changing weather, choose practical footwear for uneven ground, and lean into expressive, personal style. Slidez AI builds festival outfits with all of that in mind — fun, functional, and photogenic.",
    },
    {
      q: "Can I try concert outfits on with Slidez before the show?",
      a: "Yes. Slidez includes a virtual try-on feature so you can see how your concert outfit looks on you before the night. Download the app on iOS or Android.",
    },
  ],

  relatedPages: [
    { label: "Outfit Ideas",            href: "/outfit-ideas",            desc: "Browse AI outfit ideas for any occasion." },
    { label: "Date Night Outfit Ideas", href: "/date-night-outfit-ideas", desc: "Romantic evening looks for any occasion." },
    { label: "What to Wear",            href: "/what-to-wear",            desc: "Not sure where to start? Let AI decide." },
    { label: "Winter Outfit Ideas",     href: "/winter-outfit-ideas",     desc: "Layered looks for cold-weather shows and festivals." },
  ],
});

export const metadata: Metadata = generateOutfitPageMetadata(config);

export default function Page() {
  return <OutfitIdeasTemplate config={config} />;
}
