import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service – Slidez",
  description: "Slidez Terms of Service. Read the terms and conditions for using the Slidez AI stylist and virtual try-on platform.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    number: "1",
    title: "About Slidez",
    items: [
      "Slidez is an AI-powered styling and shopping platform that allows users to virtually try on clothing and beauty products.",
      "Generate outfits using artificial intelligence.",
      "Discover fashion products from brands and retailers.",
      "Share outfits and styling results.",
      "Preview clothing from shopping websites using the Slidez browser extension.",
    ],
  },
  {
    number: "2",
    title: "Eligibility",
    items: [
      "You must be at least 13 years old to use Slidez.",
      "If you are under 18, you may only use the service with permission from a parent or guardian.",
    ],
  },
  {
    number: "3",
    title: "User Accounts",
    items: [
      "Provide accurate account information.",
      "Maintain the security of your account credentials.",
      "You are responsible for activity that occurs under your account.",
    ],
  },
  {
    number: "4",
    title: "Acceptable Use",
    items: [
      "Do not upload illegal or harmful content.",
      "Do not upload images of other individuals without permission.",
      "Do not attempt to reverse engineer or exploit the platform.",
    ],
  },
  {
    number: "5",
    title: "User Content",
    items: [
      "Users may upload photos, clothing images, product images, and styling results.",
      "You retain ownership of uploaded content.",
      "You grant Slidez a limited license to process images and operate the Service.",
    ],
  },
  {
    number: "6",
    title: "Artificial Intelligence Features",
    items: [
      "Slidez uses AI to generate styling suggestions, outfit recommendations, and try-on previews.",
      "AI outputs may vary and may not always be accurate.",
    ],
  },
  {
    number: "7",
    title: "Virtual Try-On Disclaimer",
    items: [
      "Virtual try-on previews are visual simulations.",
      "Actual product appearance may differ due to lighting, sizing, or product variations.",
    ],
  },
  {
    number: "8",
    title: "AI-Generated Content Ownership",
    items: [
      "Users may use AI-generated styling results for personal use.",
      "Similar outputs may be generated for other users.",
    ],
  },
  {
    number: "9",
    title: "Shopping and Affiliate Links",
    items: [
      "Users may be redirected to retailer websites.",
      "Slidez may earn affiliate commissions from qualifying purchases.",
      "Slidez is not responsible for product quality, shipping, or refunds.",
    ],
  },
  {
    number: "10",
    title: "Browser Extension Use",
    items: [
      "The Slidez extension may access product information on shopping websites to enable try-on functionality.",
    ],
  },
  {
    number: "11",
    title: "Intellectual Property",
    items: [
      "All platform software, AI models, and branding belong to Slidez.",
      "Users may not copy, distribute, or reverse engineer the Service.",
    ],
  },
  {
    number: "12",
    title: "Prohibited Commercial Use",
    items: [
      "Users may not resell the Service or use it to build competing AI models.",
    ],
  },
  {
    number: "13",
    title: "Termination",
    items: [
      "Slidez may suspend accounts that violate these Terms.",
    ],
  },
  {
    number: "14",
    title: "Disclaimer of Warranties",
    items: [
      "The Service is provided 'as is' without warranties.",
    ],
  },
  {
    number: "15",
    title: "Limitation of Liability",
    items: [
      "Slidez is not liable for damages related to AI outputs or purchasing decisions.",
    ],
  },
  {
    number: "16",
    title: "Third-Party Services",
    items: [
      "Slidez may integrate with retailers, analytics tools, and cloud providers.",
    ],
  },
  {
    number: "17",
    title: "Changes to the Service",
    items: [
      "Features may be updated, modified, or removed at any time.",
    ],
  },
  {
    number: "18",
    title: "Changes to Terms",
    items: [
      "Updated Terms will be posted with a revised date.",
    ],
  },
  {
    number: "19",
    title: "Governing Law",
    items: [
      "These Terms are governed by the laws of the jurisdiction where Slidez operates.",
    ],
  },
];

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-white/35 text-sm">Last Updated: March 2025</p>
          </div>

          {/* Intro */}
          <p className="text-white/50 text-base leading-relaxed mb-12 pb-12 border-b border-white/[0.07]">
            By using Slidez you agree to these Terms of Service. Please read them carefully before using the platform.
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
                <span className="text-[11px] font-semibold text-[#c0c0c0] shrink-0">20</span>
                <h2 className="text-lg font-semibold text-white">Contact</h2>
              </div>
              <p className="ml-8 text-white/45 text-sm leading-relaxed">
                For questions contact{" "}
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
