"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { WtwProductItem } from "./wtw-utils";
import { useInfoScreenTimeline } from "./useInfoScreenTimeline";
import { pickPrimaryLayer } from "./info-screen-timeline";
import WtwTypography, { wtwFontInter, wtwFontMono } from "./WtwTypography";
import AlmostDoneDots from "./AlmostDoneDots";
import InfoScreenChips from "./InfoScreenChips";
import FitConfidenceMeter from "./FitConfidenceMeter";
import {
  WTW_PHRASE_VARIANTS,
  WTW_EASE_IN,
  WTW_REVEAL_TRANSITION,
} from "./wtw-motion";

type WtwLoadingProps = {
  query: string;
  gender: string;
  sessionActive: boolean;
  apiDone: boolean;
  productItems?: WtwProductItem[];
  compliment?: string;
  megaText?: string;
  closingLine?: string;
  onSequenceComplete?: () => void;
};

function AnimatedPhrase({
  layerKey,
  children,
  className,
}: {
  layerKey: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      key={layerKey}
      variants={WTW_PHRASE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function WtwLoading({
  query,
  sessionActive,
  apiDone,
  productItems = [],
  compliment,
  megaText,
  closingLine,
  onSequenceComplete,
}: WtwLoadingProps) {
  const timeline = useInfoScreenTimeline({
    sessionActive,
    apiDone,
    userPrompt: query,
    productItems,
    compliment,
    megaText,
    closingLine,
    onSequenceComplete,
  });

  const {
    elapsed,
    activeLayers,
    numberLayer,
    chipsVisible,
    chipList,
    fitVisible,
    fitPct,
    progressPct,
    showHalo,
  } = timeline;

  const eyebrow = pickPrimaryLayer(activeLayers, "eyebrow");
  const hero = pickPrimaryLayer(activeLayers, "hero");
  const sub = pickPrimaryLayer(activeLayers, "sub");
  const almostDone = pickPrimaryLayer(activeLayers, "almostDone");
  const mega = pickPrimaryLayer(activeLayers, "mega");
  const closing = pickPrimaryLayer(activeLayers, "closing");

  const showAlmostOnly = Boolean(almostDone && elapsed < 56);
  const showMega = Boolean(mega && elapsed >= 56);
  const showClosingLine = Boolean(closing && elapsed >= 57.5);
  const showHeroWithSub = Boolean(hero && sub && !numberLayer && !showAlmostOnly && !showMega);

  const tryOnStack = eyebrow?.text === "TRYING IT ON YOU";
  const megaSize =
    mega && mega.text.length <= 15
      ? "text-5xl md:text-[72px]"
      : "text-3xl md:text-[44px]";

  return (
    <WtwTypography className="w-full">
      <div className="relative w-full h-full min-h-[480px] md:min-h-[520px] flex flex-col px-4 overflow-hidden bg-white rounded-2xl">
        {/* Radial glow background */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <motion.div
            className="w-[min(120%,480px)] aspect-square rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(199,181,155,0.35) 0%, rgba(255,255,255,0) 70%)",
            }}
            animate={{ scale: [1, 1.08, 1.02, 1.06, 1] }}
            transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Reveal halo */}
        <AnimatePresence>
          {showHalo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: WTW_EASE_IN }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <div
                className="w-[min(90%,400px)] aspect-square rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(10,10,10,0.04) 0%, transparent 65%)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main copy stack — centered in space above footer */}
        <div
          className={`relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-[540px] mx-auto text-center ${
            tryOnStack ? "gap-3.5" : "gap-4"
          }`}
        >
          <AnimatePresence mode="sync">
            {eyebrow && (
              <AnimatedPhrase layerKey={eyebrow.id} className="w-full">
                <p
                  className={`${wtwFontMono} m-0 text-[11px] font-medium uppercase tracking-[0.2em] text-[#6b6b6b]`}
                >
                  {eyebrow.text}
                </p>
              </AnimatedPhrase>
            )}
          </AnimatePresence>

          <div className="w-full min-h-[120px] md:min-h-[140px] flex flex-col items-center justify-center">
            <AnimatePresence mode="sync">
              {numberLayer && (
                <AnimatedPhrase layerKey={`num-${numberLayer.label}`} className="w-full">
                  <div className="flex flex-col items-center gap-2">
                    <span
                      className={`${wtwFontInter} font-semibold text-[#0a0a0a] text-6xl md:text-[96px] leading-none tracking-[-0.05em] tabular-nums`}
                    >
                      {numberLayer.value.toLocaleString()}
                    </span>
                    <span
                      className={`${wtwFontMono} text-[11px] uppercase tracking-[0.14em] text-[#6b6b6b]`}
                    >
                      {numberLayer.label}
                    </span>
                  </div>
                </AnimatedPhrase>
              )}

              {showAlmostOnly && almostDone && (
                <AnimatedPhrase layerKey={almostDone.id} className="w-full">
                  <h2
                    className={`${wtwFontInter} m-0 font-semibold text-[#0a0a0a] text-3xl md:text-[44px] leading-none tracking-[-0.05em] inline-flex items-center justify-center flex-wrap`}
                  >
                    {almostDone.text}
                    <AlmostDoneDots />
                  </h2>
                </AnimatedPhrase>
              )}

              {showMega && mega && (
                <AnimatedPhrase layerKey={mega.id} className="w-full">
                  <motion.h2
                    className={`${wtwFontInter} m-0 font-semibold text-[#0a0a0a] leading-none tracking-[-0.05em] ${megaSize} max-w-full`}
                    initial={{ scale: 0.97, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={WTW_REVEAL_TRANSITION}
                  >
                    {mega.text}
                  </motion.h2>
                </AnimatedPhrase>
              )}

              {!numberLayer && !showAlmostOnly && !showMega && hero && (
                <AnimatedPhrase layerKey={hero.id} className="w-full">
                  <h2
                    className={`${wtwFontInter} m-0 font-semibold text-[#0a0a0a] text-3xl md:text-[44px] leading-none tracking-[-0.05em]`}
                  >
                    {hero.text}
                  </h2>
                </AnimatedPhrase>
              )}

              {showClosingLine && closing && (
                <AnimatedPhrase layerKey={closing.id} className="w-full mt-3">
                  <p
                    className={`${wtwFontInter} m-0 text-base font-normal text-[#6b6b6b] leading-[1.4] tracking-[-0.02em]`}
                  >
                    {closing.text}
                  </p>
                </AnimatedPhrase>
              )}
            </AnimatePresence>

            <AnimatePresence mode="sync">
              {showHeroWithSub && sub && (
                <AnimatedPhrase layerKey={`${sub.id}-below`} className="w-full mt-4">
                  <p
                    className={`${wtwFontInter} m-0 text-xl md:text-[22px] font-normal text-[#6b6b6b] leading-none tracking-[-0.03em]`}
                  >
                    {sub.text}
                  </p>
                </AnimatedPhrase>
              )}
            </AnimatePresence>
          </div>

          {chipsVisible && (
            <div className="w-full mt-4">
              <InfoScreenChips chips={chipList} elapsed={elapsed} />
            </div>
          )}

          {fitVisible && <FitConfidenceMeter fitPct={fitPct} />}
        </div>

        {/* Persistent footer progress */}
        <div className="relative z-10 w-full max-w-[540px] mx-auto shrink-0 pt-6 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span
              className={`${wtwFontMono} text-[9.5px] uppercase tracking-[0.14em] text-[#6b6b6b]`}
            >
              COMPOSING YOUR LOOK
            </span>
            <span
              className={`${wtwFontMono} text-[9.5px] uppercase tracking-[0.14em] text-[#6b6b6b] tabular-nums`}
            >
              {progressPct}%
            </span>
          </div>
          <div className="relative h-[3px] rounded-sm bg-[#ececec] overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#0a0a0a]"
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.85, ease: WTW_EASE_IN }}
            />
          </div>
        </div>
      </div>
    </WtwTypography>
  );
}
