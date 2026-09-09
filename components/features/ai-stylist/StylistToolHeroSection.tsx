"use client";

import { useState, type ReactNode, type RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StylistTool from "@/components/features/ai-stylist/StylistTool";
import type { WtwFlowScreen } from "@/components/features/ai-stylist/wtw";

export type StylistToolHeroSectionProps = {
  ariaLabel: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  submitLabel?: string;
  chips?: string[];
  prompts?: string[];
  externalPrompt?: string;
  externalPromptKey?: number;
  titleRef?: RefObject<HTMLHeadingElement | null>;
  sectionRef?: RefObject<HTMLElement | null>;
  maxWidthClassName?: string;
};

/** Primary hero: light UI, model picker, cinematic loading + result flow. */
export default function StylistToolHeroSection({
  ariaLabel,
  eyebrow,
  title,
  subtitle,
  submitLabel = "Style me",
  chips,
  prompts,
  externalPrompt,
  externalPromptKey,
  titleRef,
  sectionRef,
  maxWidthClassName = "max-w-[720px]",
}: StylistToolHeroSectionProps) {
  const [flowScreen, setFlowScreen] = useState<WtwFlowScreen>("input");

  return (
    <section
      ref={sectionRef}
      data-nav-theme="light-bg"
      aria-label={ariaLabel}
      className={`relative flex flex-col items-center text-center px-4 sm:px-6 bg-[#ffffff] ${
        flowScreen === "loading"
          ? "min-h-[calc(100vh-72px)] justify-center py-20 pb-16"
          : flowScreen === "input"
            ? "pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 min-h-0"
            : "pt-28 pb-16 min-h-[920px]"
      }`}
    >
      <div
        className={
          flowScreen === "loading"
            ? "h-0 overflow-hidden"
            : flowScreen === "input"
              ? "w-full mb-4 sm:mb-5"
              : "h-0 overflow-hidden"
        }
      >
        <AnimatePresence mode="wait">
          {flowScreen === "input" && (
            <motion.div
              key="hero-copy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400 mb-2 sm:mb-2.5">
                {eyebrow}
              </p>

              <h1
                ref={titleRef}
                style={{
                  fontSize: "clamp(2.25rem, 5.2vw, 3.75rem)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.03em",
                }}
                className="font-bold text-[#0d0d0d] mb-2.5 sm:mb-3 max-w-2xl mx-auto"
              >
                {title}
              </h1>

              <div className="text-base sm:text-lg text-neutral-500 max-w-lg mx-auto leading-relaxed font-normal">
                {subtitle}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={`w-full ${maxWidthClassName} mx-auto`}>
        <StylistTool
          externalPrompt={externalPrompt}
          externalPromptKey={externalPromptKey}
          submitLabel={submitLabel}
          chips={chips}
          prompts={prompts}
          lightTheme
          alwaysShowPicker
          onFlowScreenChange={setFlowScreen}
        />
      </div>
    </section>
  );
}

/** Embedded light tool (e.g. mid-page CTA sections). */
export function StylistToolSection({
  submitLabel = "Style me",
  chips,
  prompts,
  externalPrompt,
  externalPromptKey,
  className = "w-full max-w-[720px] mx-auto",
}: Pick<
  StylistToolHeroSectionProps,
  "submitLabel" | "chips" | "prompts" | "externalPrompt" | "externalPromptKey"
> & { className?: string }) {
  return (
    <div className={className}>
      <StylistTool
        externalPrompt={externalPrompt}
        externalPromptKey={externalPromptKey}
        submitLabel={submitLabel}
        chips={chips}
        prompts={prompts}
        lightTheme
        alwaysShowPicker
      />
    </div>
  );
}
