import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogSlideAnimation from "@/components/ui/blog-slide-animation";

export const metadata: Metadata = {
  title: "Best Outfit Planner Apps to Style Clothes Before You Buy in 2026",
  description:
    "Discover the best outfit planner apps in 2026 to plan outfits, style clothes before you buy, and stop wasting money on pieces you never wear.",
};

export default function BlogPost() {
  return (
    <main className="overflow-hidden bg-[#fafafa]">
      <Navbar />

      <section className="relative pt-40 pb-32 bg-[#080808] px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.05) 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Blog · Guide</p>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Best Outfit Planner Apps to Style Clothes Before You Buy in 2026
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Compare the top apps to plan outfits, match new clothes with your wardrobe, and shop smarter.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 text-white/50 text-sm font-medium">
            <span>By Slidez Team</span>
            <span>·</span>
            <span>May 2026</span>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-10 bg-white rounded-t-[2.5rem] px-6 py-16 md:py-24 shadow-sm border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 bg-[#fafafa] rounded-2xl p-7 border border-black/5 shadow-sm">
              <h3 className="font-semibold text-black mb-5 text-lg">Table of Contents</h3>
              <nav className="flex flex-col gap-3.5 text-sm font-medium">
                <a href="#intro" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200">Introduction</a>
                <a href="#why-unworn" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200">Why Clothes Go Unworn</a>
                <a href="#how-apps-help" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200">How Outfit Planner Apps Help</a>
                <a href="#what-makes-great" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200">What Makes a Great App</a>
                <a href="#best-apps" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200">Best Outfit Planner Apps in 2026</a>
                <a href="#how-to-choose" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200">How to Choose</a>
                <a href="#conclusion" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200">Conclusion</a>
                <a href="#faqs" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200">FAQs</a>
              </nav>
            </div>
          </aside>

          <article className="flex-1 max-w-3xl text-black/75 text-lg leading-[1.85]">
            <div id="intro" className="mb-16 scroll-mt-32">
              <p className="mb-6">How many items in your closet still have tags on them? If the answer is more than zero, you are not alone.</p>
              <p className="mb-6">Most people buy a piece that looks great online, then never wear it because it does not match their wardrobe or fit their style in real life.</p>
              <p className="mb-8">A good outfit planner app fixes this by helping you plan outfits, preview looks, and decide what is worth buying before you spend the money.</p>
              <div className="bg-[#fafafa] p-8 rounded-2xl border border-black/5 my-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-black/80" />
                <p className="font-bold text-black mb-3 text-xl tracking-tight">TL;DR</p>
                <p className="text-[17px] text-black/70 m-0 leading-relaxed">
                  The best outfit planner app in 2026 for shopping smarter is <strong>Slidez</strong>. It is built to help you style clothes before
                  you buy with realistic virtual try-on, AI outfit recommendations, and a Chrome extension that works on any online store.
                </p>
              </div>
            </div>

            <div id="why-unworn" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">Why People Buy Clothes They Never Wear</h2>
              <p className="mb-6">Most people wear a small percentage of their wardrobe most of the time. The rest stays unworn for predictable reasons:</p>
              <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />It looked better on the model than on you.</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />There was no second opinion before purchase.</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />It was bought for an occasion that never came.</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />It was a sale-driven impulse buy.</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />It does not match the rest of your wardrobe.</li>
              </ul>
              <p className="mb-6">The common root cause is simple: the buying decision happened before enough styling context was available.</p>
            </div>

            <div id="how-apps-help" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">How Outfit Planner Apps Improve Fashion Shopping</h2>
              <p className="mb-8">Modern apps that create outfits do more than store closet photos. They help you make better decisions before checkout.</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-sm font-bold text-black">1</span>
                  <p><strong className="text-black">Virtual try-on:</strong> See how an item looks on your body before ordering.</p>
                </div>
                <div className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-sm font-bold text-black">2</span>
                  <p><strong className="text-black">Wardrobe matching:</strong> Check whether new pieces actually work with what you own.</p>
                </div>
                <div className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-sm font-bold text-black">3</span>
                  <p><strong className="text-black">Occasion context:</strong> Plan complete looks for real events, not isolated items.</p>
                </div>
                <div className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center text-sm font-bold text-black">4</span>
                  <p><strong className="text-black">Purchase friction:</strong> A short planning step cuts impulse buys and returns.</p>
                </div>
              </div>
            </div>

            <div id="what-makes-great" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">What Makes a Great Outfit Planning App</h2>
              <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Realistic virtual try-on</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Wardrobe integration and matching</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Cross-store shopping support</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Social import from Pinterest, TikTok, or Instagram</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />Occasion-based recommendations and easy syncing</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40" />A genuinely useful free tier</li>
              </ul>
            </div>

            <div id="best-apps" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">Best Apps to Plan Outfits in 2026</h2>
              <p className="mb-8">Here are the top outfit planner apps ranked by how well they help you style clothes before you buy.</p>

              <div className="pt-8 mb-12 border-t border-black/5">
                <h3 className="text-2xl font-bold text-black mb-4">1. Slidez: Best Overall for Pre-Purchase Outfit Planning</h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-10 max-w-[800px] mx-auto">
                  <BlogSlideAnimation src="/blog-slidez-left.json" alt="Slidez outfit planner app interface" className="w-full max-w-[320px]" />
                  <BlogSlideAnimation src="/blog-slidez-right.json" alt="Slidez outfit planner app virtual try-on" className="w-full max-w-[320px]" />
                </div>
                <p className="mb-5"><strong className="text-black">Quick Overview:</strong> Slidez is built for the decision that matters most: what to buy.</p>
                <p className="mb-5">It combines AI outfit recommendations with realistic try-on and lets you test looks from any online store via Chrome extension and social imports.</p>
                <p className="mb-4"><strong className="text-black">Best for:</strong> Anyone trying to stop buying clothes they will never wear.</p>
              </div>

              <div className="pt-8 mb-12 border-t border-black/5">
                <h3 className="text-2xl font-bold text-black mb-4">2. Acloset: Best All-in-One Wardrobe Planner</h3>
                <Image src="/blog-acloset.jpg" alt="Acloset wardrobe outfit planner app" width={800} height={450} className="w-full max-w-[500px] mx-auto block h-auto rounded-2xl border border-black/10 my-10 object-cover" />
                <p className="mb-4">A polished closet outfit planner app focused on digitizing your wardrobe, outfit planning, and tracking what you wear.</p>
              </div>

              <div className="pt-8 mb-12 border-t border-black/5">
                <h3 className="text-2xl font-bold text-black mb-4">3. Whering: Best Free Outfit Planner</h3>
                <Image src="/blog-whering.jpg" alt="Whering free outfit planner app" width={800} height={450} className="w-full max-w-[500px] mx-auto block h-auto rounded-2xl border border-black/10 my-10 object-cover" />
                <p className="mb-4">A strong free outfit generator app for planning from your existing wardrobe with community outfit inspiration.</p>
              </div>

              <div className="pt-8 mb-12 border-t border-black/5">
                <h3 className="text-2xl font-bold text-black mb-4">5. Cladwell: Best for Capsule Planning</h3>
                <Image src="/blog-cladwell.jpg" alt="Cladwell capsule outfit planner app" width={800} height={450} className="w-full max-w-[500px] mx-auto block h-auto rounded-2xl border border-black/10 my-10 object-cover" />
                <p className="mb-4">A focused closet outfit planner app for building a smaller, more intentional wardrobe.</p>
              </div>
            </div>

            <div id="how-to-choose" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">How to Choose the Right Outfit Planner App</h2>
              <p className="mb-6">Pick based on the problem you want to solve first:</p>
              <ul className="space-y-4 text-base text-black/80 list-none p-0 mb-8">
                <li className="flex items-start gap-3"><span className="text-xl">→</span> <span><strong>Stop bad purchases before checkout:</strong> Slidez</span></li>
                <li className="flex items-start gap-3"><span className="text-xl">→</span> <span><strong>All-in-one closet planner:</strong> Acloset</span></li>
                <li className="flex items-start gap-3"><span className="text-xl">→</span> <span><strong>Best free planner:</strong> Whering</span></li>
                <li className="flex items-start gap-3"><span className="text-xl">→</span> <span><strong>Capsule planning:</strong> Cladwell</span></li>
              </ul>
            </div>

            <div id="conclusion" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">Conclusion</h2>
              <p className="mb-6">A great outfit planner app changes how you shop: fewer impulse buys, fewer returns, and more pieces you actually wear.</p>
              <p className="mb-6">Traditional apps help you remix what you already own. Shopping-first apps help you decide better before buying.</p>
              <p className="mb-8">If your main goal is to stop wasting money on unworn clothes, Slidez is the strongest option in 2026.</p>
            </div>

            <div id="faqs" className="mb-10 scroll-mt-32 pt-12 border-t border-black/10">
              <h2 className="text-[2rem] font-bold text-black mb-10 tracking-tight">Frequently Asked Questions (FAQs)</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-black mb-3">What is the best app for planning outfits before shopping?</h4>
                  <p className="text-black/70">For most users in 2026, Slidez is the best choice for pre-purchase outfit planning thanks to virtual try-on and occasion-based recommendations.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-3">Do outfit planner apps work with online shopping?</h4>
                  <p className="text-black/70">Yes. Many apps integrate shopping links, and some include browser extensions to bring website items into your planning flow.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-3">Can I preview outfits before buying clothes?</h4>
                  <p className="text-black/70">Yes. Modern apps use virtual try-on so you can preview outfits and reduce guesswork before placing an order.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-3">Are outfit planner apps accurate?</h4>
                  <p className="text-black/70">Top apps in 2026 are accurate enough for day-to-day styling and purchase decisions, especially when combined with your saved looks and preferences.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="relative z-65 -mt-10 rounded-t-[2.5rem] overflow-hidden">
        <Footer />
      </div>
    </main>
  );
}
