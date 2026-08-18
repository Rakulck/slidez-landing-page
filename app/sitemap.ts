import { MetadataRoute } from "next";

const CANONICAL = "https://www.slidez.social";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },

    // Core feature pages
    { path: "/ai-stylist", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/ai-fashion-stylist", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ai-outfit-generator", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ai-clothes-recommender", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/free-ai-stylist-app", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ai-virtual-try-on", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/try-on-from-anywhere", priority: 0.8, changeFrequency: "monthly" as const },

    // Outfit hub pages
    { path: "/outfit-ideas", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/what-to-wear", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/date-night-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/winter-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/concert-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/office-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/black-jeans-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/casual-coffee-date-outfit", priority: 0.8, changeFrequency: "monthly" as const },

    // Legal
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/brands-privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: route.path === "" ? `${CANONICAL}/` : `${CANONICAL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
