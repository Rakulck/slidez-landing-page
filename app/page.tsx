import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ChromeExtension from "@/components/sections/ChromeExtension";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

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

      <div className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <HowItWorks />
      </div>

      <div className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <ChromeExtension />
      </div>

      <div className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <CTA />
      </div>

      <div className="relative z-[60] -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <Footer />
      </div>
    </main>
  );
}
