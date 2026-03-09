import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

const Features        = dynamic(() => import("@/components/sections/Features"));
const HowItWorks      = dynamic(() => import("@/components/sections/HowItWorks"));
const ChromeExtension = dynamic(() => import("@/components/sections/ChromeExtension"));
const FAQ             = dynamic(() => import("@/components/sections/FAQ"));
const CTA             = dynamic(() => import("@/components/sections/CTA"));
const Footer          = dynamic(() => import("@/components/sections/Footer"));

const BASE_URL = "https://slidez-landing-page.vercel.app";
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : { index: false, follow: false },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <div className="relative z-10">
        <Hero />
      </div>

      <div className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <Features />
      </div>

      <div className="relative z-30 -mt-0 rounded-t-[2.5rem] overflow-hidden">
        <HowItWorks />
      </div>

      <div className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <ChromeExtension />
      </div>

      <div className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <FAQ />
      </div>

      <div className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <CTA />
      </div>

      <div className="relative z-[65] -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <Footer />
      </div>
    </main>
  );
}
