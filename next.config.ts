import type { NextConfig } from "next";

const isProduction = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Turbopack doesn't get
  // confused by the unrelated package-lock.json in the user's home directory.
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
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
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/team", destination: "/", permanent: true },
      { source: "/features/slidez-ai", destination: "/", permanent: true },
      { source: "/features", destination: "/", permanent: true },
      { source: "/features/social-media-for-brands", destination: "/", permanent: true },
      {
        source: "/blogs/everything-sellers-need-to-know-about-slidez-s-zero-ad-marketing-your-1-question-answered-how-does-slidez-drive-sales-without-ad-spend",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/the-seller-s-guide-to-building-a-gen-z-community-on-slidez-watch-your-brand-go-from-unknown-to-gen-z-s-favorite-the-slidez-success-blueprint",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/what-is-social-shopping-a-gen-z-guide-to-community-driven-fashion-add-to-cart-is-old-news-ask-the-squad-is-the-new-wave",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/pov-shopping-with-friends-why-social-proof-is-the-new-fashion-currency-should-i-buy-this-texts-are-out-real-time-squad-approval-is-in",
        destination: "/blog",
        permanent: true,
      },
      // Catch-all: any remaining /blogs/<slug> maps to the matching /blog/<slug>.
      // Must come AFTER the specific dead-slug rules above (first match wins).
      { source: "/blogs/:path*", destination: "/blog/:path*", permanent: true },
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

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
