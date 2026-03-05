import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy – Slidez",
  description: "Slidez Privacy Policy. Learn how we collect, use, and protect your information when you use Slidez AI stylist and virtual try-on.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    number: "1",
    title: "Information We Collect",
    items: [
      "Account information such as name, email address, username, and profile details.",
      "Photos or images uploaded for virtual try-on, outfit generation, or styling previews.",
      "Customer support communications or feedback you send to us.",
    ],
  },
  {
    number: "2",
    title: "Photos and Image Data",
    items: [
      "Users may upload full-body photos, face images, clothing images, product images, or outfit images.",
      "These images are processed by AI systems to generate virtual try-ons, outfit previews, styling suggestions, outfit generation, and beauty previews.",
    ],
  },
  {
    number: "3",
    title: "Visual Analysis and Biometric Disclosure",
    items: [
      "Some features analyze body positioning, clothing regions, body proportions, and facial landmarks.",
      "Slidez does not use facial recognition technology to identify individuals.",
      "Slidez does not create or store biometric identification profiles.",
      "Slidez does not sell biometric or facial data.",
    ],
  },
  {
    number: "4",
    title: "Product and Shopping Data",
    items: [
      "Product images, product links, retailer information, brand catalog data, saved outfits, and styling selections may be processed to provide shopping and styling features.",
    ],
  },
  {
    number: "5",
    title: "Browser Extension Permissions",
    items: [
      "The Slidez browser extension may access product page URLs, product images, and product metadata to enable virtual try-on directly on shopping websites.",
    ],
  },
  {
    number: "6",
    title: "Automatically Collected Information",
    items: [
      "Device type, operating system, browser type, IP address, usage activity, crash logs, and performance diagnostics.",
    ],
  },
  {
    number: "7",
    title: "Analytics",
    items: [
      "We may use analytics tools to understand feature usage, engagement, and navigation behavior to improve the Service.",
    ],
  },
  {
    number: "8",
    title: "How We Use Information",
    items: [
      "Provide AI try-on functionality.",
      "Generate outfit recommendations.",
      "Personalize styling suggestions.",
      "Improve AI models and product performance.",
      "Enable shopping integrations and social sharing.",
      "Detect fraud and provide customer support.",
    ],
  },
  {
    number: "9",
    title: "Artificial Intelligence Processing",
    items: [
      "AI systems process uploaded images, clothing images, product images, and interaction patterns to generate styling results.",
      "Anonymized and aggregated data may be used to improve AI systems.",
    ],
  },
  {
    number: "10",
    title: "Social Features",
    items: [
      "Users may share outfits, styling results, or try-on previews with other users within the app.",
    ],
  },
  {
    number: "11",
    title: "Affiliate Integrations",
    items: [
      "Slidez may partner with retailers and affiliate networks. When users click product links, they may be redirected to external retailer websites where purchases may generate affiliate commissions.",
    ],
  },
  {
    number: "12",
    title: "Data Sharing",
    items: [
      "Information may be shared with service providers for hosting, analytics, AI processing, and security monitoring.",
      "Information may be disclosed when required by law.",
    ],
  },
  {
    number: "13",
    title: "Data Retention",
    items: [
      "We retain information only as long as necessary to provide services and comply with legal obligations.",
    ],
  },
  {
    number: "14",
    title: "Data Security",
    items: [
      "We implement encryption, secure infrastructure, and restricted access controls to protect user data.",
    ],
  },
  {
    number: "15",
    title: "Privacy Rights",
    items: [
      "Users may request access, correction, deletion, or portability of their personal data.",
    ],
  },
  {
    number: "16",
    title: "California Privacy Rights (CCPA)",
    items: [
      "California residents may request access to or deletion of personal data. Slidez does not sell personal data.",
    ],
  },
  {
    number: "17",
    title: "European Privacy Rights (GDPR)",
    items: [
      "Users in the EEA may exercise rights such as access, rectification, erasure, restriction of processing, and data portability.",
    ],
  },
  {
    number: "18",
    title: "International Data Transfers",
    items: [
      "Data may be processed outside your country of residence, including in the United States.",
    ],
  },
  {
    number: "19",
    title: "Children's Privacy",
    items: [
      "Slidez is not intended for children under 13 and does not knowingly collect personal data from children.",
    ],
  },
  {
    number: "20",
    title: "Changes to this Policy",
    items: [
      "We may update this policy periodically. Updates will be reflected by the 'Last Updated' date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080808] pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c0c0c0] mb-4">
              Legal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/35 text-sm">Last Updated: March 2025</p>
          </div>

          {/* Intro */}
          <p className="text-white/50 text-base leading-relaxed mb-12 pb-12 border-b border-white/[0.07]">
            Slidez operates an AI-powered styling and virtual try-on platform available through mobile applications, browser extensions, and our website (collectively, the &ldquo;Service&rdquo;). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use Slidez.
          </p>

          {/* Sections */}
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.number} className="pb-10 border-b border-white/[0.06] last:border-b-0">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-[11px] font-semibold text-[#c0c0c0] shrink-0 tabular-nums">
                    {section.number.padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-semibold text-white">
                    {section.title}
                  </h2>
                </div>
                <ul className="flex flex-col gap-3 ml-8">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/45 text-sm leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-[#c0c0c0]/40 shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact section */}
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-[11px] font-semibold text-[#c0c0c0] shrink-0">21</span>
                <h2 className="text-lg font-semibold text-white">Contact</h2>
              </div>
              <p className="ml-8 text-white/45 text-sm leading-relaxed">
                For questions about this Privacy Policy, contact:{" "}
                <a
                  href="mailto:support@slidez.social"
                  className="text-white/70 underline underline-offset-4 hover:text-white transition-colors duration-200"
                >
                  support@slidez.social
                </a>
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-white/[0.07]">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Slidez
            </a>
          </div>

        </div>
      </main>
    </>
  );
}
