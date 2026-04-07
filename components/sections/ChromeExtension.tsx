"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackExtensionClick } from "@/lib/gtag";
import { ArrowRight, Plus, Minus } from "lucide-react";

function MiniFAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 py-3 text-left group"
      >
        <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors duration-200">{q}</span>
        <span className="shrink-0 w-6 h-6 rounded-full border border-white/[0.12] flex items-center justify-center text-white/30 group-hover:border-white/25 group-hover:text-white/55 transition-all duration-200">
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-3 text-sm text-white/35 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const sites = ["Instagram", "Pinterest", "ASOS", "Zara", "H&M", "Shein"];

function BrowserMockup() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div
        className="absolute -inset-6 rounded-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(192,192,192,0.08) 0%, transparent 70%)" }}
      />
      <img
        src="/screenshots/extension-mockup.png"
        alt="Slidez Chrome Extension"
        className="relative w-full drop-shadow-2xl rounded-2xl"
      />
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
              See an outfit you love while browsing online? Hit the Slidez extension and try it on yourself, without leaving the page.
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
              href="https://chromewebstore.google.com/detail/kdcmgmfnnheiegkakcbkdolehlgdlaak?utm_source=item-share-cb"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackExtensionClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full
                shadow-[0_2px_16px_rgba(255,255,255,0.28),0_1px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)]
                hover:shadow-[0_4px_24px_rgba(255,255,255,0.45),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.95)]
                hover:scale-[1.05] hover:-translate-y-px
                active:scale-[0.97] active:shadow-[0_1px_6px_rgba(255,255,255,0.2)]
                transition-all duration-200 cursor-pointer"
            >
              Add to Chrome, it&apos;s free
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-8 border-t border-white/[0.07] pt-2">
              <MiniFAQItem
                q="How does the Slidez Chrome extension work?"
                a="Install the Slidez Chrome extension and open any shopping website. When you find a product you like, Slidez lets you instantly preview how it looks on you using AI virtual try-on."
              />
              <MiniFAQItem
                q="Can I try clothes directly from shopping websites?"
                a="Yes. With the Slidez Chrome extension you can try clothes directly from most shopping websites and see how they look on you before buying."
              />
            </div>
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
