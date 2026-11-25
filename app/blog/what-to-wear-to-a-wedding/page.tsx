import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogProductLinks from "@/components/sections/BlogProductLinks";

// Hero Image Licence Record (per Slidez Blog Image Sourcing Guide):
// Image: /what-to-wear-to-a-wedding.jpg (and /what-to-wear-to-a-wedding.webp), 1200x630px, <100KB
// Source: Unsplash — https://images.unsplash.com/photo-1519741497674-611481863552
// Licence: Unsplash License (Free for commercial and non-commercial use, no attribution required, real photography)
// Date Sourced: 2026-11-25

export const metadata: Metadata = {
  title: "What to Wear to a Wedding: Dress Code Guide | Slidez",
  description:
    "What to wear to a wedding as a guest: every dress code explained, outfit ideas for men and women, beach and outdoor weddings, and colors to avoid.",
  keywords: [
    "wedding guest outfit ideas",
    "what to wear to a wedding",
    "wedding guest outfits",
    "wedding outfit ideas for women",
    "wedding outfit ideas for men",
    "wedding guest dress code",
    "formal wedding guest attire",
    "semi-formal wedding outfits",
    "cocktail wedding attire",
    "casual wedding guest outfits",
    "black tie wedding attire",
    "beach wedding outfit ideas",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.slidez.social/blog/what-to-wear-to-a-wedding" },
  openGraph: {
    title: "What to Wear to a Wedding: Dress Code Guide",
    description:
      "What to wear to a wedding as a guest: every dress code explained, outfit ideas for men and women, beach and outdoor weddings, and colors to avoid.",
    url: "https://www.slidez.social/blog/what-to-wear-to-a-wedding",
    type: "article",
    siteName: "Slidez",
    images: [
      {
        url: "https://www.slidez.social/what-to-wear-to-a-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Elegant wedding guests in formal and cocktail attire attending a celebration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Wear to a Wedding: Dress Code Guide",
    description:
      "What to wear to a wedding as a guest: every dress code explained, outfit ideas for men and women, beach and outdoor weddings, and colors to avoid.",
    images: ["https://www.slidez.social/what-to-wear-to-a-wedding.jpg"],
  },
};

export default function BlogPost() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What to Wear to a Wedding: Outfit Ideas for Different Dress Codes",
    description:
      "What to wear to a wedding as a guest: every dress code explained, outfit ideas for men and women, beach and outdoor weddings, and colors to avoid.",
    image: "https://www.slidez.social/what-to-wear-to-a-wedding.jpg",
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
    datePublished: "2026-11-25T00:00:00.000Z",
    dateModified: "2026-11-25T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.slidez.social/blog/what-to-wear-to-a-wedding",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What should I wear to a wedding as a guest?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Start with the dress code on the invitation, since these are defined terms rather than suggestions. If none is stated, default to semi-formal for an evening wedding and dressy casual for a daytime one, then adjust for the venue. Avoid white, ivory, cream, and the bridesmaid color. Slidez can show you how an outfit looks on your own body before you commit to buying it.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between formal and semi-formal wedding attire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Formal expects a floor-length gown for women and a tuxedo or very dark formal suit for men, and it is weighted toward evening events. Semi-formal expects a cocktail-length dress or dressy separates for women and a dark business suit with a tie for men. Semi-formal works at any hour, while formal is less common for daytime weddings.",
        },
      },
      {
        "@type": "Question",
        name: "What should women wear to a black tie wedding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A floor-length evening gown is the safest and most traditional option. A dressy cocktail dress or the dressiest version of a little black dress is also acceptable, and Emily Post's guidance explicitly allows both. Fabric carries the formality: silk, satin, velvet, crepe, and chiffon read formal, while cotton and jersey do not. This is the occasion for your best jewelry.",
        },
      },
      {
        "@type": "Question",
        name: "What should men wear to a cocktail wedding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A dark suit with a dress shirt and a tie. Navy or charcoal generally works better than black for daytime, and leather dress shoes complete it. A tie is expected at cocktail and semi-formal. Going open-collar reads as a step down in formality, which is noticeable when other guests have followed the code.",
        },
      },
      {
        "@type": "Question",
        name: "What should I wear to a beach wedding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Light fabrics and flat or wedge shoes. For women, a flowing midi or maxi in chiffon or a linen blend; for men, a lightweight linen or cotton suit in a lighter color with loafers or suede shoes. Sand and thin heels do not work, so wedges or dressy flats are the practical choice. Bring a wrap, since outdoor evenings get cold faster than people expect even in summer.",
        },
      },
      {
        "@type": "Question",
        name: "Can I wear black to a wedding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At most contemporary Western weddings, yes, particularly for evening and formal events. Emily Post's black tie guidance explicitly includes the little black dress. It reads less well at a casual daytime wedding, where it can feel severe. Note that this is a Western convention, and black carries different meanings in other wedding traditions, so check if you are unsure.",
        },
      },
      {
        "@type": "Question",
        name: "What colors should wedding guests avoid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White, ivory, cream, and champagne, since anything that could read as bridal in photographs is best avoided. Also avoid the bridesmaid color if you know it, and anything deliberately attention-grabbing. Keep in mind that color conventions vary by community and family: red features in traditional Chinese and some Indian bridal clothing, while white has mourning associations in some Chinese and Hindu contexts but is also worn by brides. If you are attending a wedding in an unfamiliar tradition, follow the couple's dress code and ask someone close to them whether any colors—including red, white or black—should be avoided.",
        },
      },
      {
        "@type": "Question",
        name: "How can I find the right outfit for a wedding dress code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Translate the code first using the table above, then shop within that formality level rather than browsing broadly. Let the venue and season determine fabric and shoes, not the dress code itself. Slidez helps with the last step by letting you try the outfit on virtually, which matters for an expensive purchase you will be photographed in.",
        },
      },
    ],
  };

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
        <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.05) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-6">
            <span>Blog</span>
            <span>·</span>
            <span>Style Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1] mb-6">
            What to Wear to a Wedding: Outfit Ideas for Different Dress Codes
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every wedding dress code decoded, outfit ideas for men and women at each formality level, beach and outdoor adjustments, and the color rules that matter.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 text-white/50 text-sm font-medium">
            <span>By Slidez AI Team</span>
            <span>·</span>
            <span>November 2026</span>
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
              <nav className="flex flex-col gap-3.5 text-sm font-medium">
                <a href="#understanding-different-wedding-dress-codes" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Understanding Dress Codes</a>
                <a href="#colors-to-avoid-and-why" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Colors to Avoid &amp; Why</a>
                <a href="#what-to-wear-to-a-formal-or-black-tie-wedding" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Formal or Black Tie Outfits</a>
                <a href="#wedding-guest-outfit-ideas-for-semi-formal-and-cocktail-dress-codes" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Semi-Formal &amp; Cocktail Ideas</a>
                <a href="#casual-wedding-outfit-ideas-for-men-and-women" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Casual Wedding Ideas</a>
                <a href="#what-to-wear-to-a-beach-or-outdoor-wedding" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Beach &amp; Outdoor Weddings</a>
                <a href="#how-to-choose-wedding-guest-outfits-based-on-the-season-and-venue" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">By Season &amp; Venue</a>
                <a href="#best-shoes-and-accessories-to-complete-your-wedding-outfit" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Shoes &amp; Accessories</a>
                <a href="#how-to-find-and-try-wedding-guest-outfits-with-slidez" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Find &amp; Try With Slidez</a>
                <a href="#conclusion" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Conclusion</a>
                <a href="#frequently-asked-questions-faqs" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">Frequently Asked Questions (FAQs)</a>
                <a href="#references" className="text-black/60 hover:text-black hover:translate-x-1 transition-all duration-200 block truncate">References</a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-3xl text-black/75 text-lg leading-[1.85]">
            {/* Featured Image */}
            <div className="relative w-full aspect-16/9 rounded-3xl overflow-hidden mb-12 shadow-sm border border-black/5 bg-[#f5f5f5]">
              <Image
                src="/what-to-wear-to-a-wedding.jpg"
                alt="What to Wear to a Wedding: Outfit Ideas for Different Dress Codes"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <p className="mb-6">Wedding invitations use a vocabulary almost nobody is taught. &quot;Black tie optional,&quot; &quot;semi-formal,&quot; &quot;festive,&quot; &quot;dressy casual&quot; all sound like they mean something specific, because they do, and guessing wrong is uncomfortable in both directions.</p>
            <p className="mb-6">The good news is that these codes are genuinely defined rather than vague. Once you know what each one actually specifies, the outfit mostly chooses itself.</p>
            <p className="mb-6">This guide decodes every dress code you are likely to see, with outfit ideas for men and women at each level, plus beach and outdoor weddings, season and venue, and the color rules that apply regardless of code.</p>

            <div className="bg-[#fafafa] p-8 rounded-2xl border border-black/5 my-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-black/80"></div>
              <p className="font-bold text-black mb-3 text-xl tracking-tight">TL;DR</p>
              <p className="text-[17px] text-black/70 m-0 leading-relaxed">Wedding dress codes are defined terms, not suggestions. Match the stated code, avoid white and anything that competes with the wedding party, and let the venue and season adjust fabric rather than formality. <strong><a href="https://hoihf7.short.gy/slidez-ai" className="text-black underline decoration-black/20 hover:decoration-black transition-all">Slidez</a></strong> lets you try wedding guest outfits on virtually before committing to a purchase.</p>
            </div>

            <hr className="my-12 border-black/10" />

            <h2 id="understanding-different-wedding-dress-codes" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">Understanding Different Wedding Dress Codes</h2>
            <p className="mb-6"><strong>Each dress code specifies a formality level, and the Emily Post Institute&apos;s attire guide remains the standard reference for what each one actually requires.</strong> <a href="https://emilypost.com/advice/attire-guide-dress-codes-from-casual-to-white-tie" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-black/20 hover:decoration-black transition-all">[CITATION-1]</a></p>

            <p className="mb-6">Here is the hierarchy, from most to least formal.</p>

            {/* Dress Codes Table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse border border-black/10 rounded-2xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-black/5 text-black font-semibold">
                    <th className="p-4 border-b border-black/10">Dress code</th>
                    <th className="p-4 border-b border-black/10">Women</th>
                    <th className="p-4 border-b border-black/10">Men</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-black/80">
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">White tie</td>
                    <td className="p-4">Floor-length evening gown, long gloves optional</td>
                    <td className="p-4">Black tailcoat, white piqué wing-collar shirt, white vest and bow tie, black patent shoes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">Black tie</td>
                    <td className="p-4">Floor-length gown, dressy cocktail dress, or dressiest little black dress</td>
                    <td className="p-4">Black tuxedo, white pleated or piqué shirt, black bow tie, cummerbund or vest, black patent shoes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">Black tie optional</td>
                    <td className="p-4">Floor-length gown, dressy cocktail dress, or dressy separates</td>
                    <td className="p-4">Tuxedo, or a dark suit with white shirt and conservative tie</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">Creative black tie</td>
                    <td className="p-4">Black tie foundation with room for color and texture</td>
                    <td className="p-4">Tuxedo with latitude: a black shirt, or a colored or patterned bow tie</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">Cocktail</td>
                    <td className="p-4">Knee-length or midi cocktail dress, dressy separates, elegant jumpsuit</td>
                    <td className="p-4">Dark suit, dress shirt, tie usually expected</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">Semi-formal</td>
                    <td className="p-4">Short afternoon or cocktail dress, little black dress, dressy separates</td>
                    <td className="p-4">Dark business suit, dress shirt, tie, leather dress shoes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">Festive</td>
                    <td className="p-4">Cocktail dress or dressy separates, often in seasonal colors</td>
                    <td className="p-4">Sport coat or blazer with slacks, dress shirt, festive tie</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">Dressy casual</td>
                    <td className="p-4">A dress, skirt with dressy top, or dressy pants outfit</td>
                    <td className="p-4">Blazer with slacks, dress shirt or open collar, tie optional</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-black whitespace-nowrap">Casual</td>
                    <td className="p-4">Sundress, nice separates</td>
                    <td className="p-4">Khakis or good trousers, polo or open-collar shirt</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6"><strong>A note on &quot;cocktail.&quot;</strong> Emily Post&apos;s guide does not define cocktail as a standalone code, treating that level of dress within its festive and semi-formal entries, while Debrett&apos;s explicitly defines cocktail attire in its own section. In practice wedding invitations use &quot;cocktail&quot; constantly. Cocktail calls for polished party attire; the expected formality depends on the invitation and setting, often overlapping with semi-formal and black tie optional. The table above reflects how it is commonly used on invitations.</p>

            <p className="mb-6"><strong>When the invitation says nothing,</strong> default to semi-formal for an evening wedding and dressy casual for a daytime one, then adjust based on the venue. A ballroom and a backyard imply different things even with identical wording.</p>

            <p className="mb-6"><strong>Timing shifts formality.</strong> Evening weddings run more formal than daytime ones at the same stated code. For anything after 6pm, err toward the dressier interpretation.</p>

            <h3 id="colors-to-avoid-and-why" className="text-xl font-bold text-black mb-4 mt-10 tracking-tight">Colors to avoid, and why</h3>
            <p className="mb-6"><strong>White, ivory, cream, and champagne.</strong> The near-universal rule at Western weddings. Avoid anything that could read as bridal in photos, including mostly-white florals.</p>
            <p className="mb-6"><strong>Whatever the wedding party is wearing.</strong> If you know the bridesmaid color, do not wear it. You will look like you are in the photos on purpose.</p>
            <p className="mb-6"><strong>Anything that competes for attention.</strong> Sequins at a daytime garden wedding, or a dramatic entrance-making piece, shifts attention in a way most couples do not appreciate.</p>
            <p className="mb-6"><strong>On wearing black:</strong> at most contemporary Western weddings black is entirely acceptable, particularly for evening and formal events, and Emily Post&apos;s own black tie guidance explicitly includes the little black dress. It reads less well at a casual daytime wedding, where it can feel severe.</p>
            <p className="mb-6"><strong>On cultural variation:</strong> Wedding color conventions vary by community and family: red features in traditional Chinese and some Indian bridal clothing, while white has mourning associations in some Chinese and Hindu contexts but is also worn by brides. Follow the couple’s dress code, and ask someone close to them whether any colors—including red, white or black—should be avoided. <a href="https://journals.sagepub.com/doi/10.1177/1359183513483909" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-black/20 hover:decoration-black transition-all">[Ruth E Toulson, 2013]</a></p>

            <hr className="my-12 border-black/10" />

            <h2 id="what-to-wear-to-a-formal-or-black-tie-wedding" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">What to Wear to a Formal or Black Tie Wedding</h2>
            <p className="mb-6"><strong>Black tie is the most prescriptive code, and it is the one where improvising goes wrong most visibly.</strong></p>

            <p className="mb-4"><strong>For women</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Floor-length evening gown:</strong> the safest and most traditional choice</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Dressiest cocktail dress:</strong> acceptable at black tie, particularly for younger guests</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Elegant floor-length jumpsuit:</strong> increasingly accepted at black tie optional, slightly less so at strict black tie</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Fabric matters:</strong> silk, satin, velvet, crepe, and chiffon read formal; cotton and jersey do not</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Jewelry:</strong> this is the occasion for your best pieces</span></li>
            </ul>

            <p className="mb-4"><strong>For men</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Black tie means a tuxedo:</strong> black jacket and matching trousers, white pleated or piqué shirt, black bow tie, cummerbund or vest, black patent shoes.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>A dark suit is not black tie,</strong> though it is acceptable at black tie optional</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Bow tie, not a long tie,</strong> for strict black tie</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>White dinner jacket</strong> is correct in summer, the tropics, or on a cruise</span></li>
            </ul>

            <p className="mb-6"><strong>Formal and black tie optional</strong> give you more room. Women can wear a gown, a dressy cocktail dress, or dressy separates. Men can choose between a tuxedo and a dark suit with a conservative tie. Either is correct, which is the point of the &quot;optional.&quot;</p>

            <hr className="my-12 border-black/10" />

            <h2 id="wedding-guest-outfit-ideas-for-semi-formal-and-cocktail-dress-codes" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">Wedding Guest Outfit Ideas for Semi-Formal and Cocktail Dress Codes</h2>
            <p className="mb-6"><strong>This is the most common wedding dress code and the one with the widest acceptable range.</strong></p>

            <p className="mb-4"><strong>For women</strong></p>
            <ol className="list-decimal pl-6 mb-8 space-y-3 text-black/70">
              <li className="pl-2"><strong>Knee-length or midi cocktail dress</strong> in a solid color or subtle print</li>
              <li className="pl-2"><strong>Dressy jumpsuit</strong> with heels and good jewelry</li>
              <li className="pl-2"><strong>Midi skirt with a silk or embellished top,</strong> which travels and sits better than a dress for some</li>
              <li className="pl-2"><strong>Little black dress</strong> with statement accessories, for evening</li>
              <li className="pl-2"><strong>Elegant separates:</strong> tailored wide-leg trousers with a dressy top</li>
            </ol>

            <p className="mb-4"><strong>For men</strong></p>
            <ol className="list-decimal pl-6 mb-8 space-y-3 text-black/70">
              <li className="pl-2"><strong>Dark suit, dress shirt, tie, leather dress shoes:</strong> the default and always correct.</li>
              <li className="pl-2"><strong>Navy or charcoal suit</strong> over black, which reads less funereal in daytime</li>
              <li className="pl-2"><strong>Lighter grey or blue suit</strong> for daytime and spring or summer weddings</li>
              <li className="pl-2"><strong>Tie expected at cocktail and semi-formal:</strong> open collar reads as a step down.</li>
            </ol>

            <p className="mb-6"><strong>The difference between formal and semi-formal,</strong> which is the most common point of confusion: formal expects a floor-length gown or a tuxedo-adjacent level of dress. Semi-formal expects a cocktail-length dress and a business suit. Formal is evening-weighted; semi-formal works at any hour.</p>

            <hr className="my-12 border-black/10" />

            <h2 id="casual-wedding-outfit-ideas-for-men-and-women" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">Casual Wedding Outfit Ideas for Men and Women</h2>
            <p className="mb-6"><strong>Casual at a wedding is not casual in ordinary life. It means the dressiest end of relaxed, not what you would wear to brunch.</strong></p>

            <p className="mb-4"><strong>For women</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Sundress or midi dress</strong> in a good fabric</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Skirt with a dressy top,</strong> easier to adapt to weather</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Dressy jumpsuit</strong> or well-cut separates</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Flats or block heels,</strong> especially outdoors</span></li>
            </ul>

            <p className="mb-4"><strong>For men</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Chinos or good trousers with a blazer,</strong> tie optional</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Dress shirt or a smart open-collar shirt</strong></span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Loafers or derbies,</strong> not sneakers, even at casual weddings</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Linen or lightweight wool</strong> for warm-weather casual weddings</span></li>
            </ul>

            <p className="mb-6"><strong>What still does not work at a casual wedding:</strong> jeans unless explicitly invited, shorts, flip-flops, visible logos, or anything you would wear to the gym. &quot;Casual&quot; on a wedding invitation is doing a lot of lifting relative to the everyday meaning.</p>

            <hr className="my-12 border-black/10" />

            <h2 id="what-to-wear-to-a-beach-or-outdoor-wedding" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">What to Wear to a Beach or Outdoor Wedding</h2>
            <p className="mb-6"><strong>Outdoor weddings change the practical constraints more than the formality level, and the ground is usually the deciding factor.</strong></p>

            <p className="mb-4"><strong>For women</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Flowing midi or maxi dress</strong> in a light fabric: chiffon, linen blend, lightweight crepe</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Block heels, wedges, or dressy flats:</strong> stilettos sink into grass and sand, which is the most common outdoor wedding mistake</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>A wrap or pashmina</strong> for when the temperature drops after sunset</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Consider the wind</strong> if the ceremony is on a beach or clifftop. Very light fabrics and short hemlines both become a problem.</span></li>
            </ul>

            <p className="mb-4"><strong>For men</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Lightweight suit in linen, cotton, or tropical wool</strong></span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Lighter colors:</strong> tan, light grey, pale blue all suit outdoor daytime settings</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Loafers or suede shoes:</strong> leave patent leather for indoor formal</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>A linen or cotton shirt,</strong> since heavy poplin gets uncomfortable fast in sun</span></li>
            </ul>

            <p className="mb-4"><strong>Beach-specific notes:</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Sand ruins thin heels and fine leather:</strong> flat or wedge, every time</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Beach formal still means formal:</strong> it adjusts the fabric and the shoe, not the dress code</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Bring sunglasses and consider sun exposure,</strong> since outdoor ceremonies often have no shade</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Evening outdoor weddings get cold</strong> faster than people plan for, even in summer</span></li>
            </ul>

            <hr className="my-12 border-black/10" />

            <h2 id="how-to-choose-wedding-guest-outfits-based-on-the-season-and-venue" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">How to Choose Wedding Guest Outfits Based on the Season and Venue</h2>
            <p className="mb-6"><strong>Season and venue should change your fabric, color, and shoes. They should not change the dress code.</strong></p>
            <p className="mb-6">This is the most useful distinction to hold onto. A black tie wedding in July is still black tie; it just calls for lighter fabric.</p>

            <p className="mb-4"><strong>By season</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Spring:</strong> lighter colors, florals, midweight fabrics. Bring a layer for evening.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Summer:</strong> linen, cotton, lightweight silk. Avoid heavy synthetics, which do not breathe.</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Fall:</strong> richer colors (burgundy, forest, navy, rust), velvet, heavier crepe and wool</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Winter:</strong> velvet, heavier fabrics, long sleeves, and a coat good enough to be photographed in</span></li>
            </ul>

            <p className="mb-4"><strong>By venue</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Ballroom or hotel:</strong> the most formal interpretation of whatever code is stated</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Place of worship:</strong> check whether shoulders or knees need covering, which many still expect</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Barn, farm, or vineyard:</strong> block heels or flats, and expect uneven ground</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Garden or estate:</strong> grass means no stilettos; bring a layer for the evening</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Beach:</strong> covered above</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Restaurant or small venue:</strong> usually a step less formal, and you will be seated close to others</span></li>
            </ul>

            <p className="mb-4"><strong>Two things people forget</strong></p>
            <p className="mb-6"><strong>The outerwear is part of the outfit.</strong> For a winter wedding you will be photographed arriving, and a practical parka over a formal dress is the most common gap.</p>
            <p className="mb-6"><strong>You will be in these clothes for eight to twelve hours,</strong> including a ceremony, a meal, and dancing. Comfort is not a lesser consideration at a wedding; it is central.</p>

            <hr className="my-12 border-black/10" />

            <h2 id="best-shoes-and-accessories-to-complete-your-wedding-outfit" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">Best Shoes and Accessories to Complete Your Wedding Outfit</h2>
            <p className="mb-6"><strong>Shoes should match the formality of the code and the reality of the ground, and those two requirements conflict more often than people expect.</strong></p>

            <p className="mb-4"><strong>Shoes</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Heels for formal and black tie,</strong> with block heels a legitimate option at every level</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Dressy flats</strong> are entirely acceptable and increasingly common</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Loafers, oxfords, or derbies for men,</strong> polished, with patent leather reserved for black tie</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Check the ground before choosing:</strong> grass, sand, cobblestones, and gravel all rule out thin heels</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Break them in first:</strong> a wedding is a long day on your feet and new shoes are a predictable mistake</span></li>
            </ul>

            <p className="mb-4"><strong>Accessories</strong></p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>A small clutch or evening bag:</strong> most venues have nowhere to put a large bag</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Statement jewelry</strong> if the outfit is simple, understated jewelry if the outfit is not</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>A wrap, pashmina, or tailored coat</strong> for evening, outdoor, or winter weddings</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Cufflinks and a pocket square</strong> for men at formal and black tie</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>A fascinator or hat</strong> at traditional British weddings, where they remain common</span></li>
            </ul>

            <p className="mb-6"><strong>Practical items worth bringing:</strong> blister plasters, a backup hair tie, and a compact umbrella if the forecast is uncertain. These matter more over a twelve-hour day than any styling decision.</p>

            <hr className="my-12 border-black/10" />

            <h2 id="how-to-find-and-try-wedding-guest-outfits-with-slidez" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">How to Find and Try Wedding Guest Outfits With Slidez</h2>
            <p className="mb-6"><strong>Wedding outfits carry more pressure than most purchases: they are expensive, worn once, photographed extensively, and often bought online under time constraints.</strong></p>
            <p className="mb-6">That combination makes the usual problem worse. You cannot easily judge whether a formal dress or suit will work on you from a product photo of a model.</p>

            <p className="mb-4"><strong><a href="https://www.slidez.social/" className="text-black underline decoration-black/20 hover:decoration-black transition-all">Slidez</a></strong> addresses this directly:</p>
            <ul className="list-none pl-2 mb-8 space-y-3 text-black/70">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Virtual try-on:</strong> see a formal outfit rendered on your own body before buying</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Automatic body analysis:</strong> the AI stylist factors your body type into recommendations from your photo, with no quiz or measurements</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Chrome extension:</strong> try on pieces from any online store, which matters when occasionwear comes from retailers you do not normally shop</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Social import:</strong> bring in a look you saved from Pinterest or Instagram and try the pieces on</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-black/40 mt-2.5 shrink-0"></span><span><strong>Save and sync:</strong> compare several options across phone and desktop before deciding</span></li>
            </ul>

            <p className="mb-6">For an outfit this visible, checking it on yourself before it ships removes most of the risk.</p>
            <p className="mb-6"><strong>Ready to find your wedding guest outfit?</strong> 👉 <strong><a href="https://hoihf7.short.gy/slidez-ai" className="text-black underline decoration-black/20 hover:decoration-black transition-all">Download Slidez free</a></strong>.</p>

            <hr className="my-12 border-black/10" />

            <h2 id="conclusion" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">Conclusion</h2>
            <p className="mb-6">Wedding dress codes are defined terms, so the work is mostly translation rather than taste. Match the stated code, let the venue and season change your fabric and shoes rather than your formality, and avoid white and anything close to it.</p>
            <p className="mb-6">Then choose for the length of the day. You will be in this outfit for twelve hours across a ceremony, a meal, and a dance floor, and comfort is part of looking good in the photographs.</p>
            <p className="mb-6"><strong><a href="https://hoihf7.short.gy/slidez-ai" className="text-black underline decoration-black/20 hover:decoration-black transition-all">Slidez</a></strong> takes the guesswork out of an expensive, one-time purchase. Try the outfit on virtually, confirm it works on your body, and buy with confidence. The free version includes all core features.</p>
            <p className="mb-6"><strong>Ready to plan your wedding guest look?</strong> 👉 <strong><a href="https://hoihf7.short.gy/slidez-ai" className="text-black underline decoration-black/20 hover:decoration-black transition-all">Download Slidez free</a></strong>.</p>

            <hr className="my-12 border-black/10" />

            <h2 id="frequently-asked-questions-faqs" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">Frequently Asked Questions (FAQs)</h2>

            <div className="space-y-8 my-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-3">What should I wear to a wedding as a guest?</h3>
                <p className="mb-4">Start with the dress code on the invitation, since these are defined terms rather than suggestions. If none is stated, default to semi-formal for an evening wedding and dressy casual for a daytime one, then adjust for the venue.</p>
                <p>Avoid white, ivory, cream, and the bridesmaid color. <strong><a href="https://www.slidez.social/" className="text-black underline decoration-black/20 hover:decoration-black transition-all">Slidez</a></strong> can show you how an outfit looks on your own body before you commit to buying it.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">What is the difference between formal and semi-formal wedding attire?</h3>
                <p className="mb-4">Formal expects a floor-length gown for women and a tuxedo or very dark formal suit for men, and it is weighted toward evening events.</p>
                <p>Semi-formal expects a cocktail-length dress or dressy separates for women and a dark business suit with a tie for men. Semi-formal works at any hour, while formal is less common for daytime weddings.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">What should women wear to a black tie wedding?</h3>
                <p className="mb-4">A floor-length evening gown is the safest and most traditional option. A dressy cocktail dress or the dressiest version of a little black dress is also acceptable, and Emily Post&apos;s guidance explicitly allows both.</p>
                <p>Fabric carries the formality: silk, satin, velvet, crepe, and chiffon read formal, while cotton and jersey do not. This is the occasion for your best jewelry.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">What should men wear to a cocktail wedding?</h3>
                <p className="mb-4">A dark suit with a dress shirt and a tie. Navy or charcoal generally works better than black for daytime, and leather dress shoes complete it.</p>
                <p>A tie is expected at cocktail and semi-formal. Going open-collar reads as a step down in formality, which is noticeable when other guests have followed the code.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">What should I wear to a beach wedding?</h3>
                <p className="mb-4">Light fabrics and flat or wedge shoes. For women, a flowing midi or maxi in chiffon or a linen blend; for men, a lightweight linen or cotton suit in a lighter color with loafers or suede shoes.</p>
                <p>Sand and thin heels do not work, so wedges or dressy flats are the practical choice. Bring a wrap, since outdoor evenings get cold faster than people expect even in summer.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">Can I wear black to a wedding?</h3>
                <p className="mb-4">At most contemporary Western weddings, yes, particularly for evening and formal events. Emily Post&apos;s black tie guidance explicitly includes the little black dress.</p>
                <p>It reads less well at a casual daytime wedding, where it can feel severe. Note that this is a Western convention, and black carries different meanings in other wedding traditions, so check if you are unsure.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">What colors should wedding guests avoid?</h3>
                <p className="mb-4">White, ivory, cream, and champagne, since anything that could read as bridal in photographs is best avoided. Also avoid the bridesmaid color if you know it, and anything deliberately attention-grabbing.</p>
                <p className="mb-4">These are Western conventions and do not transfer universally. Wedding color conventions vary by community and family: red features in traditional Chinese and some Indian bridal clothing, while white has mourning associations in some Chinese and Hindu contexts but is also worn by brides.</p>
                <p>If you are attending a wedding in an unfamiliar tradition, follow the couple’s dress code and ask someone close to them whether any colors—including red, white or black—should be avoided.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-3">How can I find the right outfit for a wedding dress code?</h3>
                <p className="mb-4">Translate the code first using the table above, then shop within that formality level rather than browsing broadly. Let the venue and season determine fabric and shoes, not the dress code itself.</p>
                <p><strong><a href="https://hoihf7.short.gy/slidez-ai" className="text-black underline decoration-black/20 hover:decoration-black transition-all">Slidez</a></strong> helps with the last step by letting you try the outfit on virtually, which matters for an expensive purchase you will be photographed in.</p>
              </div>
            </div>

            <hr className="my-12 border-black/10" />

            <p className="mb-6 italic">Ready to see your wedding outfit on yourself first? 👉 <strong><a href="https://hoihf7.short.gy/slidez-ai" className="text-black underline decoration-black/20 hover:decoration-black transition-all">Download Slidez free</a></strong>.</p>

            <hr className="my-12 border-black/10" />

            <h2 id="references" className="text-[2rem] font-bold text-black mb-6 mt-16 tracking-tight scroll-mt-32">References</h2>
            <ol className="list-decimal pl-6 mb-8 space-y-3 text-black/70 text-base">
              <li className="pl-2"><strong>[CITATION-1]:</strong> The Emily Post Institute, &quot;Attire Guide: Dress Codes from Casual to White Tie.&quot; <a href="https://emilypost.com/advice/attire-guide-dress-codes-from-casual-to-white-tie" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-black/20 hover:decoration-black transition-all">https://emilypost.com/advice/attire-guide-dress-codes-from-casual-to-white-tie</a></li>
              <li className="pl-2"><strong>[CITATION-1 Supplement]:</strong> Debrett&apos;s, &quot;Deconstructing Dress Codes.&quot; <a href="https://debretts.com/deconstructing-dress-codes/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-black/20 hover:decoration-black transition-all">https://debretts.com/deconstructing-dress-codes/</a></li>
              <li className="pl-2"><strong>[CITATION-2]:</strong> Ruth E. Toulson, &quot;The meanings of red envelopes: Promises and lies at a Singaporean Chinese funeral,&quot; <em>Journal of Material Culture</em>, vol. 18, no. 2, 2013. <a href="https://journals.sagepub.com/doi/10.1177/1359183513483909" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-black/20 hover:decoration-black transition-all">https://journals.sagepub.com/doi/10.1177/1359183513483909</a></li>
            </ol>
          </article>
        </div>
      </section>

      <BlogProductLinks />
      <Footer />
    </main>
  );
}
