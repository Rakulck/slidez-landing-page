import type { Metadata } from "next";
import { Geist, Sacramento } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const sacramento = Sacramento({
  variable: "--font-sacramento",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.slidez.social";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.Slidez.app&pcampaignid=web_share";
const CHROME_EXTENSION_URL = "https://chromewebstore.google.com/detail/kdcmgmfnnheiegkakcbkdolehlgdlaak?utm_source=item-share-cb";
// TODO: replace with the live App Store URL once the iOS app is published, then add it to sameAs/appStore fields below.
const APP_STORE_URL = "";

const TITLE = "Slidez – AI Stylist & Virtual Try-On App";
const DESCRIPTION =
  "Meet your AI Stylist. Slidez generates outfit ideas, visualizes looks on you, and helps you shop smarter. Free on iOS & Android.";
const OG_TITLE = "Slidez: AI Stylist & Try-On";
const OG_DESCRIPTION =
  "Generate outfits & try clothes virtually with Slidez AI.";
const TWITTER_TITLE =
  "Slidez: AI Outfit Stylist & Virtual Fitting Room App";
const OG_IMAGE = `${BASE_URL}/opengraph-image`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: [{ url: "/tab-icon.png", type: "image/png" }],
    shortcut: "/tab-icon.png",
    apple: "/tab-icon.png",
  },
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
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
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
        "https://www.linkedin.com/company/slidez-social/",
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
      downloadUrl: [GOOGLE_PLAY_URL, ...(APP_STORE_URL ? [APP_STORE_URL] : [])],
      description: DESCRIPTION,
      image: `${BASE_URL}/logo.png`,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS, Android",
      installUrl: GOOGLE_PLAY_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availableAtOrFrom: { "@type": "Place", name: "United States" },
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#chrome-extension`,
      name: "Slidez Try-On Chrome Extension",
      url: CHROME_EXTENSION_URL,
      downloadUrl: CHROME_EXTENSION_URL,
      installUrl: CHROME_EXTENSION_URL,
      description: "Try on clothes virtually from any online store using the Slidez Chrome extension.",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=85&fit=crop&crop=top"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${sacramento.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1J6K4QZJQ2"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1J6K4QZJQ2');
            `,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
