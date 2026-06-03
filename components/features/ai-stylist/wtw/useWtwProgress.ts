"use client";

import { useEffect, useState } from "react";
import { clamp01, easeOutCubic, LOAD_PHASES, mapTryOnStageToPhase } from "./wtw-utils";

export function useWtwProgress(loading: boolean, tryOnStage: string | null) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!loading) {
      setElapsed(0);
      return;
    }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      setElapsed((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [loading]);

  const stagePhase = mapTryOnStageToPhase(tryOnStage);
  const timeProgress = clamp01(elapsed / 12);
  const rawProgress = Math.max(timeProgress * 0.85, (stagePhase + 0.35) / 4);
  const progress = loading ? Math.min(rawProgress, 0.92) : 1;

  const phaseIdx = loading
    ? Math.min(LOAD_PHASES.length - 1, Math.max(stagePhase, Math.floor(progress * LOAD_PHASES.length)))
    : LOAD_PHASES.length - 1;

  const count = Math.round(12847 * easeOutCubic(progress));

  return { progress, phaseIdx, count };
}
