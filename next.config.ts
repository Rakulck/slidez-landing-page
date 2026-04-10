import type { NextConfig } from "next";

const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Vercel domain redirect to main domain
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "slidez-landing-page.vercel.app",
          },
        ],
        destination: "https://www.slidez.social/:path*",
        permanent: true,
      },
      // Individual broken URLs
      {
        source: "/office-outfit-ideas-for-men",
        destination: "/office-outfit-ideas",
        permanent: true,
      },
      {
        source: "/office-outfit-ideas-for-women",
        destination: "/office-outfit-ideas",
        permanent: true,
      },
      {
        source: "/party-night-outfit-ideas",
        destination: "/outfit-ideas",
        permanent: true,
      },
      {
        source: "/streetwear-outfit-ideas",
        destination: "/outfit-ideas",
        permanent: true,
      },
      {
        source: "/summer-date-night-outfit-ideas",
        destination: "/date-night-outfit-ideas",
        permanent: true,
      },
      {
        source: "/vacation-outfit-ideas",
        destination: "/outfit-ideas",
        permanent: true,
      },
      // Features
      {
        source: "/features/social-media-for-brands",
        destination: "/",
        permanent: true,
      },
      {
        source: "/features",
        destination: "/",
        permanent: true,
      },
      {
        source: "/features/slidez-ai",
        destination: "/ai-stylist",
        permanent: true,
      },
      // Blogs
      {
        source: "/blogs/what-is-social-shopping-a-gen-z-guide-to-community-driven-fashion-add-to-cart-is-old-news-ask-the-squad-is-the-new-wave",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs/pov-shopping-with-friends-why-social-proof-is-the-new-fashion-currency-should-i-buy-this-texts-are-out-real-time-squad-approval-is-in",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs/customizing-your-template",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs/the-gen-z-shopping-revolution-how-slidez-is-changing-the-game",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs/the-future-is-here-how-slidez-s-ai-creates-your-perfect-personalized-shopping-experience",
        destination: "/ai-stylist",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          ...(!isProduction
            ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;
