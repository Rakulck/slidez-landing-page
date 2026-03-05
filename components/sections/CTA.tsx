"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackDownloadClick, trackExtensionClick } from "@/lib/gtag";

const goals = [
  "Look great at work",
  "Dress for any occasion",
  "Find my personal style",
  "Stop second-guessing outfits",
  "Shop smarter, return less",
];

export default function CTA() {
  return (
    <section className="bg-white py-28 px-6 border-t border-black/[0.06]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight mb-5"
        >
          Never be stressed
          <br />
          <span className="bg-gradient-to-r from-black via-[#333] to-[#666] bg-clip-text text-transparent">getting dressed again.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-black/50 text-lg mb-12"
        >
          The outfit that makes you walk different. One prompt away.
        </motion.p>

        {/* Style goal pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {goals.map((goal) => (
            <a
              key={goal}
              href="https://linkly.link/2FWYm"
              className="px-5 py-2.5 rounded-full border border-black/10 text-black/50 text-sm font-medium hover:border-black/30 hover:text-black
                hover:scale-[1.04] hover:-translate-y-px
                active:scale-[0.97]
                transition-all duration-200 cursor-pointer"
            >
              {goal}
            </a>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="https://linkly.link/2FWYm"
            onClick={trackDownloadClick}
            className="flex items-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-[#111]
              shadow-[0_2px_16px_rgba(0,0,0,0.2),0_1px_4px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.08)]
              hover:shadow-[0_4px_24px_rgba(0,0,0,0.28),0_2px_8px_rgba(0,0,0,0.12)]
              hover:scale-[1.05] hover:-translate-y-px
              active:scale-[0.97]
              transition-all duration-200 cursor-pointer"
          >
            Download App
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://chromewebstore.google.com/detail/kdcmgmfnnheiegkakcbkdolehlgdlaak?utm_source=item-share-cb"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackExtensionClick}
            className="flex items-center gap-2 px-8 py-3.5 border border-black/15 text-black/60 text-sm font-medium rounded-full hover:border-black/30 hover:text-black
              hover:scale-[1.04] hover:-translate-y-px
              active:scale-[0.97]
              transition-all duration-200 cursor-pointer"
          >
            Add to Chrome
          </a>
        </motion.div>
      </div>
    </section>
  );
}
