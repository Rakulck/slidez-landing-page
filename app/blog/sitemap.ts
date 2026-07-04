import { MetadataRoute } from "next";

const CANONICAL = "https://www.slidez.social";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const blogRoutes = [
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog/ai-fashion-stylist-benefits", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-ai-stylist-apps", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-ai-stylist-apps-2026", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-virtual-closet-apps", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-virtual-closet-apps-2026", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/best-outfit-planner-apps-2026", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/what-is-ai-fashion-stylist", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/ai-stylist-vs-human-stylist", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/virtual-try-on-vs-online-shopping", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/how-ai-outfit-generators-work", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/body-type-calculator", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/clothing-styles-for-body-types", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog/how-to-stop-buying-clothes-you-never-wear", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return blogRoutes.map((route) => ({
    url: `${CANONICAL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
