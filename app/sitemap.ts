import { MetadataRoute } from "next";

const CANONICAL = "https://www.slidez.social";

export default function sitemap(): MetadataRoute.Sitemap {
  // Using current date so it automatically updates when generated/built
  const currentDate = new Date();

  // Define live, active routes only (no redirects or 404s)
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    
    // Core Features & Hubs
    { path: "/ai-stylist", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/outfit-ideas", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/what-to-wear", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/ai-virtual-try-on", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/try-on-from-anywhere", priority: 0.8, changeFrequency: "monthly" as const },

    // Blog URLs are owned by the dedicated /blog/sitemap.xml (app/blog/sitemap.ts)
    // to avoid duplicate entries across sitemaps.

    // Specific Outfit Idea Pages
    { path: "/date-night-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/winter-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/concert-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/office-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/black-jeans-outfit-ideas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/casual-coffee-date-outfit", priority: 0.8, changeFrequency: "monthly" as const },
    
    // Legal & Support pages
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${CANONICAL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
