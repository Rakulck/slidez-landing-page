"use client";

import { motion } from "framer-motion";
import { wtwFontInter, wtwFontMono } from "./WtwTypography";
import { WTW_REVEAL_TRANSITION } from "./wtw-motion";

type FitConfidenceMeterProps = {
  fitPct: number;
};

export default function FitConfidenceMeter({ fitPct }: FitConfidenceMeterProps) {
  if (fitPct <= 0) return null;

  return (
    <motion.div
      className="flex flex-col items-center gap-1 mt-6"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={WTW_REVEAL_TRANSITION}
    >
      <div className={`flex items-baseline gap-1 ${wtwFontInter}`}>
        <motion.span
          className="font-semibold text-[#0a0a0a] text-5xl md:text-[96px] leading-none tracking-[-0.05em] tabular-nums"
          key={fitPct}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {fitPct}
        </motion.span>
        <span className="font-semibold text-[#0a0a0a] text-2xl md:text-[38px] leading-none tracking-[-0.025em]">
          %
        </span>
      </div>
      <span
        className={`${wtwFontMono} text-[9.5px] uppercase tracking-[0.14em] text-[#6b6b6b]`}
      >
        FIT CONFIDENCE
      </span>
    </motion.div>
  );
}
