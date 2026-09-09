"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  type HeroGender,
  type HeroModelEntry,
  getHeroModel,
} from "./hero-model-config";

export type ProductItem = {
  category: string;
  name: string;
  imageUrl: string | null;
  productLink: string | null;
};

type HeroModelStageProps = {
  gender: HeroGender;
  modelId: string;
  idleImageSrc?: string | null;
  tryOnLoading?: boolean;
  resultImageUrl?: string | null;
  productItems?: ProductItem[];
  tryOnError?: string | null;
};

const IMAGE_CROSSFADE = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1] as const,
};

const OVERLAY_CONTAINER_VARIANTS = {
  hidden: {},
  show: { transition: { staggerChildren: 0.32, delayChildren: 0.2 } },
};

const OVERLAY_CARD_VARIANTS = (i: number) => ({
  hidden: { x: i % 2 === 0 ? -40 : 40, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
});

export default function HeroModelStage({
  gender,
  modelId,
  idleImageSrc = null,
  tryOnLoading = false,
  resultImageUrl = null,
  productItems = [],
  tryOnError = null,
}: HeroModelStageProps) {
  const active: HeroModelEntry = getHeroModel(gender, modelId);
  const displaySrc = idleImageSrc ?? active.src;
  const showResult = Boolean(resultImageUrl);
  const showLoading = tryOnLoading && !showResult;
  const validProductItems = productItems.filter(
    (item) =>
      Boolean(item.imageUrl) ||
      Boolean(item.productLink) ||
      (Boolean(item.name) && item.name.trim().toLowerCase() !== item.category.trim().toLowerCase())
  );

  return (
    <div className="relative mx-auto w-full max-w-[380px] md:max-w-none">
      <div className="relative mx-auto h-[380px] w-full max-w-[280px] sm:h-[440px] sm:max-w-[320px] md:h-[500px] md:max-w-[360px] flex items-end justify-center">
        {/* Base model photo — completely free without any box, card, border, or shadow */}
        {!showResult && (
          <div className="relative h-full w-full flex items-end justify-center">
            <AnimatePresence initial={false}>
              <motion.div
                key={displaySrc}
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={IMAGE_CROSSFADE}
                className="absolute inset-0 flex items-end justify-center"
              >
                <Image
                  src={displaySrc}
                  alt="Slidez stylist model preview"
                  fill
                  unoptimized
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
                  className="object-contain object-bottom mix-blend-multiply"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

          {/* Loading overlay — model stays visible underneath */}
          <AnimatePresence>
            {showLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[2]"
              >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
                <div className="absolute inset-x-0 top-4 z-10 flex justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/95 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                    <motion.span
                      animate={{ opacity: [0.35, 1, 0.35] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                      className="block h-1.5 w-1.5 shrink-0 rounded-full bg-[#4caf50]"
                    />
                    <span className="text-[10px] font-medium text-[#555]">Generating try-on…</span>
                  </div>
                </div>

                {validProductItems.length > 0 && (
                  <motion.div
                    className="absolute inset-x-2 bottom-2 z-20 flex flex-col gap-1"
                    variants={OVERLAY_CONTAINER_VARIANTS}
                    initial="hidden"
                    animate="show"
                  >
                    {validProductItems.map((item, i) => (
                      <motion.div key={i} variants={OVERLAY_CARD_VARIANTS(i)}>
                        {item.productLink ? (
                          <a
                            href={item.productLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/90 px-2.5 py-2 backdrop-blur-md transition-colors hover:bg-white"
                          >
                            {item.imageUrl ? (
                              <img src={item.imageUrl} alt={item.name} className="h-8 w-8 shrink-0 rounded-lg object-cover" />
                            ) : (
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/5">
                                <span className="text-[8px] font-bold uppercase text-black/30">{item.category.slice(0, 1)}</span>
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="line-clamp-1 text-[10px] font-semibold leading-tight text-[#1a1a1e]">{item.name}</p>
                              <p className="truncate text-[8px] uppercase tracking-wide text-[#888]">{item.category}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/90 px-2.5 py-2 backdrop-blur-md">
                            {item.imageUrl ? (
                              <img src={item.imageUrl} alt={item.name} className="h-8 w-8 shrink-0 rounded-lg object-cover" />
                            ) : (
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/5">
                                <span className="text-[8px] font-bold uppercase text-black/30">{item.category.slice(0, 1)}</span>
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="line-clamp-1 text-[10px] font-semibold leading-tight text-[#1a1a1e]">{item.name}</p>
                              <p className="truncate text-[8px] uppercase tracking-wide text-[#888]">{item.category}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Try-on result */}
          <AnimatePresence initial={false}>
            {showResult && resultImageUrl && (
              <motion.div
                key={resultImageUrl}
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={IMAGE_CROSSFADE}
                className="absolute inset-0 z-[3]"
              >
                <img
                  src={resultImageUrl}
                  alt="AI try-on result"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 pb-4 pt-12">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/50">AI Try-On</p>
                  <p className="text-sm font-medium text-white/90">Top Pick</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>

      {tryOnError && (
        <p className="mt-2 text-center text-[11px] text-red-500/90">{tryOnError}</p>
      )}
    </div>
  );
}
