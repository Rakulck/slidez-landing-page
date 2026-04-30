import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy – Slidez",
  description: "Slidez Privacy Policy for the Shopify app. Learn how we collect, use, and protect information from consumers, merchants, and visitors.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.slidez.social/brands-privacy-policy" },
};

const sections = [
  {
    number: "1",
    title: "Introduction",
    items: [
      'Slidez ("we," "us," or "our") provides an AI-powered virtual try-on Shopify app and related services. This Privacy Policy explains how we collect, use, disclose, and protect information from consumers, merchants, and visitors.',
    ],
  },
  {
    number: "2",
    title: "Scope",
    items: [
      "This Policy applies to the Slidez Shopify app, our website, merchant tools, and all related services.",
    ],
  },
  {
    number: "3",
    title: "Information We Collect",
    items: [
      "Account data: name, email, and login credentials.",
      "Profile data: preferences and style interests.",
      "Content you upload: photos, product links, and prompts.",
      "Device and usage data: IP address, device type, OS, browser, and analytics.",
      "Transaction and referral data.",
      "Merchant store data required to operate integrations.",
      "Support communications.",
    ],
  },
  {
    number: "4",
    title: "Sensitive & Image Data — Biometric Privacy",
    items: [
      "If you upload photos for virtual try-on, your image is processed solely to generate a clothing overlay result. We do not sell, lease, trade, or profit from facial imagery or biometric data.",
      "Deletion policy: Customer photos uploaded for virtual try-on are deleted immediately after processing is complete. Photos are never stored beyond the active session and are never retained on our servers.",
      "Illinois residents: We comply with the Illinois Biometric Information Privacy Act (BIPA). Before processing, we obtain written consent, disclose the purpose and duration of data use, and maintain a publicly available retention and destruction policy. Biometric data is destroyed immediately upon completion of the processing purpose.",
      "Texas residents: We comply with the Texas Capture or Use of Biometric Identifier Act (CUBI). Biometric identifiers are not sold or disclosed except as permitted by law.",
      "California residents: We comply with the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). Photos and derived data are treated as sensitive personal information.",
      "Where required by applicable biometric or privacy law, we obtain explicit consent before any processing.",
    ],
  },
  {
    number: "5",
    title: "How We Use Information",
    items: [
      "Provide virtual try-on services.",
      "Operate merchant Shopify integrations.",
      "Generate analytics.",
      "Prevent fraud.",
      "Provide customer support.",
      "Personalize experiences.",
      "Comply with legal obligations.",
      "Improve our services.",
    ],
  },
  {
    number: "6",
    title: "AI Processing",
    items: [
      "We use internal models and third-party AI providers to process uploaded images and generate styling outputs.",
      "Unless separately disclosed and consented to where required, personal photos are not used to train public foundation models.",
    ],
  },
  {
    number: "7",
    title: "Merchant Data & Data Controller Relationship",
    items: [
      "For merchants using the Slidez Shopify app, we may access product catalogs, images, pricing, inventory, and store settings strictly to provide contracted services. We do not resell confidential merchant data.",
      "For the purposes of GDPR and applicable data protection law: merchants act as the data controller for their customers' personal data, and Slidez acts as a data processor on behalf of the merchant. We process customer data only on documented instructions from the merchant and in accordance with this Policy.",
    ],
  },
  {
    number: "8",
    title: "Subprocessors & Third-Party Service Providers",
    items: [
      "Cloud Hosting Providers: Infrastructure and storage services that host and run the Slidez platform (e.g., servers, databases, file storage).",
      "Analytics Providers: Tools that help us understand usage patterns, performance, and errors in order to improve the service. Analytics data is aggregated and does not include customer photos.",
      "AI Inference Vendors: Third-party AI model providers used to generate virtual try-on results from uploaded photos. These vendors process photos only to return a result and are contractually prohibited from retaining or reusing the data.",
      "Payment Processors: Billing and subscription management providers (including Shopify Payments) that handle merchant subscription charges. Payment processors do not have access to customer try-on photos.",
      "We conduct reasonable vendor due diligence before engaging subprocessors handling personal data. An up-to-date list of active subprocessors is available upon request at info@slidez.social.",
    ],
  },
  {
    number: "9",
    title: "Sharing",
    items: [
      "Beyond the subprocessors described above, we may share data with affiliated entities, integration partners at your direction, and authorities when legally required.",
      "We do not sell personal data.",
    ],
  },
  {
    number: "10",
    title: "Retention",
    items: [
      "We retain data only as long as reasonably necessary for service delivery, security, dispute resolution, and legal obligations.",
      "Customer photos uploaded for virtual try-on are deleted immediately after processing.",
      "Other personal data is retained in accordance with applicable law and deleted upon valid deletion requests.",
    ],
  },
  {
    number: "11",
    title: "Security",
    items: [
      "We use reasonable administrative, technical, and organizational safeguards including access controls, encryption in transit, monitoring, and least-privilege practices.",
      "No system is perfectly secure.",
    ],
  },
  {
    number: "12",
    title: "Your Rights",
    items: [
      "Depending on your location, you may request access, correction, deletion, portability, objection, restriction, or appeal regarding your personal data.",
      "California residents have rights under CCPA/CPRA.",
      "EEA/UK users have rights under GDPR.",
      "Illinois residents have rights under BIPA.",
      "Texas residents have rights under CUBI.",
      "To submit a request, contact us at the address below.",
    ],
  },
  {
    number: "13",
    title: "Cookies & Analytics",
    items: [
      "We may use cookies, SDKs, pixels, and similar technologies for authentication, preferences, measurement, and fraud prevention.",
      "You can manage settings through your browser or device where available.",
    ],
  },
  {
    number: "14",
    title: "International Transfers",
    items: [
      "Data may be processed in countries other than your own. Where required, we use lawful transfer mechanisms such as Standard Contractual Clauses or other approved safeguards.",
    ],
  },
  {
    number: "15",
    title: "Children",
    items: [
      "Our services are not directed to children under 13 (or a higher minimum age where required by local law). If we learn we collected data unlawfully from a child, we will delete it promptly.",
    ],
  },
  {
    number: "16",
    title: "AI Output Disclaimer",
    items: [
      "AI-generated try-on previews are illustrative and may not perfectly represent real-world fit, color, sizing, or availability. Users should verify product details before purchase.",
    ],
  },
  {
    number: "17",
    title: "Merchant Content",
    items: [
      "Merchants are responsible for the accuracy, legality, and rights clearance of products, images, descriptions, pricing, and claims they submit.",
      "We may remove content that violates our policies or applicable law.",
    ],
  },
  {
    number: "18",
    title: "Changes",
    items: [
      "We may update this Policy periodically. Material changes will be communicated as required by applicable law.",
    ],
  },
];

export default function BrandsPrivacyPolicyPage() {
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
            <p className="text-white/35 text-sm">Effective Date: April 25, 2026</p>
          </div>

          {/* Biometric notice callout */}
          <div className="mb-12 border border-white/20 rounded-lg px-6 py-5 bg-white/[0.03]">
            <p className="text-white/90 text-sm leading-relaxed font-medium">
              WE DO NOT SELL, LEASE, OR PROFIT FROM YOUR BIOMETRIC DATA OR FACIAL IMAGERY. Customer photos uploaded for virtual try-on are deleted immediately after processing and are never stored, shared, or used for any purpose beyond generating your result.
            </p>
          </div>

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
                <span className="text-[11px] font-semibold text-[#c0c0c0] shrink-0">19</span>
                <h2 className="text-lg font-semibold text-white">Contact</h2>
              </div>
              <p className="ml-8 text-white/45 text-sm leading-relaxed mb-2">
                For privacy requests, questions, subprocessor inquiries, or to exercise your rights under BIPA, GDPR, CCPA, or any other applicable law, contact the Slidez Privacy Team:
              </p>
              <p className="ml-8 text-white/45 text-sm">
                <a
                  href="mailto:info@slidez.social"
                  className="text-white/70 underline underline-offset-4 hover:text-white transition-colors duration-200"
                >
                  info@slidez.social
                </a>
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-white/[0.07]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Slidez
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
