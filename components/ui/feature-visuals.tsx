"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="#E1306C" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="#E1306C"/>
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#E60023" className="w-3.5 h-3.5 shrink-0">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.27-1.95 3.27-4.77 0-2.49-1.79-4.23-4.34-4.23-2.96 0-4.69 2.22-4.69 4.51 0 .89.34 1.85.77 2.37.08.1.09.19.07.29-.08.31-.25 1.04-.28 1.18-.04.19-.14.23-.32.14-1.25-.58-2.03-2.42-2.03-3.89 0-3.15 2.29-6.05 6.61-6.05 3.47 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.33c-.22.86-.83 1.94-1.24 2.6.94.29 1.93.45 2.96.45 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  );
}

function AmazonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 shrink-0">
      <path d="M4.5 16.5c3.5 2.2 8 2.8 12.5 1" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 15.5l2.5 2-1.2 2" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 7.5h11M6.5 11.5h7" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function StylistVisual() {
  const PROMPT = "Boho beach look for golden hour ✨";
  const TYPING_SPEED = 55;
  const [phase, setPhase] = useState<"typing" | "generating" | "image">("typing");
  const [displayed, setDisplayed] = useState("");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (phase !== "typing") return;
    setDisplayed("");
    let idx = 0;
    const iv = setInterval(() => {
      idx++;
      setDisplayed(PROMPT.slice(0, idx));
      if (idx >= PROMPT.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("generating"), 400);
      }
    }, TYPING_SPEED);
    return () => clearInterval(iv);
  }, [phase, cycle]);

  useEffect(() => {
    if (phase === "generating") {
      const t = setTimeout(() => setPhase("image"), 900);
      return () => clearTimeout(t);
    }
    if (phase === "image") {
      const t = setTimeout(() => {
        setPhase("typing");
        setCycle((c) => c + 1);
      }, 2600);
      return () => clearTimeout(t);
    }
  }, [phase]);

  return (
    <div className="relative h-full overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="sync">

        {/* ── Typing + Generating phase ── */}
        {(phase === "typing" || phase === "generating") && (
          <motion.div
            key={`input-${cycle}`}
            className="absolute inset-0 flex flex-col items-center justify-center px-5 gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 1.06,
              filter: "blur(6px)",
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
              AI Stylist
            </p>

            {/* Input box */}
            <div className="w-full rounded-xl border border-[rgba(192,192,192,0.18)] bg-[#161616] px-3.5 py-3 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-white/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <span className="text-[11px] text-white/80 flex-1 font-light">
                {displayed}
                {phase === "typing" && (
                  <span className="inline-block w-px h-3 bg-white/60 ml-px align-middle animate-pulse" />
                )}
              </span>
            </div>

            {/* Suggestion chips */}
            <div className="flex gap-1.5 flex-wrap justify-center">
              {["Beach", "Date night", "Work chic"].map((chip) => (
                <span
                  key={chip}
                  className="text-[8px] px-2 py-0.5 rounded-full border border-[rgba(192,192,192,0.12)] text-white/35"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Shimmer bars (generating state) */}
            {phase === "generating" && (
              <div className="w-full space-y-2 pt-1">
                {[80, 60, 90].map((w, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full bg-[rgba(192,192,192,0.08)] overflow-hidden"
                    style={{ width: `${w}%` }}
                  >
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-transparent via-[rgba(192,192,192,0.4)] to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{ duration: 0.7, delay: i * 0.12, ease: "linear" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* ── Image reveal phase ── */}
        {phase === "image" && (
          <motion.div
            key="image"
            className="absolute inset-0 flex items-end justify-center pt-4"
            initial={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.3 } }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/screenshots/ai-stylist-mockup.png"
              alt="Slidez AI Stylist"
              className="h-full w-auto object-contain object-bottom"
            />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

export function ImportVisual() {
  const [face, setFace] = useState<"front" | "back">("front");
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (face === "front") {
      t = setTimeout(() => setFace("back"), 2200);
    } else {
      t = setTimeout(() => {
        setFace("front");
        setCycle((c) => c + 1);
      }, 2300);
    }
    return () => clearTimeout(t);
  }, [face]);

  const platforms = [
    { name: "Instagram", icon: <InstagramIcon />, outfit: "/outfit-import-instagram.avif" },
    { name: "Pinterest", icon: <PinterestIcon />, outfit: "/outfit-import-amazon.png" },
    { name: "Amazon",    icon: <AmazonIcon />,    outfit: "/outfit-import-pinterest.jpg" },
  ];

  return (
    <div className="relative h-full overflow-hidden" style={{ perspective: 1000 }}>
      <AnimatePresence mode="sync">
        {face === "front" && (
          <motion.div
            key={`front-${cycle}`}
            className="absolute inset-0 flex items-center justify-center gap-2 px-3 pt-3"
            exit={{ rotateY: -90, opacity: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-2xl border border-[rgba(192,192,192,0.15)] overflow-hidden"
              >
                <div className="flex items-center justify-center gap-1 px-2 py-1.5 bg-[#111]">
                  {p.icon}
                  <span className="text-[8px] text-white/50">{p.name}</span>
                </div>
                <div className="w-16 h-20 overflow-hidden">
                  <img src={p.outfit} alt={p.name} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 1, 1], scale: [0.5, 1.08, 1, 1] }}
              transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full gradient-silver whitespace-nowrap"
            >
              <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-[10px] text-black font-bold">Try on Slidez</span>
            </motion.div>
          </motion.div>
        )}

        {face === "back" && (
          <motion.div
            key="back"
            className="absolute inset-0 flex items-end justify-center pt-4"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src="/screenshots/import-outfit-mockup.png"
              alt="Slidez import outfit"
              className="h-full w-auto object-contain object-bottom"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
