"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { StylistVisual, ImportVisual } from "@/components/ui/feature-visuals";

/* ── Animated visuals ─────────────────────────────────────────── */

function TryOnVisual() {
  const [phase, setPhase] = useState<"front" | "result">("front");
  const [showButton, setShowButton] = useState(false);
  const [merging, setMerging] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (phase !== "front") return;
    setShowButton(false);
    setMerging(false);
    const t1 = setTimeout(() => setShowButton(true), 700);
    const t2 = setTimeout(() => setMerging(true), 1800);
    const t3 = setTimeout(() => setPhase("result"), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [phase, cycle]);

  useEffect(() => {
    if (phase === "result") {
      const t = setTimeout(() => { setPhase("front"); setCycle((c) => c + 1); }, 2500);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence mode="sync">

        {/* ── Front: user + outfit cards ── */}
        {phase === "front" && (
          <motion.div
            key={`front-${cycle}`}
            className="absolute inset-0 flex items-center justify-center gap-3 px-6"
            exit={{ opacity: 0, scale: 1.04, filter: "blur(5px)", transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
          >
            {/* User image */}
            <motion.div
              className="flex flex-col rounded-2xl border border-[rgba(192,192,192,0.15)] overflow-hidden shrink-0"
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: merging ? 0 : 1, x: merging ? 16 : 0, scale: merging ? 0.82 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-20 h-[88px] overflow-hidden">
                <img src="/model-woman.jpg" alt="You" className="w-full h-full object-cover object-top" />
              </div>
              <div className="px-2 py-1.5 bg-[#111] border-t border-[rgba(192,192,192,0.1)]">
                <p className="text-[8px] text-white/50 text-center">You</p>
              </div>
            </motion.div>

            {/* Plus connector */}
            <motion.span
              className="text-white/20 text-lg font-light shrink-0 select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: merging ? 0 : 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              +
            </motion.span>

            {/* Outfit image */}
            <motion.div
              className="flex flex-col rounded-2xl border border-[rgba(192,192,192,0.15)] overflow-hidden shrink-0"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: merging ? 0 : 1, x: merging ? -16 : 0, scale: merging ? 0.82 : 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-20 h-[88px] overflow-hidden">
                <img src="/outfit-vacation.jpg" alt="Outfit" className="w-full h-full object-cover" />
              </div>
              <div className="px-2 py-1.5 bg-[#111] border-t border-[rgba(192,192,192,0.1)]">
                <p className="text-[8px] text-white/50 text-center">Outfit</p>
              </div>
            </motion.div>

            {/* Try Outfit button */}
            <AnimatePresence>
              {showButton && !merging && (
                <motion.div
                  key="try-btn"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full gradient-silver whitespace-nowrap cursor-pointer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: [0, 1, 1, 1], scale: [0.5, 1.08, 1, 1] }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span className="text-[10px] text-black font-bold">Try Outfit</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ── Result: try-on reveal ── */}
        {phase === "result" && (
          <motion.div
            key="result"
            className="absolute inset-0 flex items-end justify-center pt-4"
            initial={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/screenshots/import-outfit-mockup.png"
              alt="Try-on result"
              className="h-full w-auto object-contain object-bottom"
            />
            {/* Success badge */}
            <motion.div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full gradient-silver whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.1, 1, 1] }}
              transition={{ delay: 0.5, duration: 2, ease: [0.22, 1, 0.36, 1] }}
            >
              <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[10px] text-black font-bold">Outfit Applied</span>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}


function BuyVisual() {
  const cards = [
    { name: "Date Night", img: "/outfit-vacation.jpg" },
    { name: "Work Look",  img: "/outfit-work.jpg" },
    { name: "Weekend",    img: "/outfit-weekend.jpg" },
  ];

  return (
    <div className="relative flex items-center justify-center h-full gap-3 overflow-hidden px-4">
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
        >
          <div className="w-20 h-24 overflow-hidden">
            <img
              src={card.img}
              alt={card.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-2 py-2 border-t border-[rgba(192,192,192,0.1)] bg-[#111]">
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
    description: "AI places any outfit on your body, with realistic fit, proportions, and lighting.",
    visual: TryOnVisual,
    colSpan: "lg:col-span-2",
    visualHeight: "h-64",
  },
  {
    label: "AI Stylist",
    title: "Ask. Receive.",
    description: "Tell your AI stylist the occasion and vibe. Get a complete outfit instantly.",
    visual: StylistVisual,
    colSpan: "lg:col-span-1",
    visualHeight: "h-64",
    link: { href: "https://www.slidez.social/outfit-ideas", label: "Explore Outfit Ideas" },
  },
  {
    label: "Import",
    title: "Try from anywhere.",
    description: "Spot something on Instagram or any site. Import it and try it on instantly.",
    visual: ImportVisual,
    colSpan: "lg:col-span-1",
    visualHeight: "h-64",
  },
  {
    label: "Confidence",
    title: "No more guessing.",
    description: "See it. Love it. Buy it, with confidence at checkout.",
    visual: BuyVisual,
    colSpan: "lg:col-span-2",
    visualHeight: "h-64",
  },
];

export default function Features() {
  return (
    <section id="features" data-nav-theme="light-bg" className="bg-[#f5f4f2] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
<h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-3">
            Everything in your pocket.
          </h2>
          <p className="text-black/60 text-base font-medium mb-3">
            AI stylist. Virtual try-on. One app.
          </p>
          <p className="text-black/45 text-lg max-w-md mx-auto">
            From upload to checkout: the complete fitting room, on your phone.
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
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#888] mb-2">
                      {card.label}
                    </p>
                    <h3 className="text-white font-semibold text-lg mb-1.5">{card.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{card.description}</p>
                    {"link" in card && card.link && (
                      <a
                        href={card.link.href}
                        className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-full border border-white/15 text-xs font-medium text-white/60 hover:border-white/35 hover:text-white transition-all duration-200"
                      >
                        {card.link.label} →
                      </a>
                    )}
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
