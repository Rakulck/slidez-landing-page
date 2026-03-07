import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { faqs } from "@/lib/faq-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://slidez-landing-page.vercel.app";

const TITLE = "Slidez – AI Stylist & Virtual Try-On App";
const DESCRIPTION =
  "Slidez is an AI stylist that lets you generate outfits and try clothes virtually before buying. Discover your style and see how outfits look on you instantly.";
const OG_TITLE = "Slidez: AI Stylist & Try-On"; // 27 chars — OG optimal 25–35
const OG_DESCRIPTION =
  "Generate outfits & try clothes virtually with Slidez AI."; // 56 chars — OG optimal 55–65
const TWITTER_TITLE =
  "Slidez: AI Outfit Stylist & Virtual Fitting Room App"; // 52 chars — Twitter optimal 50–70
const OG_IMAGE = `${BASE_URL}/og-image.png`;

const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI stylist",
    "virtual try-on",
    "outfit generator",
    "AI fashion app",
    "virtual fitting room",
    "outfit ideas",
    "try clothes online",
    "Slidez",
  ],
  authors: [{ name: "Slidez", url: BASE_URL }],
  formatDetection: { telephone: false },
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : { index: false, follow: false },
  alternates: {
    canonical: BASE_URL,
    languages: { "en": BASE_URL },
  },
  verification: {
    google: "5a493f6e28990868",
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    type: "website",
    url: BASE_URL,
    siteName: "Slidez",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TWITTER_TITLE,
    description: OG_DESCRIPTION,
    site: "@slidez_social",
    creator: "@slidez_social",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Slidez",
      url: BASE_URL,
      description: DESCRIPTION,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://www.instagram.com/slidez_ai_shopping/",
        "https://www.tiktok.com/@slidez._",
        "https://x.com/slidez_social",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Slidez",
      url: BASE_URL,
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#app`,
      name: TITLE,
      url: "https://linkly.link/2FWYm",
      downloadUrl: "https://linkly.link/2FWYm",
      description: DESCRIPTION,
      image: `${BASE_URL}/logo.png`,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
          {children}
        <Analytics />
      </body>
    </html>
  );
}
