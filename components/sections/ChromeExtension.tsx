"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sites = ["Instagram", "Pinterest", "ASOS", "Zara", "H&M", "Shein"];

function BrowserMockup() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Glow behind browser */}
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.08) 0%, transparent 70%)" }}
      />

      {/* Browser shell */}
      <div className="relative rounded-2xl border border-[rgba(192,192,192,0.18)] bg-[#111] overflow-hidden shadow-2xl shadow-black/60">

        {/* Browser top bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[rgba(192,192,192,0.1)] bg-[#0e0e0e]">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
              <div key={c} className="w-3 h-3 rounded-full" style={{ background: c, opacity: 0.7 }} />
            ))}
          </div>
          {/* URL bar */}
          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(192,192,192,0.1)]">
            <div className="w-3 h-3 rounded-full border border-[rgba(192,192,192,0.3)] shrink-0" />
            <span className="text-[11px] text-white/30 truncate">instagram.com/explore/fashion</span>
          </div>
          {/* Extension icon */}
          <div className="w-7 h-7 rounded-lg gradient-silver flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.4 0 2.7.39 3.82 1.06L9.18 13.6A4.97 4.97 0 017 9c0-2.76 2.24-5 5-5zm0 14c-1.84 0-3.47-.79-4.61-2.05l2.55-4.42A4.97 4.97 0 0012 14c.78 0 1.51-.18 2.17-.5L16.72 18A7.95 7.95 0 0112 19zm5.78-3.39L15.23 11h5.54A7.97 7.97 0 0121 12c0 1.38-.35 2.67-.97 3.8l-2.25-1.19z"/>
            </svg>
          </div>
        </div>

        {/* Browser content */}
        <div className="relative p-5 min-h-[280px]">
          {/* Fake website content */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[0.15, 0.1, 0.08].map((op, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-[rgba(192,192,192,0.08)]"
                style={{ background: `rgba(192,192,192,${op})` }}
              >
                <div className="h-24 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-[rgba(192,192,192,0.2)]" />
                    <div className="w-8 h-10 rounded-lg bg-[rgba(192,192,192,0.15)]" />
                  </div>
                </div>
                <div className="p-2 space-y-1">
                  <div className="h-1.5 bg-[rgba(192,192,192,0.2)] rounded w-3/4" />
                  <div className="h-1.5 bg-[rgba(192,192,192,0.1)] rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>

          {/* Extension popup — animated in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-4 right-4 w-52 rounded-2xl border border-[rgba(192,192,192,0.3)] bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {/* Popup header */}
            <div className="px-4 py-3 border-b border-[rgba(192,192,192,0.1)] flex items-center gap-2">
              <div className="w-5 h-5 rounded-md gradient-silver flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.4 0 2.7.39 3.82 1.06L9.18 13.6A4.97 4.97 0 017 9c0-2.76 2.24-5 5-5zm0 14c-1.84 0-3.47-.79-4.61-2.05l2.55-4.42A4.97 4.97 0 0012 14c.78 0 1.51-.18 2.17-.5L16.72 18A7.95 7.95 0 0112 19zm5.78-3.39L15.23 11h5.54A7.97 7.97 0 0121 12c0 1.38-.35 2.67-.97 3.8l-2.25-1.19z"/>
                </svg>
              </div>
              <span className="text-white text-xs font-semibold">Slidez</span>
              <span className="ml-auto text-[10px] text-[#c0c0c0] font-medium">1 outfit found</span>
            </div>

            {/* Outfit preview */}
            <div className="p-3 flex items-center gap-3 border-b border-[rgba(192,192,192,0.08)]">
              <div className="w-10 h-12 rounded-lg bg-[rgba(192,192,192,0.12)] border border-[rgba(192,192,192,0.18)] flex items-center justify-center shrink-0">
                <div className="w-5 h-7 rounded gradient-silver opacity-60" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[11px] font-medium truncate">Silk wrap dress</p>
                <p className="text-white/40 text-[10px]">from Instagram</p>
              </div>
            </div>

            {/* Try on button */}
            <motion.div
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="m-3 py-2 rounded-xl gradient-silver flex items-center justify-center cursor-pointer"
            >
              <span className="text-black text-[11px] font-bold">Try On Now</span>
            </motion.div>
          </motion.div>

          {/* Highlight ring on first card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-5 left-5 w-[calc(33%-1rem)] h-[calc(100%-3.25rem)] rounded-xl ring-2 ring-[rgba(192,192,192,0.5)] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default function ChromeExtension() {
  return (
    <section id="extension" className="bg-[#080808] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-lg"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c0c0c0] mb-5">
              Chrome Extension
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              One click.
              <br />
              Any website.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              See an outfit you love while browsing online? Hit the Slidez extension and try it on yourself — without leaving the page.
            </p>

            {/* Works on */}
            <div className="mb-8">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-3 font-medium">Works on</p>
              <div className="flex flex-wrap gap-2">
                {sites.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-[rgba(192,192,192,0.12)] bg-[rgba(192,192,192,0.05)] text-xs text-white/50 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full
                shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                hover:shadow-[0_4px_24px_rgba(255,255,255,0.45),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.95)]
                hover:scale-[1.05] hover:-translate-y-px
                active:scale-[0.97] active:shadow-[0_1px_6px_rgba(255,255,255,0.2)]
                transition-all duration-200 cursor-pointer"
            >
              Add to Chrome — it&apos;s free
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full"
          >
            <BrowserMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
