import type { Metadata } from "next";
import OutfitIdeasTemplate from "@/components/templates/OutfitIdeasTemplate";
import { createOutfitPageConfig, generateOutfitPageMetadata } from "@/lib/outfit-pages";

const config = createOutfitPageConfig("Casual Coffee Date", {
  slug: "casual-coffee-date-outfit",
});

export const metadata: Metadata = generateOutfitPageMetadata(config);
export default function Page() {
  return <OutfitIdeasTemplate config={config} />;
}
