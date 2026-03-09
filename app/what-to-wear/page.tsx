import type { Metadata } from "next";
import WhatToWearTemplate from "@/components/templates/WhatToWearTemplate";

export const metadata: Metadata = {
  title: "What Should You Wear? – Outfit Ideas for Any Occasion | Slidez",
  description:
    "Not sure what to wear? Explore outfit ideas for any occasion — date night, office, casual, party, beach, and more. Create a look that fits your style with Slidez.",
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
  openGraph: {
    title: "What Should You Wear? – Outfit Ideas for Any Occasion | Slidez",
    description:
      "Find outfit ideas for any occasion and create a look that fits your style with Slidez.",
  },
};

export default function Page() {
  return <WhatToWearTemplate />;
}
