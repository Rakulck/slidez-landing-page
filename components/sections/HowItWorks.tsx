"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { StylistVisual, ImportVisual } from "@/components/ui/feature-visuals";

/* ─── Phone mockup sub-components ─────────────────────────────── */

function TryOnPhone() {
  return (
    <div className="relative mx-auto w-56 h-[440px] rounded-[38px] border border-[rgba(192,192,192,0.25)] bg-[#0f0f0f] shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(192,192,192,0.1)] overflow-hidden">
      {/* Video fills the entire phone */}
      <video
        src="/videos/try-on-demo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Subtle gradient overlay at top/bottom for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 pointer-events-none" />
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0f0f0f] rounded-b-2xl z-10" />
    </div>
  );
}

function StylistPhone() {
  return (
    <div className="relative w-full h-[560px]">
      <StylistVisual />
    </div>
  );
}

function ImportPhone() {
  return (
    <div className="relative w-full h-[560px]">
      <ImportVisual />
    </div>
  );
}

/* ─── Mini FAQ ─────────────────────────────────────────────────── */

function MiniFAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 py-3 text-left group"
      >
        <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-200">
          {q}
        </span>
        <span className="shrink-0 w-6 h-6 rounded-full border border-white/[0.12] flex items-center justify-center text-white/30 group-hover:border-white/25 group-hover:text-white/55 transition-all duration-200">
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-3 text-sm text-white/30 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────── */

const blocks = [
  {
    id: "virtual-try-on",
    label: "Virtual Try-On",
    heading: "Get the perfect look.",
    body: "Upload your photo once. Slidez builds your AI body model, precise to your shape and proportions. Browse any outfit and see it placed on your body, realistically. Lighting, fit, proportion: all accurate.",
    cta: "Try It Free",
    learnMore: "/ai-virtual-try-on",
    phone: TryOnPhone,
    reverse: false,
    white: false,
    faqs: [
      {
        q: "How accurate is virtual try-on?",
        a: "Slidez uses AI image modeling to realistically preview how clothes look on your body before buying.",
      },
      {
        q: "Can I try clothes from other websites?",
        a: "With Slidez you can generate outfits inspired by styles from social media and online stores.",
      },
    ],
  },
  {
    id: "ai-stylist",
    label: "AI Stylist",
    heading: "Your stylist, always on.",
    body: "Tell Slidez your plans. 'Style me for a job interview.' 'Black tie, but edgy.' Your AI Stylist assembles a complete look, head to toe, in seconds. Adjust until it's exactly right.",
    cta: "Meet Your Stylist",
    learnMore: "/ai-stylist",
    phone: StylistPhone,
    reverse: true,
    white: false,
    faqs: [
      {
        q: "Can AI generate outfits automatically?",
        a: "Yes. Slidez AI Stylist can generate complete outfits based on your preferences, occasions, and trends.",
      },
      {
        q: "Can AI style outfits for different occasions?",
        a: "Yes. You can generate outfits for events like work, parties, travel, or casual everyday wear.",
      },
    ],
  },
  {
    id: "import-outfits",
    label: "Import Outfits",
    heading: "Found it online? Try it on instantly.",
    body: "See something you love on Instagram, Pinterest, or any shopping site. Share it to Slidez. See it on your body before you buy, from any brand, any store, anywhere on the web.",
    cta: "See How It Works",
    learnMore: "/try-on-from-anywhere",
    phone: ImportPhone,
    reverse: false,
    white: false,
    faqs: [
      {
        q: "How does importing outfits work?",
        a: "If you find an outfit on Instagram, Pinterest, or any shopping website, simply share it to Slidez or upload the image. Slidez will identify the clothing and let you try it on instantly using AI virtual try-on.",
      },
      {
        q: "What websites or apps can I import outfits from?",
        a: "You can import outfits from Instagram, Pinterest, and most online shopping websites. If you can share or upload the image, you can try it on with Slidez.",
      },
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-label="How Slidez Works" className="bg-[#0b0b0b]">
      {blocks.map((block, i) => {
        const PhoneComponent = block.phone;
        const isSecond = i === 1;
        return (
          <div
            key={block.label}
            id={block.id}
            className={`relative py-24 px-6 border-b ${
              block.white
                ? "bg-white border-black/[0.06]"
                : "bg-[#080808] border-white/[0.05]"
            }`}
          >
            {isSecond && (
              <GlowingEffect
                spread={50}
                glow={true}
                disabled={false}
                proximity={80}
                inactiveZone={0.01}
                borderWidth={2}
              />
            )}

            <div className="max-w-6xl mx-auto">
              <div
                className={`flex flex-col ${
                  block.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-16 md:gap-20`}
              >
                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: block.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 max-w-lg"
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-5 ${block.white ? "text-[#888]" : "text-[#c0c0c0]"}`}>
                    {block.label}
                  </p>
                  <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight whitespace-pre-line ${block.white ? "text-black" : "text-white"}`}>
                    {block.heading}
                  </h2>
                  <p className={`text-lg leading-relaxed mb-8 ${block.white ? "text-black/55" : "text-white/50"}`}>{block.body}</p>

                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full
                        hover:scale-[1.05] hover:-translate-y-px active:scale-[0.97] transition-all duration-200 cursor-pointer ${
                        block.white
                          ? "bg-black text-white hover:bg-[#111] shadow-[0_2px_16px_rgba(0,0,0,0.2),0_1px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.28)]"
                          : "bg-white text-black hover:bg-[#f0f0f0] shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_4px_24px_rgba(255,255,255,0.45),0_2px_8px_rgba(0,0,0,0.2)]"
                      }`}
                    >
                      {block.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    {"learnMore" in block && block.learnMore && (
                      <a
                        href={block.learnMore}
                        className={`inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium rounded-full border transition-all duration-200 hover:scale-[1.04] hover:-translate-y-px ${
                          block.white
                            ? "border-black/15 text-black/50 hover:border-black/30 hover:text-black"
                            : "border-white/15 text-white/45 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        Learn more
                      </a>
                    )}
                  </div>

                  {block.faqs && (
                    <div className="mt-8 border-t border-white/[0.07] pt-2">
                      {block.faqs.map((faq) => (
                        <MiniFAQItem key={faq.q} q={faq.q} a={faq.a} />
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Phone visual */}
                <motion.div
                  initial={{ opacity: 0, x: block.reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 flex items-center justify-center w-full"
                >
                  <PhoneComponent />
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
