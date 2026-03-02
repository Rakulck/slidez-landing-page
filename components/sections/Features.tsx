"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

/* ── Animated visuals ─────────────────────────────────────────── */

function TryOnVisual() {
  const outfitPieces = [
    { label: "Top", delay: 0.3, y: -60 },
    { label: "Bottom", delay: 0.6, y: -40 },
    { label: "Shoes", delay: 0.9, y: -20 },
  ];

  return (
    <div className="relative flex items-center justify-center h-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-48 rounded-full bg-[rgba(192,192,192,0.08)] blur-2xl"
        />
      </div>

      <div className="relative flex flex-col items-center gap-1 z-10">
        <div className="w-9 h-9 rounded-full bg-[rgba(192,192,192,0.2)] border border-[rgba(192,192,192,0.25)]" />
        <div className="relative w-16 h-24 rounded-2xl bg-[rgba(192,192,192,0.08)] border border-[rgba(192,192,192,0.15)] overflow-hidden">
          {outfitPieces.slice(0, 2).map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ y: p.y, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: p.delay,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                repeat: Infinity,
                repeatDelay: 2.5,
                repeatType: "loop",
              }}
              className={`absolute inset-x-0 ${i === 0 ? "top-0 h-1/2" : "bottom-0 h-1/2"} gradient-silver opacity-70`}
            />
          ))}
        </div>
        <div className="flex gap-1.5">
          {[0, 1].map((l) => (
            <div key={l} className="w-6 h-12 rounded-b-xl bg-[rgba(192,192,192,0.1)] border border-[rgba(192,192,192,0.12)] relative overflow-hidden">
              <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  repeatType: "loop",
                }}
                className="absolute inset-0 gradient-silver opacity-60"
              />
            </div>
          ))}
        </div>
      </div>

      {outfitPieces.map((p, i) => (
        <motion.div
          key={p.label}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          animate={{ opacity: [0, 1, 1, 0], x: 0 }}
          transition={{
            delay: p.delay,
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 1.5,
            repeatType: "loop",
          }}
          className="absolute px-2.5 py-1 rounded-full border border-[rgba(192,192,192,0.25)] bg-[rgba(192,192,192,0.08)] text-[10px] text-[#c0c0c0] font-medium"
          style={{ top: `${20 + i * 28}%`, [i % 2 === 0 ? "left" : "right"]: "8%" }}
        >
          {p.label}
        </motion.div>
      ))}
    </div>
  );
}

function StylistVisual() {
  return (
    <div className="flex flex-col justify-center gap-3 px-4 h-full">
      <div className="self-end max-w-[85%] px-3 py-2 rounded-2xl rounded-br-sm bg-white text-black text-[11px] font-medium leading-snug">
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 3 }}
        >
          Style me for a date night ✨
        </motion.span>
      </div>

      <div className="flex flex-col gap-1.5">
        {["Black slip dress", "Strappy heels", "Gold hoops"].map((piece, i) => (
          <motion.div
            key={piece}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5 + i * 0.2,
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 3.5,
              repeatType: "loop",
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[rgba(192,192,192,0.07)] border border-[rgba(192,192,192,0.12)]"
          >
            <div className="w-5 h-5 rounded-md gradient-silver shrink-0" />
            <span className="text-[11px] text-white/60">{piece}</span>
          </motion.div>
        ))}
      </div>

      <div className="self-start flex items-center gap-1.5 px-3 py-2 rounded-2xl rounded-bl-sm bg-[rgba(192,192,192,0.06)] border border-[rgba(192,192,192,0.1)]">
        {[0, 1, 2].map((d) => (
          <motion.div
            key={d}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, delay: d * 0.2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#c0c0c0]"
          />
        ))}
      </div>
    </div>
  );
}

function ImportVisual() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-full px-3">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3, repeatType: "loop" }}
        className="w-full px-3 py-2.5 rounded-xl border border-[rgba(192,192,192,0.15)] bg-[rgba(192,192,192,0.05)] flex items-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-lg bg-[rgba(192,192,192,0.15)] flex items-center justify-center shrink-0">
          <span className="text-[9px] font-bold text-[#c0c0c0]">IG</span>
        </div>
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="h-1.5 bg-[rgba(192,192,192,0.3)] rounded w-3/4" />
          <div className="h-1.5 bg-[rgba(192,192,192,0.15)] rounded w-1/2" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-0.5"
      >
        <div className="w-px h-4 bg-[rgba(192,192,192,0.25)]" />
        <div className="w-5 h-5 rounded-full gradient-silver flex items-center justify-center">
          <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, repeat: Infinity, repeatDelay: 3, repeatType: "loop" }}
        className="w-full px-3 py-2.5 rounded-xl border border-[rgba(192,192,192,0.3)] bg-[rgba(192,192,192,0.08)] flex items-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-lg gradient-silver shrink-0" />
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-1.5 bg-white/40 rounded w-2/3" />
          <div className="h-1.5 bg-white/20 rounded w-1/2" />
        </div>
        <span className="text-[9px] text-[#c0c0c0] font-semibold shrink-0">Try On</span>
      </motion.div>
    </div>
  );
}

function BuyVisual() {
  const cards = [
    { name: "Date Night", color: "#1a1a1a" },
    { name: "Work Look",  color: "#252525" },
    { name: "Weekend",    color: "#2e2e2e" },
  ];

  return (
    <div className="relative flex items-center justify-center h-full gap-3 overflow-hidden">
      {cards.map((card, i) => (
        <motion.div
          key={card.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            repeat: Infinity,
            repeatDelay: 3,
            repeatType: "loop",
          }}
          className="flex flex-col rounded-2xl border border-[rgba(192,192,192,0.15)] overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${card.color} 0%, #0a0a0a 100%)` }}
        >
          <div className="w-20 h-24 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-[rgba(192,192,192,0.2)]" />
              <div className="w-8 h-12 rounded-lg gradient-silver opacity-50" />
            </div>
          </div>
          <div className="px-2 py-2 border-t border-[rgba(192,192,192,0.1)]">
            <p className="text-[9px] text-white/50 text-center">{card.name}</p>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.1, 1, 1] }}
        transition={{
          delay: 0.8,
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 2,
          repeatType: "loop",
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full gradient-silver"
      >
        <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-[10px] text-black font-bold">Purchased</span>
      </motion.div>
    </div>
  );
}

/* ── Bento grid ───────────────────────────────────────────────── */
const bentoCards = [
  {
    label: "Virtual Try-On",
    title: "See it on you.",
    description: "AI places any outfit on your body — realistic fit, proportions, and lighting.",
    visual: TryOnVisual,
    colSpan: "lg:col-span-2",
    visualHeight: "h-64",
  },
  {
    label: "AI Stylist",
    title: "Ask. Receive.",
    description: "Prompt your look and get a full outfit built in seconds.",
    visual: StylistVisual,
    colSpan: "lg:col-span-1",
    visualHeight: "h-64",
  },
  {
    label: "Import Outfits",
    title: "Try from anywhere.",
    description: "Spot something on Instagram or any site — import it and try it on instantly.",
    visual: ImportVisual,
    colSpan: "lg:col-span-1",
    visualHeight: "h-64",
  },
  {
    label: "Buy with Confidence",
    title: "No more guessing.",
    description: "See it. Love it. Buy it. Zero uncertainty at checkout.",
    visual: BuyVisual,
    colSpan: "lg:col-span-2",
    visualHeight: "h-64",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
<h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-5">
            Everything in your pocket.
          </h2>
          <p className="text-black/50 text-lg max-w-md mx-auto">
            From upload to checkout — the complete fitting room, on your phone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bentoCards.map((card, i) => {
            const Visual = card.visual;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className={`${card.colSpan} relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#0f0f0f] hover:border-[rgba(192,192,192,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-colors duration-300 cursor-pointer`}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={4}
                />
                <div className="flex flex-col rounded-2xl overflow-hidden">
                  <div className={`${card.visualHeight} bg-[#0c0c0c] border-b border-[rgba(255,255,255,0.05)]`}>
                    <Visual />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#555] mb-2">
                      {card.label}
                    </p>
                    <h3 className="text-white font-semibold text-lg mb-1.5">{card.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
