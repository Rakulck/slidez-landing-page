import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogSlideAnimation from "@/components/ui/blog-slide-animation";

export const metadata: Metadata = {
  title: "Blog | Slidez",
  description: "Read the latest news, guides, and tips on AI styling, fashion trends, and building the perfect wardrobe.",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.slidez.social/blog" },
  openGraph: {
    title: "Blog | Slidez",
    description: "Read the latest news, guides, and tips on AI styling, fashion trends, and building the perfect wardrobe.",
    url: "https://www.slidez.social/blog",
    type: "website",
    siteName: "Slidez",
  },
};

export default function BlogListingPage() {
  return (
    <main className="overflow-hidden bg-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section data-nav-theme="dark-bg" className="relative pt-40 pb-32 bg-[#080808] px-6 text-center overflow-hidden">
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.05) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Articles & Guides</p>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
            The Slidez AI Blog
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about AI stylists, smart shopping, and the future of fashion.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section data-nav-theme="light-bg" className="relative z-20 -mt-10 bg-[#fafafa] rounded-t-[2.5rem] px-6 py-16 md:py-24 shadow-sm border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Card - What to Wear for Every Occasion: AI Guide */}
            <Link href="/blog/what-to-wear-every-occasion-ai-guide" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/what-to-wear-every-occasion-ai-guide.jpg" 
                  alt="What to Wear for Every Occasion AI Guide preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>August 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  What to Wear for Every Occasion: AI Guide
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  A practical guide to what to wear for work, casual, weddings, and special events, plus how AI outfit planners help you choose the right look.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - AI Outfit Recommendations: How They Work */}
            <Link href="/blog/ai-outfit-recommendations" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/ai-outfit-recommendations.jpg" 
                  alt="AI Outfit Recommendations: How They Work preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Deep Dive</span>
                  <span>·</span>
                  <span>August 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  AI Outfit Recommendations: How They Work
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  How AI outfit recommendations work, why they are more accurate than traditional shopping, and the key factors that improve styling accuracy.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - Best Outfit Planner Apps to Style Before You Buy (2026) */}
            <Link href="/blog/best-outfit-planner-apps-2026" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/best-outfit-planner-apps-2026.jpg" 
                  alt="Best Outfit Planner Apps to Style Before You Buy in 2026 preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>August 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Best Outfit Planner Apps to Style Before You Buy
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  The best outfit planner apps in 2026, compared. Learn how to plan outfits, style clothes before you buy, and stop wasting money on pieces you never wear.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - Algorithmic Architectures of Next-Generation Fashion Recommendation Systems */}
            <Link href="/blog/algorithmic-fashion-recommendation-systems" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/fashion-ai-algorithms.jpg" 
                  alt="Algorithmic Architectures of Next-Generation Fashion Recommendation Systems preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Deep Dive</span>
                  <span>·</span>
                  <span>August 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  The Algorithmic Architectures of Next-Gen Fashion AI
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  How modern AI styling systems use Graph Attention Networks, reinforcement learning, computational color theory, and silhouette math to generate compatible outfits.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - What Is a Virtual Wardrobe and How Does It Work? */}
            <Link href="/blog/what-is-a-virtual-wardrobe" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/virtual-closet-apps.jpg" 
                  alt="What Is a Virtual Wardrobe and How Does It Work? preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>August 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  What Is a Virtual Wardrobe and How Does It Work?
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  A complete guide to virtual wardrobes: what they are, how they work, key features, and the benefits of digitizing your closet with AI.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
            {/* Blog Post Card - How AI Is Personalizing Online Fashion Shopping */}
            <Link href="/blog/how-ai-personalizes-online-fashion-shopping" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/ai-fashion-stylist-benefits.jpg" 
                  alt="How AI Is Personalizing Online Fashion Shopping preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>August 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  How AI Is Personalizing Online Fashion Shopping
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Discover how AI is personalizing online fashion shopping through style learning, body-aware sizing, virtual try-on, and smarter recommendations that reduce returns.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - The Complete Guide to Creating a Smart Digital Wardrobe */}
            <Link href="/blog/complete-guide-smart-digital-wardrobe" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/virtual-closet-apps.jpg" 
                  alt="The Complete Guide to Creating a Smart Digital Wardrobe preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>August 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  The Complete Guide to Creating a Smart Digital Wardrobe
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  A complete 7-step guide to creating a smart digital wardrobe. Learn how to audit, digitize, and organize your clothes, then use AI to plan outfits and shop smarter.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - How AI Helps You Find Clothes That Actually Suit You */}
            <Link href="/blog/how-ai-helps-find-clothes-that-suit-you" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/ai-fashion-stylist-benefits.jpg" 
                  alt="How AI Helps You Find Clothes That Actually Suit You preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>July 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  How AI Helps You Find Clothes That Actually Suit You
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Learn how AI fashion tools help you find clothes that actually suit you, using body shape, color, fit, and personal style to deliver better recommendations.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - Digital Wardrobe vs Traditional Closet */}
            <Link href="/blog/digital-wardrobe-vs-traditional-closet" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/virtual-closet-apps.jpg" 
                  alt="Digital Wardrobe vs Traditional Closet preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Comparison</span>
                  <span>·</span>
                  <span>July 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Digital Wardrobe vs Traditional Closet: Which Wins?
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Digital wardrobe vs traditional closet: a full comparison of organization, outfit planning, and shopping. Learn which suits you and how to use both together.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
            {/* Blog Post Card - Best AI Outfit Ideas for Every Occasion */}
            <Link href="/blog/ai-outfit-ideas-every-occasion" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/outfit-work.jpg" 
                  alt="Best AI Outfit Ideas for Every Occasion preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>July 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Best AI Outfit Ideas for Every Occasion
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Discover the best AI outfit ideas for work, casual wear, date nights, weddings, travel, and parties. Learn how AI generates personalized looks for any occasion.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
            {/* Blog Post Card - Capsule Wardrobe AI Styling Tools */}
            <Link href="/blog/capsule-wardrobe-ai-styling-tools" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/virtual-closet-apps.jpg" 
                  alt="Capsule Wardrobe AI Styling Tools preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>July 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  How to Build a Capsule Wardrobe With AI Styling Tools
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Learn how to build a capsule wardrobe with AI styling tools. A 5-step guide to defining your style, choosing essentials, and creating more outfits from fewer clothes.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - How to Choose Clothes That Match Your Personal Style */}
            <Link href="/blog/how-to-choose-clothes-personal-style" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/how-to-choose-clothes-personal-style.jpg" 
                  alt="How to Choose Clothes That Match Your Personal Style preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>July 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  How to Choose Clothes That Match Your Personal Style
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Learn how to choose clothes that match your personal style. A practical guide to identifying your style, choosing colors, building a wardrobe, and shopping smarter.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - Benefits of Using an AI Fashion Stylist Daily */}
            <Link href="/blog/ai-fashion-stylist-benefits" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/ai-outfit-generators.jpg" 
                  alt="Benefits of Using an AI Fashion Stylist Daily preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>July 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Benefits of Using an AI Fashion Stylist Daily
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Discover the benefits of using an AI fashion stylist for everyday outfit planning. Save time, reduce decision fatigue, shop smarter, and dress with confidence.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - How to Stop Buying Clothes You Never Wear */}
            <Link href="/blog/how-to-stop-buying-clothes-you-never-wear" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/stop-buying-clothes.jpg" 
                  alt="Stop Buying Clothes You Never Wear preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>July 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  How to Stop Buying Clothes You Never Wear
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Learn how to stop buying clothes you never wear. Practical tips to break impulse shopping, plan outfits before you buy, and build a wardrobe you actually use.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - Clothing Styles for Body Types */}
            <Link href="/blog/clothing-styles-for-body-types" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/body-shapes-guide.jpg" 
                  alt="Clothing Styles for Body Types preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>June 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  How Clothing Styles Work for Every Body Type
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  A complete guide to clothing styles for every body type in 2026. Learn which cuts, silhouettes, and styles work for rectangle, pear, apple, hourglass, and inverted triangle shapes.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - Body Type Calculator */}
            <Link href="/blog/body-type-calculator" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/body-shapes-guide.jpg" 
                  alt="Body Type Calculator preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>June 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Body Type Calculator: How to Find Your Body Shape
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Learn how to use a body type calculator to find your body shape, what measurements you need, and how to use the results to dress with confidence.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - How AI Outfit Generators Work */}
            <Link href="/blog/how-ai-outfit-generators-work" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/ai-fashion-stylist-benefits.jpg" 
                  alt="AI Outfit Generator preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>June 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  How AI Outfit Generators Create Personalized Looks
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Discover how AI outfit generators create personalized looks using computer vision, machine learning, and your unique style preferences.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - Best Virtual Closet Apps 2026 */}
            <Link href="/blog/best-virtual-closet-apps" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/virtual-closet-apps.jpg" 
                  alt="Virtual Closet App preview image" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>June 2026</span>
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

            {/* Blog Post Card - Best AI Stylist Apps 2026 */}
            <Link href="/blog/best-ai-stylist-apps" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image
                  src="/best-ai-stylist-apps-2026.jpeg"
                  alt="Best AI Stylist Apps 2026 preview"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>June 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Best AI Stylist Apps to Upgrade Your Style in 2026
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Compare the 6 best AI stylist apps including Slidez AI, Acloset, Whering, Fits, Style DNA, and Cladwell to find the right virtual stylist for your style goals.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - What is AI Stylist */}
            <Link href="/blog/what-is-ai-fashion-stylist" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/blog-slidez-left.jpeg" 
                  alt="AI fashion stylist preview" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>June 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  What Is an AI Fashion Stylist? (2026 Guide)
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Discover what an AI fashion stylist is, how it works behind the scenes, and whether it deserves a spot on your phone in 2026.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - AI vs Human */}
            <Link href="/blog/ai-stylist-vs-human-stylist" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/blog-ai-vs-human.jpg" 
                  alt="AI vs Human Stylist preview" 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>June 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  AI Stylist vs Human Stylist: Which Is Right for You?
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Compare AI stylists and human stylists on cost, personalization, speed, and accuracy to find out which one fits your needs.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Blog Post Card - Virtual vs Online */}
            <Link href="/blog/virtual-try-on-vs-online-shopping" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/blog-slidez-right.jpeg" 
                  alt="Virtual try-on vs online shopping preview" 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Comparison</span>
                  <span>·</span>
                  <span>June 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Virtual Try-On vs Online Shopping: What&apos;s Better?
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Compare virtual try-on with traditional online shopping on fit accuracy, return rates, and shopping confidence to find out which is better in 2026.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
            
            {/* Blog Post Card */}
            <Link href="/blog/best-ai-stylist-apps" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden">
                <Image 
                  src="/best-ai-stylist-apps.jpeg" 
                  alt="Slidez AI preview image" 
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

            {/* Blog Post Card - Outfit Planner Apps */}
            <Link href="/blog/best-outfit-planner-apps" className="group flex flex-col bg-white rounded-3xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-4/3 bg-[#f5f5f5] overflow-hidden flex items-center justify-center p-6">
                <BlogSlideAnimation
                  src="/blog-slidez-right.json"
                  alt="Slidez AI outfit planner app preview"
                  className="w-full max-w-[220px] border-0 shadow-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-black/40 mb-4">
                  <span>Guide</span>
                  <span>·</span>
                  <span>May 2026</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 leading-snug group-hover:text-black/70 transition-colors">
                  Best Outfit Planner Apps to Style Clothes in 2026
                </h3>
                <p className="text-black/60 text-sm leading-relaxed mb-6 flex-1">
                  Discover the top outfit planner apps to plan outfits from your wardrobe, preview looks, and make smarter shopping decisions before checkout.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <div className="relative z-65 -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <Footer />
      </div>
    </main>
  );
}
