"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Share2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* ─── Phone mockup sub-components ─────────────────────────────── */

function TryOnPhone() {
  return (
    <div className="relative mx-auto w-56 h-[440px] rounded-[38px] border border-[rgba(192,192,192,0.16)] bg-[#0f0f0f] shadow-2xl overflow-hidden">
      <div className="absolute inset-0 flex flex-col p-5 gap-3">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/40 font-medium">Virtual Try-On</span>
          <div className="w-5 h-5 rounded-full gradient-silver" />
        </div>

        {/* Try-on preview */}
        <div className="flex-1 rounded-2xl bg-[rgba(192,192,192,0.05)] border border-[rgba(192,192,192,0.1)] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0" style={{background:"radial-gradient(ellipse at top, rgba(192,192,192,0.06) 0%, transparent 70%)"}} />
          {/* Figure */}
          <div className="flex flex-col items-center gap-1 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[rgba(192,192,192,0.25)]" />
            <div className="w-14 h-20 rounded-xl bg-[rgba(192,192,192,0.15)] border border-[rgba(192,192,192,0.2)] flex items-center justify-center">
              <div className="w-8 h-12 rounded-lg gradient-silver opacity-60" />
            </div>
            <div className="flex gap-1.5">
              <div className="w-5 h-10 rounded-b-lg bg-[rgba(192,192,192,0.12)]" />
              <div className="w-5 h-10 rounded-b-lg bg-[rgba(192,192,192,0.12)]" />
            </div>
          </div>
          {/* AI badge */}
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full bg-[rgba(192,192,192,0.12)] border border-[rgba(192,192,192,0.2)] text-[9px] text-[#c0c0c0] font-medium">
            AI Fit
          </div>
        </div>

        {/* Outfit selector */}
        <div className="flex gap-2">
          {[0.22, 0.12, 0.08].map((op, i) => (
            <div
              key={i}
              className="flex-1 h-12 rounded-xl border"
              style={{ background: `rgba(192,192,192,${op})`, borderColor: `rgba(192,192,192,${i === 0 ? 0.4 : 0.1})` }}
            />
          ))}
        </div>

        {/* Button */}
        <div className="h-10 rounded-2xl gradient-silver flex items-center justify-center">
          <span className="text-black text-xs font-semibold">Try On</span>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0f0f0f] rounded-b-2xl z-10" />
    </div>
  );
}

function StylistPhone() {
  const prompts = ["Style me for a date night 💃", "Business casual, but edgy ✨", "Beach vacation look 🌊"];
  return (
    <div className="relative mx-auto w-56 h-[440px] rounded-[38px] border border-[rgba(192,192,192,0.16)] bg-[#0f0f0f] shadow-2xl overflow-hidden">
      <div className="absolute inset-0 flex flex-col p-5 gap-3">
        {/* Top */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full gradient-silver flex items-center justify-center">
            <Sparkles className="w-2.5 h-2.5 text-black" />
          </div>
          <span className="text-[11px] text-white/40 font-medium">AI Stylist</span>
        </div>

        {/* Prompt bubbles */}
        <div className="flex flex-col gap-2">
          {prompts.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className={`px-3 py-2 rounded-2xl text-[10px] leading-snug font-medium ${
                i === 0
                  ? "bg-white text-black self-end"
                  : "bg-[rgba(192,192,192,0.1)] text-white/60 self-start"
              }`}
            >
              {p}
            </motion.div>
          ))}
        </div>

        {/* Outfit result cards */}
        <div className="flex-1 grid grid-cols-2 gap-2 mt-1">
          {["Top", "Bottom", "Shoes", "Bag"].map((piece, i) => (
            <div
              key={piece}
              className="rounded-xl bg-[rgba(192,192,192,0.07)] border border-[rgba(192,192,192,0.1)] flex flex-col items-center justify-center gap-1 p-2"
            >
              <div
                className="w-7 h-7 rounded-lg"
                style={{ background: `rgba(192,192,192,${0.1 + i * 0.04})` }}
              />
              <span className="text-[9px] text-white/30">{piece}</span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="h-9 rounded-2xl border border-[rgba(192,192,192,0.15)] bg-[rgba(192,192,192,0.05)] flex items-center px-3">
          <span className="text-[10px] text-white/25">Ask your stylist…</span>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0f0f0f] rounded-b-2xl z-10" />
    </div>
  );
}

function ImportPhone() {
  return (
    <div className="relative mx-auto w-56 h-[440px] rounded-[38px] border border-[rgba(192,192,192,0.16)] bg-[#0f0f0f] shadow-2xl overflow-hidden">
      <div className="absolute inset-0 flex flex-col p-5 gap-3">
        {/* Top */}
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4 text-[#c0c0c0]" />
          <span className="text-[11px] text-white/40 font-medium">Import Outfit</span>
        </div>

        {/* Source card */}
        <div className="rounded-2xl border border-[rgba(192,192,192,0.12)] bg-[rgba(192,192,192,0.05)] p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[rgba(192,192,192,0.15)] flex items-center justify-center shrink-0">
            <span className="text-[10px] text-[#c0c0c0] font-bold">IG</span>
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="h-2 bg-[rgba(192,192,192,0.25)] rounded w-3/4" />
            <div className="h-1.5 bg-[rgba(192,192,192,0.1)] rounded w-1/2" />
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="h-5 w-px bg-[rgba(192,192,192,0.2)]" />
            <div className="w-5 h-5 rounded-full gradient-silver flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-black rotate-90" />
            </div>
            <div className="h-5 w-px bg-[rgba(192,192,192,0.2)]" />
          </div>
        </div>

        {/* Try-on result */}
        <div className="flex-1 rounded-2xl bg-[rgba(192,192,192,0.05)] border border-[rgba(192,192,192,0.1)] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="flex flex-col items-center gap-1">
            <div className="w-7 h-7 rounded-full bg-[rgba(192,192,192,0.2)]" />
            <div className="w-12 h-16 rounded-xl bg-[rgba(192,192,192,0.12)] border border-[rgba(192,192,192,0.18)]" />
            <div className="flex gap-1">
              <div className="w-4.5 h-8 rounded-b-lg bg-[rgba(192,192,192,0.1)]" />
              <div className="w-4.5 h-8 rounded-b-lg bg-[rgba(192,192,192,0.1)]" />
            </div>
          </div>
          <div className="absolute bottom-2 inset-x-3">
            <div className="h-7 rounded-xl gradient-silver flex items-center justify-center">
              <span className="text-black text-[10px] font-semibold">Import & Try On</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0f0f0f] rounded-b-2xl z-10" />
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────── */

const blocks = [
  {
    label: "Virtual Try-On",
    heading: "Get the perfect look.",
    body: "Upload your photo once. Slidez builds your AI body model — precise to your shape and proportions. Browse any outfit and see it placed on your body, realistically. Lighting, fit, proportion — all accurate.",
    cta: "Try It Free",
    phone: TryOnPhone,
    reverse: false,
    white: false,
  },
  {
    label: "AI Stylist",
    heading: "Your stylist, always on.",
    body: "Tell Slidez your plans. 'Style me for a job interview.' 'Black tie, but edgy.' Your AI Stylist assembles a complete look — head to toe — in seconds. Adjust until it's exactly right.",
    cta: "Meet Your Stylist",
    phone: StylistPhone,
    reverse: true,
    white: false,
  },
  {
    label: "Import Outfits",
    heading: "Try it on from anywhere.",
    body: "See something you love on Instagram, Pinterest, or any shopping site. Share it to Slidez. See it on your body before you buy — from any brand, any store, anywhere on the web.",
    cta: "See How It Works",
    phone: ImportPhone,
    reverse: false,
    white: false,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0b0b0b]">
      {blocks.map((block, i) => {
        const PhoneComponent = block.phone;
        const isSecond = i === 1;
        return (
          <div
            key={block.label}
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
                  <h2 className={`text-[11px] font-semibold uppercase tracking-[0.2em] mb-5 ${block.white ? "text-[#888]" : "text-[#c0c0c0]"}`}>
                    {block.label}
                  </h2>
                  <h3 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight ${block.white ? "text-black" : "text-white"}`}>
                    {block.heading}
                  </h3>
                  <p className={`text-lg leading-relaxed mb-8 ${block.white ? "text-black/55" : "text-white/50"}`}>{block.body}</p>
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
