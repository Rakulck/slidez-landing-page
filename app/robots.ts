import { MetadataRoute } from "next";

const BASE_URL = "https://slidez-landing-page.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
