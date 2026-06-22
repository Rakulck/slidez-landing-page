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

  return (
    <div className="relative mx-auto w-full max-w-[420px] overflow-hidden md:max-w-none md:overflow-visible">
      <div className="relative h-[420px] w-full md:h-[580px]">
        {/* Panel */}
        <div className="absolute bottom-0 left-0 right-0 h-[340px] overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-b from-[#f4f5f7] to-[#dddee3] shadow-[0_8px_40px_rgba(0,0,0,0.06)] md:h-[470px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={active.glow}
              className="pointer-events-none absolute left-1/2 top-[-40px] h-[440px] w-[440px] -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              transition={IMAGE_CROSSFADE}
              style={{
                background: `radial-gradient(circle at center, ${active.glow} 0%, transparent 62%)`,
              }}
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute bottom-[60px] left-1/2 h-14 w-[280px] -translate-x-1/2 rounded-full bg-white/55 blur-[2px]" />
          <div className="pointer-events-none absolute bottom-[66px] left-1/2 h-7 w-[200px] -translate-x-1/2 rounded-full bg-[rgba(40,30,24,0.14)] blur-[10px]" />

          {/* Base model photo — always visible unless result covers it */}
          {!showResult && (
            <div className="absolute inset-x-0 bottom-0 top-0 z-[1] flex items-end justify-center pb-2">
              <div className="relative h-[94%] w-[72%] max-w-[300px]">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={displaySrc}
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.985 }}
                    transition={IMAGE_CROSSFADE}
                    className="absolute inset-0"
                  >
                    <Image
                      src={displaySrc}
                      alt="Slidez stylist model preview"
                      fill
                      unoptimized
                      priority
                      sizes="(max-width: 1024px) 260px, 300px"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
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

                {productItems.length > 0 && (
                  <motion.div
                    className="absolute inset-x-2 bottom-2 z-20 flex flex-col gap-1"
                    variants={OVERLAY_CONTAINER_VARIANTS}
                    initial="hidden"
                    animate="show"
                  >
                    {productItems.map((item, i) => (
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
      </div>

      {tryOnError && (
        <p className="mt-2 text-center text-[11px] text-red-500/90">{tryOnError}</p>
      )}
    </div>
  );
}
