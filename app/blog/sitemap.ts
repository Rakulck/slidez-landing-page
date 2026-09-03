import { MetadataRoute } from "next";

const CANONICAL = "https://www.slidez.social";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const blogRoutes = [
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog/capsule-wardrobe-ai-styling-tools", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/ai-fashion-stylist-benefits", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-ai-stylist-apps", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-virtual-closet-apps", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-outfit-planner-apps", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/what-is-ai-fashion-stylist", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/ai-stylist-vs-human-stylist", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/virtual-try-on-vs-online-shopping", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/how-ai-outfit-generators-work", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/body-type-calculator", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/clothing-styles-for-body-types", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/how-to-stop-buying-clothes-you-never-wear", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/how-to-choose-clothes-personal-style", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/ai-outfit-ideas-every-occasion", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/digital-wardrobe-vs-traditional-closet", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/how-ai-helps-find-clothes-that-suit-you", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/complete-guide-smart-digital-wardrobe", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/how-ai-personalizes-online-fashion-shopping", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/what-is-a-virtual-wardrobe", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/algorithmic-fashion-recommendation-systems", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/best-outfit-planner-apps-2026", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/ai-outfit-recommendations", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/what-to-wear-every-occasion-ai-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/how-to-dress-better-without-trends", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return blogRoutes.map((route) => ({
    url: `${CANONICAL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
