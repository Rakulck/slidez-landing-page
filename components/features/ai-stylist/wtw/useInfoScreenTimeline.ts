"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { WtwProductItem } from "./wtw-utils";
import {
  buildStaticLayers,
  chipsFromProducts,
  createSessionRandoms,
  DEFAULT_CHIPS,
  FALLBACK_CLOSING,
  FALLBACK_COMPLIMENT,
  FALLBACK_MEGA,
  computeProgressPct,
  getActiveLayers,
  getFitPct,
  getFunnelStep,
  getNumberLayer,
  TIMELINE_DURATION,
  toTimelineElapsed,
  WEB_FAST_FORWARD_RATE,
  WEB_TIMELINE_HOLD_UNTIL_API,
  type CopyLayer,
  type SessionRandoms,
  showChips,
  showFitMeter,
} from "./info-screen-timeline";

export type UseInfoScreenTimelineArgs = {
  /** True while the cinematic loading UI should be mounted */
  sessionActive: boolean;
  /** True once the try-on API pipeline has finished (success or error) */
  apiDone: boolean;
  userPrompt: string;
  productItems: WtwProductItem[];
  compliment?: string;
  megaText?: string;
  closingLine?: string;
  onSequenceComplete?: () => void;
};

export function useInfoScreenTimeline({
  sessionActive,
  apiDone,
  userPrompt,
  productItems,
  compliment = FALLBACK_COMPLIMENT,
  megaText = FALLBACK_MEGA,
  closingLine = FALLBACK_CLOSING,
  onSequenceComplete,
}: UseInfoScreenTimelineArgs) {
  const [timelineElapsed, setTimelineElapsed] = useState(0);
  const [sequenceComplete, setSequenceComplete] = useState(false);
  const randomsRef = useRef<SessionRandoms>(createSessionRandoms());
  const startRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const completeCalledRef = useRef(false);

  const finishSequence = useCallback(() => {
    if (completeCalledRef.current) return;
    completeCalledRef.current = true;
    setSequenceComplete(true);
    onSequenceComplete?.();
  }, [onSequenceComplete]);

  useEffect(() => {
    if (sessionActive) {
      setTimelineElapsed(0);
      setSequenceComplete(false);
      randomsRef.current = createSessionRandoms();
      startRef.current = null;
      lastFrameRef.current = null;
      completeCalledRef.current = false;
    }
  }, [sessionActive]);

  useEffect(() => {
    if (!sessionActive || sequenceComplete) return;

    let raf: number;
    const tick = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now;
        lastFrameRef.current = now;
      }
      const last = lastFrameRef.current ?? now;
      const dt = (now - last) / 1000;
      lastFrameRef.current = now;
      const realElapsed = (now - startRef.current) / 1000;

      setTimelineElapsed((prev) => {
        if (apiDone && prev < TIMELINE_DURATION) {
          return Math.min(TIMELINE_DURATION, prev + dt * WEB_FAST_FORWARD_RATE);
        }
        const scaled = toTimelineElapsed(realElapsed);
        if (!apiDone) {
          return Math.min(scaled, WEB_TIMELINE_HOLD_UNTIL_API);
        }
        return scaled;
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [sessionActive, sequenceComplete, apiDone]);

  useEffect(() => {
    if (
      apiDone &&
      timelineElapsed >= TIMELINE_DURATION &&
      sessionActive &&
      !sequenceComplete
    ) {
      finishSequence();
    }
  }, [timelineElapsed, sessionActive, sequenceComplete, finishSequence, apiDone]);

  const randoms = randomsRef.current;

  const layers = useMemo(
    () => buildStaticLayers(userPrompt, compliment, megaText, closingLine),
    [userPrompt, compliment, megaText, closingLine]
  );

  const activeLayers: CopyLayer[] = useMemo(
    () => getActiveLayers(layers, timelineElapsed),
    [layers, timelineElapsed]
  );

  const numberLayer = getNumberLayer(timelineElapsed, randoms);
  const funnelStep = getFunnelStep(timelineElapsed);
  const chipsVisible = showChips(timelineElapsed);
  const fitVisible = showFitMeter(timelineElapsed);
  const fitPct = getFitPct(timelineElapsed, randoms.fitConfidence);
  const progressPct = computeProgressPct(timelineElapsed);
  const chipList =
    productItems.length > 0 ? chipsFromProducts(productItems) : DEFAULT_CHIPS;

  return {
    elapsed: timelineElapsed,
    activeLayers,
    numberLayer,
    funnelStep,
    chipsVisible,
    chipList,
    fitVisible,
    fitPct,
    fitTarget: randoms.fitConfidence,
    progressPct,
    showHalo: timelineElapsed >= 38,
    isClosing: timelineElapsed >= 54.5,
    isFastForwarding: apiDone && timelineElapsed < TIMELINE_DURATION,
    sequenceComplete,
    randoms,
  };
}
