import Link from "next/link";

const PRODUCT_LINKS = [
  {
    href: "/ai-stylist",
    title: "What Is an AI Stylist?",
    description: "Learn how AI styling works and get personalized outfit recommendations for any occasion.",
  },
  {
    href: "/ai-virtual-try-on",
    title: "AI Virtual Try-On",
    description: "See how clothes look on your body before you buy — free on iOS and Android.",
  },
  {
    href: "/outfit-ideas",
    title: "AI Outfit Generator",
    description: "Generate complete outfit ideas instantly based on your style, mood, or occasion.",
  },
  {
    href: "/try-on-from-anywhere",
    title: "Try On From Anywhere",
    description: "Import items from Instagram or any shopping site and try them on virtually.",
  },
];

export default function BlogProductLinks() {
  return (
    <div className="mt-16 pt-12 border-t border-black/10">
      <h2 className="text-2xl font-bold text-black mb-8 tracking-tight">Explore Slidez</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {PRODUCT_LINKS.map(({ href, title, description }) => (
          <Link key={href} href={href} className="group block">
            <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5 group-hover:border-black/20 group-hover:bg-white transition-all duration-300">
              <h3 className="font-bold text-black mb-2 group-hover:underline">{title}</h3>
              <p className="text-sm text-black/60 line-clamp-2">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
