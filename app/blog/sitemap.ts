import { MetadataRoute } from "next";

const CANONICAL = "https://www.slidez.social";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const blogRoutes = [
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog/best-ai-stylist-apps", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return blogRoutes.map((route) => ({
    url: `${CANONICAL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
