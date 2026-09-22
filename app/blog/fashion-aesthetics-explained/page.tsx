import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogProductLinks from "@/components/sections/BlogProductLinks";

export const metadata: Metadata = {
  title: "Fashion Aesthetics Explained: Find Your Style | Slidez",
  description:
    "What are fashion aesthetics, and which one fits you? A guide to popular aesthetics like cottagecore and dark academia, how to find yours, and how to mix them.",
  keywords: [
    "fashion aesthetics",
    "fashion aesthetics explained",
    "types of fashion aesthetics",
    "fashion aesthetic",
    "different fashion aesthetics",
    "fashion aesthetics list",
    "clothing aesthetics",
    "fashion style aesthetics",
    "popular fashion aesthetics",
    "cottagecore",
    "dark academia",
    "y2k fashion",
    "ai stylist",
    "virtual try-on",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.slidez.social/blog/fashion-aesthetics-explained" },
  openGraph: {
    title: "Fashion Aesthetics Explained: Find Your Style",
    description:
      "What are fashion aesthetics, and which one fits you? A guide to popular aesthetics like cottagecore and dark academia, how to find yours, and how to mix them.",
    url: "https://www.slidez.social/blog/fashion-aesthetics-explained",
    type: "article",
    siteName: "Slidez",
    images: [
      {
        url: "https://www.slidez.social/fashion-aesthetics-explained.jpg",
        width: 1200,
        height: 675,
        alt: "Fashion Aesthetics Explained: Find Your Style",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Aesthetics Explained: Find Your Style",
    description:
      "What are fashion aesthetics, and which one fits you? A guide to popular aesthetics like cottagecore and dark academia, how to find yours, and how to mix them.",
    images: ["https://www.slidez.social/fashion-aesthetics-explained.jpg"],
  },
};

export default function BlogPost() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Fashion Aesthetics Explained: Find Your Style",
    description:
      "What are fashion aesthetics, and which one fits you? A guide to popular aesthetics like cottagecore and dark academia, how to find yours, and how to mix them.",
    image: "https://www.slidez.social/fashion-aesthetics-explained.jpg",
    author: {
      "@type": "Organization",
      name: "Slidez AI Team",
      url: "https://www.slidez.social",
    },
    publisher: {
      "@type": "Organization",
      name: "Slidez",
      logo: {
        "@type": "ImageObject",
        url: "https://www.slidez.social/logo.png",
      },
    },
    datePublished: "2026-09-22T00:00:00.000Z",
    dateModified: "2026-09-22T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.slidez.social/blog/fashion-aesthetics-explained",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the different types of fashion aesthetics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popular fashion aesthetics include cottagecore, dark academia, light academia, Y2K, coastal grandma, clean girl, old money, gorpcore, grunge, techwear, coquette, balletcore, and indie sleaze, among many others that surface regularly online. Each is defined by a consistent palette, texture, and set of reference points rather than a strict rulebook, and most people are drawn to more than one.",
        },
      },
      {
        "@type": "Question",
        name: "How do I find my fashion aesthetic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Look back at what you have recently saved, liked, or admired, and notice which named aesthetics keep recurring. An aesthetic that still appeals after a few weeks is more likely a genuine preference than a passing trend. Most people land somewhere between two or three aesthetics rather than a single pure one, which is the typical outcome rather than an unresolved answer.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between fashion style and aesthetic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Personal style is the consistent, individual thread running through everything you wear, built from your own habits over time. A fashion aesthetic is a specific, named, shared visual category, like cottagecore or dark academia, that anyone can opt into. You can draw from several aesthetics and still have one coherent personal style underneath. Aesthetics are ingredients; style is what you make with them.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have more than one fashion aesthetic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, and it is the norm rather than the exception. Most people are drawn to two or three aesthetics depending on mood, season, or occasion, rather than committing to a single label exclusively. Mixing works best when one aesthetic sets the base of an outfit and the others contribute individual accents, rather than all competing for equal space at once.",
        },
      },
      {
        "@type": "Question",
        name: "How do I build outfits around my fashion aesthetic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with one or two signature pieces that clearly signal the aesthetic, then build the rest of the outfit around a consistent colour palette. Texture and fabric matter as much as silhouette for most aesthetics. Adapt pieces you already own rather than starting from scratch, and keep basic fit and proportion principles in mind regardless of which aesthetic you are working within.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI help me find my fashion aesthetic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AI styling tools let you import outfits and inspiration you are drawn to, then learn from what you save and dismiss to build a picture of your actual preferences over time. Slidez lets you import looks from Pinterest, TikTok, and Instagram and try them on virtually, so you can test whether an aesthetic genuinely works on you before committing to it with a purchase.",
        },
      },
    ],
  };

  const aesthetics = [
    {
      name: "Cottagecore",
      description: "Soft, romantic, rural-inspired. Florals, linen, puff sleeves, gingham, earthy tones.",
      tag: "Romantic & Rustic",
    },
    {
      name: "Dark academia",
      description: "Scholarly and moody. Tweed, plaid, oxford shoes, deep browns and greens, vintage-inspired tailoring.",
      tag: "Scholarly & Moody",
    },
    {
      name: "Light academia",
      description: "The brighter counterpart to dark academia. Cream, beige, and soft neutrals, the same scholarly references in a gentler palette.",
      tag: "Gentle Neutrals",
    },
    {
      name: "Y2K",
      description: "Early-2000s revival. Low-rise, metallics, butterfly motifs, baby tees, playful and nostalgic.",
      tag: "Playful & Nostalgic",
    },
    {
      name: "Coastal grandma",
      description: "Relaxed, breezy, neutral-toned. Linen shirts, wide trousers, effortless layering, inspired by seaside ease.",
      tag: "Relaxed & Breezy",
    },
    {
      name: "Clean girl",
      description: "Minimal, polished, understated. Slicked hair, neutral tones, simple gold jewellery, an emphasis on looking put together with very little visible effort.",
      tag: "Polished Minimalism",
    },
    {
      name: "Old money",
      description: "Understated luxury with no logos. Tailored basics, quality fabric, muted colours, a quietly expensive look.",
      tag: "Quiet Luxury",
    },
    {
      name: "Gorpcore",
      description: "Outdoor and technical wear, worn as everyday fashion. Hiking boots, fleece, technical fabrics, functional silhouettes.",
      tag: "Outdoor Utilitarian",
    },
    {
      name: "Grunge",
      description: "Rough-edged and rebellious. Flannel, distressed denim, combat boots, dark and muted tones.",
      tag: "Rebellious Edge",
    },
    {
      name: "Techwear",
      description: "Futuristic and functional. Technical fabrics, utilitarian details, a monochrome, often black palette.",
      tag: "Futuristic & Utilitarian",
    },
    {
      name: "Coquette",
      description: "Soft and feminine with a playful edge. Bows, lace, pastel pinks, ballet-inspired detail.",
      tag: "Feminine & Playful",
    },
    {
      name: "Balletcore",
      description: "Related to coquette but more directly dance-inspired. Wrap tops, leg warmers, soft pinks, and ballet flats.",
      tag: "Dance-Inspired",
    },
    {
      name: "Indie sleaze",
      description: "Deliberately undone, 2000s-indie inspired. Skinny jeans, band tees, smudged eyeliner energy, low-effort layering.",
      tag: "Vintage Undone",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#fafafa]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <Navbar />

      {/* Hero Section */}
      <section data-nav-theme="dark-bg" className="relative pt-40 pb-32 bg-[#080808] px-6 text-center overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.05) 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
            <span>Blog</span>
            <span>·</span>
            <span>Style Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white tracking-tight leading-[1.12] mb-6">
            Fashion Aesthetics Explained: Find Your Style
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Somewhere in the last few years, &ldquo;what&apos;s your aesthetic&rdquo; replaced &ldquo;what&apos;s your style&rdquo;. Here is what aesthetics actually are, how to find yours, and how to use them without dressing like a costume.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 text-white/50 text-sm font-medium">
            <span>By Slidez AI Team</span>
            <span>·</span>
            <span>September 2026</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section data-nav-theme="light-bg" className="relative z-20 -mt-10 bg-white rounded-t-[2.5rem] px-6 py-16 md:py-24 shadow-sm border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Sidebar ToC */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 bg-[#fafafa] rounded-2xl p-7 border border-black/5 shadow-sm">
              <h3 className="font-semibold text-black mb-5 text-lg">Table of Contents</h3>
              <nav className="flex flex-col gap-3 text-sm font-medium">
                <a href="#intro" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  1. Introduction &amp; TL;DR
                </a>
                <a href="#what-are-fashion-aesthetics" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  2. What Are Fashion Aesthetics?
                </a>
                <a href="#popular-types-of-fashion-aesthetics" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  3. Popular Fashion Aesthetics
                </a>
                <a href="#how-to-find-your-fashion-aesthetic" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  4. How to Find Yours
                </a>
                <a href="#how-to-choose-clothes-that-match-your-aesthetic" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  5. Choosing Matching Clothes
                </a>
                <a href="#how-to-mix-different-fashion-aesthetics" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  6. Mixing Different Aesthetics
                </a>
                <a href="#common-fashion-aesthetic-mistakes-to-avoid" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  7. Mistakes to Avoid
                </a>
                <a href="#conclusion" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  8. Conclusion
                </a>
                <a href="#faqs" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  9. Frequently Asked Questions
                </a>
                <a href="#references" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">
                  10. References
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-3xl text-black/75 text-lg leading-[1.85]">
            {/* Featured Image */}
            <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden mb-12 shadow-sm border border-black/5 bg-[#f5f5f5]">
              <Image
                src="/fashion-aesthetics-explained.jpg"
                alt="Fashion Aesthetics Explained: Find Your Style preview"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            {/* Intro */}
            <div id="intro" className="mb-16 scroll-mt-32">
              <p className="mb-6 text-xl leading-relaxed text-black/85 font-normal">
                Somewhere in the last few years, &ldquo;what&apos;s your aesthetic&rdquo; replaced &ldquo;what&apos;s your style&rdquo; as the more common question, especially online. They sound interchangeable. They are not quite the same thing.
              </p>
              <p className="mb-6">
                A fashion aesthetic is a specific, named visual world—cottagecore, dark academia, Y2K—each with its own colours, textures, and reference points.
              </p>
              <p className="mb-6">
                This guide covers what aesthetics actually are, the most popular ones right now, and how to use them without becoming a costume of any single one.
              </p>

              {/* TL;DR Box */}
              <div className="bg-[#fafafa] p-8 rounded-2xl border border-black/5 my-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-black"></div>
                <p className="font-bold text-black mb-3 text-xl tracking-tight">TL;DR</p>
                <p className="text-[17px] text-black/75 m-0 leading-relaxed">
                  A fashion aesthetic is a specific, named visual theme, like cottagecore or dark academia, built around consistent colours, textures, and references. It is narrower and more explicitly named than personal style. Find yours by noticing which named aesthetics you are drawn to, then build outfits by borrowing elements rather than copying wholesale.{" "}
                  <strong>
                    <a
                      href="https://hoihf7.short.gy/slidez-ai"
                      className="text-black underline decoration-black/20 hover:decoration-black transition-all"
                    >
                      Slidez
                    </a>
                  </strong>{" "}
                  helps you try on aesthetic-inspired pieces and see what actually works on you.
                </p>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 2 - What Are Fashion Aesthetics? */}
            <div id="what-are-fashion-aesthetics" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">
                What Are Fashion Aesthetics?
              </h2>

              <p className="mb-6 font-semibold text-black text-xl leading-snug">
                A fashion aesthetic is a specific, named visual theme built around consistent colours, textures, silhouettes, and cultural references, distinct from the broader idea of personal style.
              </p>

              <p className="mb-6">The two terms get used interchangeably, but they describe different things.</p>

              <div className="grid sm:grid-cols-2 gap-5 my-8">
                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Personal Style</h3>
                  <p className="text-black/70 text-sm m-0 leading-relaxed">
                    The underlying, consistent thread that runs through everything you wear, built from your actual habits and preferences over time. It is personal to you specifically.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">A Fashion Aesthetic</h3>
                  <p className="text-black/70 text-sm m-0 leading-relaxed">
                    A named, shared visual category anyone can opt into. It comes with an existing vocabulary, a reference palette, and often an origin in internet culture rather than in an individual&apos;s wardrobe.
                  </p>
                </div>
              </div>

              <p className="mb-6">
                As{" "}
                <a
                  href="https://www.vogue.com/article/micro-trends-are-dead-long-live-the-vibe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline decoration-black/20 hover:decoration-black transition-all font-medium"
                >
                  Vogue Business
                </a>{" "}
                reports on the shift away from algorithmic micro-trends, names like cottagecore and clean girl describe shared visual aesthetics that circulate online; your personal style is how you choose to use—or ignore—those looks.
              </p>

              <p className="mb-6">
                You can borrow from several aesthetics and still have one consistent personal style underneath. Aesthetics are ingredients. Style is the dish you make with them.
              </p>

              <div className="p-6 rounded-2xl bg-black/[0.02] border border-black/10 my-8 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h4 className="font-bold text-black text-base mb-1">Looking deeper into personal style?</h4>
                  <p className="text-black/60 text-sm m-0">Read our complete beginner&apos;s guide to defining your individual look.</p>
                </div>
                <Link
                  href="/blog/what-is-personal-style"
                  className="inline-flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all underline underline-offset-4 decoration-black/20 hover:decoration-black"
                >
                  What Is Personal Style? →
                </Link>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 3 - Popular Types of Fashion Aesthetics */}
            <div id="popular-types-of-fashion-aesthetics" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">
                Popular Types of Fashion Aesthetics
              </h2>

              <p className="mb-8">
                This list is not exhaustive, and new aesthetics surface constantly, often through social platforms. These are among the most recognised.
              </p>

              <div className="space-y-4 mb-8">
                {aesthetics.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm transition-all hover:border-black/20"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-black">{item.name}</h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-black/50 bg-black/5 px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-black/70 text-base m-0 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#fafafa] p-6 rounded-2xl border-l-4 border-l-black border-y border-r border-black/5 my-8 shadow-sm">
                <p className="text-[17px] text-black/80 m-0 leading-relaxed italic">
                  None of these require full commitment. Most people who identify with an aesthetic borrow selectively rather than adopting it head to toe.
                </p>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 4 - How to Find Your Fashion Aesthetic */}
            <div id="how-to-find-your-fashion-aesthetic" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">
                How to Find Your Fashion Aesthetic
              </h2>

              <p className="mb-6 font-semibold text-black text-xl leading-snug">
                Finding your fashion aesthetic is a matter of noticing which named categories keep showing up in what you already save, admire, and wear, then narrowing to the ones that hold up over time.
              </p>

              <p className="mb-8">A practical process:</p>

              <div className="space-y-6">
                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center text-base">
                    1
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Notice what you save without thinking</h3>
                    <p className="text-black/70 text-base m-0 leading-relaxed">
                      Scroll back through outfits you have saved or liked recently. Aesthetic labels often become obvious once you see the pattern laid out.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center text-base">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Name what you are drawn to</h3>
                    <p className="text-black/70 text-base m-0 leading-relaxed">
                      If several saved looks would all be tagged &ldquo;cottagecore&rdquo; or &ldquo;old money&rdquo; by someone else, that is useful information, whether or not you consciously chose that label.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center text-base">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Check what holds up</h3>
                    <p className="text-black/70 text-base m-0 leading-relaxed">
                      An aesthetic that still appeals after a few weeks is more likely a genuine pull. One that fades fast was probably a passing mood or a single viral trend.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center text-base">
                    4
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Expect a blend</h3>
                    <p className="text-black/70 text-base m-0 leading-relaxed">
                      Most people land somewhere between two or three aesthetics rather than a pure single one, and that is the normal outcome, not an unresolved answer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <span className="shrink-0 w-10 h-10 rounded-full bg-black text-white font-bold flex items-center justify-center text-base">
                    5
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Separate the aesthetic from the outfit</h3>
                    <p className="text-black/70 text-base m-0 leading-relaxed">
                      Loving the mood board does not obligate you to recreate it exactly. Take the parts that suit your actual life and skip the rest.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 5 - How to Choose Clothes That Match Your Aesthetic */}
            <div id="how-to-choose-clothes-that-match-your-aesthetic" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">
                How to Choose Clothes That Match Your Aesthetic
              </h2>

              <p className="mb-8">
                Translating an aesthetic from a mood board into an actual wardrobe works best in small, deliberate steps.
              </p>

              <div className="space-y-5">
                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Start with one or two signature pieces</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    A single item that reads clearly as the aesthetic—a tweed blazer for dark academia, a linen shirt for coastal grandma—does more work than an entire outfit of generic pieces.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Build the palette first</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    Most aesthetics live or die on colour consistency. Get the palette right and individual pieces become easier to choose correctly.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Prioritise texture and fabric</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    Aesthetics are often defined as much by material—linen, tweed, technical fabric—as by cut. The wrong fabric can undercut an otherwise correct silhouette.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Adapt to your existing wardrobe</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    Look for pieces you already own that fit the aesthetic loosely, and build outward from there rather than starting from zero.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Keep proportion and fit in mind</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    An aesthetic&apos;s mood does not override basic fit principles. A piece that reads as the right aesthetic but does not fit well will not look right regardless.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/[0.02] border border-black/10 my-8 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h4 className="font-bold text-black text-base mb-1">Want to master proportion and fit?</h4>
                  <p className="text-black/60 text-sm m-0">Learn how professional stylists coordinate cuts, proportions, and silhouettes.</p>
                </div>
                <Link
                  href="/blog/how-to-match-clothes-like-a-stylist"
                  className="inline-flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all underline underline-offset-4 decoration-black/20 hover:decoration-black"
                >
                  Matching Clothes Like a Stylist →
                </Link>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 6 - How to Mix Different Fashion Aesthetics */}
            <div id="how-to-mix-different-fashion-aesthetics" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">
                How to Mix Different Fashion Aesthetics
              </h2>

              <p className="mb-6 font-semibold text-black text-xl leading-snug">
                Mixing aesthetics works when one holds the base of the outfit and the others contribute individual pieces or accents, rather than each aesthetic competing for equal space.
              </p>

              <p className="mb-8">A few practical approaches:</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <h3 className="font-bold text-black text-lg mb-2">Pick a dominant aesthetic per outfit</h3>
                  <p className="text-black/70 text-sm m-0 leading-relaxed">
                    Let one aesthetic set the overall tone, then borrow one or two elements from another to keep it from feeling like a costume.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <h3 className="font-bold text-black text-lg mb-2">Use accessories as the bridge</h3>
                  <p className="text-black/70 text-sm m-0 leading-relaxed">
                    Jewellery, bags, and shoes are the easiest place to introduce a second aesthetic without disrupting the base outfit.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <h3 className="font-bold text-black text-lg mb-2">Match the palette even when mixing</h3>
                  <p className="text-black/70 text-sm m-0 leading-relaxed">
                    Two aesthetics with compatible colour palettes blend far more easily than two with clashing ones, even if their silhouettes differ.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm">
                  <h3 className="font-bold text-black text-lg mb-2">Let occasion guide the ratio</h3>
                  <p className="text-black/70 text-sm m-0 leading-relaxed">
                    A work setting might call for 80% old money, 20% coquette detail. A weekend look might invert that ratio entirely.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                <h3 className="font-bold text-black text-lg mb-2">Treat labels loosely</h3>
                <p className="text-black/70 text-base m-0 leading-relaxed">
                  The goal is an outfit that feels coherent to you, not one that satisfies a strict checklist for any single named aesthetic.
                </p>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 7 - Common Fashion Aesthetic Mistakes to Avoid */}
            <div id="common-fashion-aesthetic-mistakes-to-avoid" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">
                Common Fashion Aesthetic Mistakes to Avoid
              </h2>

              <p className="mb-8">
                A handful of recurring mistakes undercut an otherwise good instinct for a given aesthetic.
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Full-costume commitment</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    Wearing every defining element of an aesthetic at once often reads as a costume rather than a considered outfit. Restraint usually looks more intentional.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Chasing every micro-trend aesthetic</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed mb-3">
                    New named aesthetics surface constantly online. Committing wardrobe money to each one as it appears risks creating a closet of niche pieces with short shelf lives.
                  </p>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    As fashion sustainability analysis in{" "}
                    <a
                      href="https://www.vogue.com/article/want-to-be-more-sustainable-develop-a-better-sense-of-style"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline decoration-black/20 hover:decoration-black transition-all font-medium"
                    >
                      Vogue Business
                    </a>{" "}
                    highlights, buying for every fleeting online aesthetic can encourage purchases that do not fit your everyday wardrobe. More broadly, research from the{" "}
                    <a
                      href="https://www.ellenmacarthurfoundation.org/fashion-business-models/overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline decoration-black/20 hover:decoration-black transition-all font-medium"
                    >
                      Ellen MacArthur Foundation
                    </a>{" "}
                    shows that clothes are being produced in greater numbers and worn fewer times.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Ignoring fit for the sake of the look</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    A garment that nails the aesthetic&apos;s mood but does not fit will still look wrong. Fit is not optional, whatever the aesthetic.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Copying a single mood board exactly</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    An aesthetic is a direction, not a script. Recreating one specific image outfit for outfit tends to look less natural than adapting the idea to your own body and life.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Forgetting your actual lifestyle</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    An aesthetic that photographs beautifully but does not survive a commute, a job, or your climate will not get worn.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="font-bold text-black text-lg mb-2">Assuming an aesthetic is permanent</h3>
                  <p className="text-black/70 text-base m-0 leading-relaxed">
                    Aesthetics shift with mood, season, and exposure. Outgrowing one is normal, not a failure of commitment.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 8 - Conclusion */}
            <div id="conclusion" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">Conclusion</h2>
              <p className="mb-6">
                Fashion aesthetics are specific, named visual worlds, a useful vocabulary for describing a look, but narrower than personal style itself. The most natural approach borrows selectively from one or several, rather than committing fully to any single label.
              </p>
              <p className="mb-6">
                Find yours by noticing which named categories keep showing up in what you save and admire, then build outfits around one or two signature pieces rather than recreating an entire mood board.
              </p>

              {/* Callout Box */}
              <div className="bg-[#080808] text-white p-8 md:p-10 rounded-3xl my-10 relative overflow-hidden shadow-xl">
                <div
                  aria-hidden
                  className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full pointer-events-none opacity-20"
                  style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)" }}
                />
                <div className="relative z-10 max-w-xl">
                  <p className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">
                    Virtual Try-On &amp; Personal Styling
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                    Test any aesthetic before you buy
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed mb-6">
                    <strong className="text-white">Slidez</strong> makes testing an aesthetic low-risk. Import inspiration from Pinterest, TikTok, or Instagram, then try it on virtually to see whether a look genuinely works on you before buying anything. The free version includes all core features.
                  </p>
                  <a
                    href="https://hoihf7.short.gy/slidez-ai"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-base rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
                  >
                    Download Slidez Free →
                  </a>
                </div>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 9 - Frequently Asked Questions */}
            <div id="faqs" className="mb-16 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="text-xl font-bold text-black mb-3">
                    What are the different types of fashion aesthetics?
                  </h3>
                  <p className="text-black/70 m-0 leading-relaxed">
                    Popular fashion aesthetics include cottagecore, dark academia, light academia, Y2K, coastal grandma, clean girl, old money, gorpcore, grunge, techwear, coquette, balletcore, and indie sleaze, among many others that surface regularly online. Each is defined by a consistent palette, texture, and set of reference points rather than a strict rulebook, and most people are drawn to more than one.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="text-xl font-bold text-black mb-3">
                    How do I find my fashion aesthetic?
                  </h3>
                  <p className="text-black/70 m-0 leading-relaxed">
                    Look back at what you have recently saved, liked, or admired, and notice which named aesthetics keep recurring. An aesthetic that still appeals after a few weeks is more likely a genuine preference than a passing trend. Most people land somewhere between two or three aesthetics rather than a single pure one, which is the typical outcome rather than an unresolved answer.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="text-xl font-bold text-black mb-3">
                    What is the difference between fashion style and aesthetic?
                  </h3>
                  <p className="text-black/70 m-0 leading-relaxed">
                    Personal style is the consistent, individual thread running through everything you wear, built from your own habits over time. A fashion aesthetic is a specific, named, shared visual category, like cottagecore or dark academia, that anyone can opt into. You can draw from several aesthetics and still have one coherent personal style underneath. Aesthetics are ingredients; style is what you make with them.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="text-xl font-bold text-black mb-3">
                    Can I have more than one fashion aesthetic?
                  </h3>
                  <p className="text-black/70 m-0 leading-relaxed">
                    Yes, and it is the norm rather than the exception. Most people are drawn to two or three aesthetics depending on mood, season, or occasion, rather than committing to a single label exclusively. Mixing works best when one aesthetic sets the base of an outfit and the others contribute individual accents, rather than all competing for equal space at once.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="text-xl font-bold text-black mb-3">
                    How do I build outfits around my fashion aesthetic?
                  </h3>
                  <p className="text-black/70 m-0 leading-relaxed">
                    Start with one or two signature pieces that clearly signal the aesthetic, then build the rest of the outfit around a consistent colour palette. Texture and fabric matter as much as silhouette for most aesthetics. Adapt pieces you already own rather than starting from scratch, and keep basic fit and proportion principles in mind regardless of which aesthetic you are working within.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/5">
                  <h3 className="text-xl font-bold text-black mb-3">
                    Can AI help me find my fashion aesthetic?
                  </h3>
                  <p className="text-black/70 m-0 leading-relaxed">
                    Yes. AI styling tools let you import outfits and inspiration you are drawn to, then learn from what you save and dismiss to build a picture of your actual preferences over time.{" "}
                    <a
                      href="https://hoihf7.short.gy/slidez-ai"
                      className="text-black font-semibold underline underline-offset-4 decoration-black/20 hover:decoration-black"
                    >
                      Slidez
                    </a>{" "}
                    lets you import looks from Pinterest, TikTok, and Instagram and try them on virtually, so you can test whether an aesthetic genuinely works on you before committing to it with a purchase.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            {/* Section 10 - References */}
            <div id="references" className="mb-12 scroll-mt-32">
              <h2 className="text-[2rem] font-bold text-black mb-6 tracking-tight">References</h2>
              <ol className="list-decimal pl-6 space-y-3 text-black/70 text-base">
                <li className="pl-2">
                  <a
                    href="https://www.vogue.com/article/micro-trends-are-dead-long-live-the-vibe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline decoration-black/20 hover:decoration-black transition-all"
                  >
                    Micro-Trends Are Dead. Long Live the Vibe, Vogue Business, January 2025
                  </a>
                </li>
                <li className="pl-2">
                  <a
                    href="https://www.vogue.com/article/want-to-be-more-sustainable-develop-a-better-sense-of-style"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline decoration-black/20 hover:decoration-black transition-all"
                  >
                    Want to Be More Sustainable? Develop a Better Sense of Style, Vogue Business, August 2024
                  </a>
                </li>
                <li className="pl-2">
                  <a
                    href="https://www.ellenmacarthurfoundation.org/fashion-business-models/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline decoration-black/20 hover:decoration-black transition-all"
                  >
                    Rethinking Business Models for a Thriving Fashion Industry, Ellen MacArthur Foundation, November 2021
                  </a>
                </li>
              </ol>
            </div>
          </article>
        </div>
      </section>

      <BlogProductLinks />
      <Footer />
    </main>
  );
}
