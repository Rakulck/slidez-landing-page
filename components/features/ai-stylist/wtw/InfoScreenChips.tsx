"use client";

import { motion } from "framer-motion";
import { CHIP_TONES, type ChipTone } from "./info-screen-timeline";
import { WTW_CHIP_TRANSITION } from "./wtw-motion";

type Chip = { name: string; tone: ChipTone };

type InfoScreenChipsProps = {
  chips: Chip[];
  elapsed: number;
};

export default function InfoScreenChips({ chips, elapsed }: InfoScreenChipsProps) {
  const windowStart = 28;
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-[420px] mx-auto">
      {chips.map((chip, i) => {
        const chipStart = windowStart + i * 2.5;
        if (elapsed < chipStart) return null;
        const tone = CHIP_TONES[chip.tone];
        return (
          <motion.span
            key={`${chip.name}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={WTW_CHIP_TRANSITION}
            className="px-3.5 py-2 rounded-full text-[13px] font-medium tracking-[-0.01em] border"
            style={{
              borderColor: `${tone}99`,
              backgroundColor: `${tone}33`,
              color: "#0a0a0a",
            }}
          >
            {chip.name}
          </motion.span>
        );
      })}
    </div>
  );
}
