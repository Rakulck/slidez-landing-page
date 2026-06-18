import { MetadataRoute } from "next";

const BASE_URL = "https://www.slidez.social";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/account/",
        "/dashboard/",
        "/checkout/",
        "/login",
      ],
    },
    sitemap: [
      `${BASE_URL}/sitemap.xml`,
      `${BASE_URL}/blog/sitemap.xml`,
    ],
  };
}
