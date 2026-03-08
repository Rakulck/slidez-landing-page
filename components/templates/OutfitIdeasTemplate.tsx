import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import StylistTool from "@/components/features/ai-stylist/StylistTool";
import { ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import {
  type OutfitPageConfig,
  sharedSoftwareAppSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/outfit-pages";

/* ── Shared section data (same on every outfit page) ─────────── */

const BENEFITS = [
  {
    icon: Zap,
    title: "Instant outfit ideas",
    desc: "Type your occasion and get a complete outfit in seconds. No more decision fatigue standing in front of your wardrobe.",
  },
  {
    icon: Sparkles,
    title: "Discover new combinations",
    desc: "AI uncovers pairings you'd never think of — mixing textures, proportions, and tones that just work together.",
  },
  {
    icon: ShieldCheck,
    title: "Try styles before buying",
    desc: "Use Slidez virtual try-on to see exactly how an outfit looks on you before spending anything.",
  },
];

/* ── Template ─────────────────────────────────────────────────── */

export default function OutfitIdeasTemplate({ config }: { config: OutfitPageConfig }) {
  const faqSchema      = generateFaqSchema(config.faqItems);
  const breadcrumb     = generateBreadcrumbSchema(config.slug, config.heroH1);
  const webPageSchema  = generateWebPageSchema(config);

  return (
    <>
      {/* ── Page-level JSON-LD ──────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sharedSoftwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <main className="overflow-hidden">
        <Navbar />

        {/* ── Hero + Tool (dark) ─────────────────────────────── */}
        <section
          aria-label={`${config.heroH1} generator`}
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 bg-[#080808]"
        >
          <div
            aria-hidden
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(192,192,192,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 w-full max-w-3xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">
              {config.heroEyebrow ?? "AI Stylist"}
            </p>

            <h1 className="text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="gradient-silver-text">{config.heroH1}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-lg mx-auto mb-12 leading-relaxed">
              {config.heroSubtext}
            </p>

            <StylistTool />
          </div>
        </section>

        {/* ── Ways to Style ──────────────────────────────────── */}
        <section
          id="ways-to-style"
          aria-label="Ways to style your outfit"
          className="relative z-20 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">
                Style Guide
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                Ways to Style Your Outfit
              </h2>
              <p className="mt-4 text-black/45 text-lg max-w-xl mx-auto">
                From everyday casual to special occasions — get instant outfit ideas for any moment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {config.styleCards.map(({ label, desc, img, alt }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-black/[0.07] bg-[#fafafa] overflow-hidden hover:border-black/[0.14] hover:shadow-sm transition-all duration-200"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e8e8e8]">
                    <img
                      src={img}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-black text-sm mb-1.5">{label}</p>
                    <p className="text-black/45 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What Goes With ─────────────────────────────────── */}
        <section
          id="what-goes-with"
          aria-label="What goes with your outfit"
          className="relative z-30 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">
                Smart Pairings
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                What Goes With Your Outfit
              </h2>
              <p className="mt-4 text-black/45 text-lg max-w-xl mx-auto">
                Slidez AI builds the full look around your starting point — from tops to accessories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {config.whatGoesWith.map(({ category, body }) => (
                <div
                  key={category}
                  className="p-7 rounded-2xl border border-black/[0.07] bg-white"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-black/35 mb-3">
                    {category}
                  </p>
                  <p className="text-black/60 text-base leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Use an AI Stylist (shared) ─────────────────── */}
        <section
          id="why-ai-stylist"
          aria-label="Why use an AI stylist"
          className="relative z-40 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">
                Benefits
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                Why Use an AI Stylist
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-7 rounded-2xl border border-black/[0.07] bg-[#fafafa]">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-black text-base mb-2">{title}</p>
                  <p className="text-black/45 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Try With Slidez CTA (shared) ───────────────────── */}
        <section
          id="try-with-slidez"
          aria-label="Try with Slidez"
          className="relative z-50 -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-24 px-6"
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(192,192,192,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-6">
              Virtual Try-On
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
              Try With Slidez
            </h2>
            <p className="text-white/45 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Get outfit ideas above, then see how they look on you. Slidez lets you virtually wear
              any look before you buy — free on iOS and Android.
            </p>
            <a
              href="https://linkly.link/2FWYm"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full
                shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                hover:shadow-[0_4px_24px_rgba(255,255,255,0.45)] hover:scale-[1.05] hover:-translate-y-px
                active:scale-[0.97] transition-all duration-200"
            >
              Download Slidez – Free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section
          id="faq"
          aria-label={`${config.heroH1} FAQs`}
          className="relative z-[55] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#f5f5f5] py-24 px-6"
        >
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                FAQ
              </h2>
            </div>

            <div>
              {config.faqItems.map(({ q, a }, i) => (
                <details
                  key={i}
                  className="group border-b border-black/[0.08] last:border-b-0"
                >
                  <summary className="flex items-center justify-between gap-4 py-5 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
                    <span className="text-base md:text-lg font-semibold text-black group-hover:text-black/70 transition-colors duration-200 text-left">
                      {q}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-black/10 flex items-center justify-center text-black/40 group-hover:border-black/25 group-hover:text-black/60 transition-all duration-200 relative">
                      <span className="block w-3 h-px bg-current" />
                      <span className="block w-px h-3 bg-current absolute group-open:opacity-0 transition-opacity duration-200" />
                    </span>
                  </summary>
                  <p className="pb-5 text-black/55 text-base leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Popular Outfit Ideas ────────────────────────────── */}
        <section
          id="popular-outfit-ideas"
          aria-label="Popular outfit ideas"
          className="relative z-[58] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-white py-24 px-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35 mb-4">
                Browse by Style
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                Popular Outfit Ideas
              </h2>
              <p className="mt-4 text-black/45 text-lg max-w-lg mx-auto">
                Find the perfect look for your occasion. Tap any style below to explore.
              </p>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {config.popularIdeas.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block px-4 py-3.5 rounded-xl border border-black/[0.07] bg-[#fafafa] text-center
                      text-sm font-medium text-black/60
                      hover:border-black/[0.18] hover:bg-white hover:text-black hover:shadow-sm
                      transition-all duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Related Pages ───────────────────────────────────── */}
        <section
          id="related"
          aria-label="Related outfit idea pages"
          className="relative z-[60] -mt-10 rounded-t-[2.5rem] overflow-hidden bg-[#080808] py-20 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-4">
                More Style Guides
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Related Pages
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {config.relatedPages.map(({ label, href, desc }) => (
                <a
                  key={label}
                  href={href}
                  className="group p-5 rounded-2xl border border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.03)]
                    hover:border-[rgba(192,192,192,0.25)] hover:bg-[rgba(255,255,255,0.05)]
                    transition-all duration-200"
                >
                  <p className="font-semibold text-white text-sm mb-1.5">{label}</p>
                  <p className="text-white/35 text-xs leading-relaxed">{desc}</p>
                  <ArrowRight className="w-3.5 h-3.5 text-white/20 mt-3 group-hover:text-white/50 group-hover:translate-x-0.5 transition-all duration-200" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────── */}
        <div className="relative z-[65] -mt-10 rounded-t-[2.5rem] overflow-hidden">
          <Footer />
        </div>
      </main>
    </>
  );
}
