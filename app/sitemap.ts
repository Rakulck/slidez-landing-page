import { MetadataRoute } from "next";

const CANONICAL = "https://slidez.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CANONICAL,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${CANONICAL}/outfit-ideas`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL}/what-to-wear`,
      lastModified: new Date("2025-03-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL}/ai-stylist`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL}/ai-virtual-try-on`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL}/try-on-from-anywhere`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${CANONICAL}/date-night-outfit-ideas`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${CANONICAL}/winter-outfit-ideas`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${CANONICAL}/concert-outfit-ideas`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${CANONICAL}/black-jeans-outfit-ideas`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${CANONICAL}/office-outfit-ideas`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${CANONICAL}/casual-coffee-date-outfit`,
      lastModified: new Date("2025-03-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
