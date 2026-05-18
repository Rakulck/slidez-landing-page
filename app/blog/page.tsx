import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Blog | Slidez",
  description: "Read the latest news, guides, and tips on AI styling, fashion trends, and building the perfect wardrobe.",
};

export default function BlogListingPage() {
  return (
    <main className="overflow-hidden bg-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-[#080808] px-6 text-center overflow-hidden">
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.05) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Articles & Guides</p>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
            The Slidez Blog
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about AI stylists, smart shopping, and the future of fashion.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-20 -mt-10 bg-[#fafafa] rounded-t-[2.5rem] px-6 py-16 md:py-24 shadow-sm border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Blog Post Card */}
            <Link href="/blog/best-ai-stylist-apps" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-[4/3] bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/blog-slidez-right.jpeg" 
                  alt="Slidez preview image" 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>May 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Best AI Stylist Apps to Instantly Upgrade Your Style in 2026
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  The rise of the AI stylist app has changed how millions of people plan outfits, build wardrobes, and shop smarter. Discover the top picks for this year.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card 2 */}
            <Link href="/blog/best-virtual-closet-apps" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-[4/3] bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/blog-slidez-left.jpeg" 
                  alt="Virtual Closet App preview image" 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>May 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Best Virtual Closet Apps to Organize and Style Your Wardrobe in 2026
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Turn your wardrobe into something you can actually use. Discover the top virtual closet apps that help you plan outfits and shop smarter.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Empty slots for future posts can be added here */}

          </div>
        </div>
      </section>

      <div className="relative z-[65] -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <Footer />
      </div>
    </main>
  );
}
