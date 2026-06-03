import type { WtwProductItem } from "./wtw-utils";

export const INFO_COLORS = {
  background: "#FFFFFF",
  ink: "#0A0A0A",
  muted: "#6B6B6B",
  muted2: "#9A9A9A",
  hair: "#ECECEC",
} as const;

export const CHIP_TONES = {
  warm: "#C7B59B",
  cool: "#9AA6AD",
  blush: "#C9A89C",
  sage: "#9AA68B",
  sand: "#B8A079",
  ash: "#8C8C8A",
  clay: "#A87A59",
  moss: "#7C896A",
} as const;

export type ChipTone = keyof typeof CHIP_TONES;

export const DEFAULT_CHIPS: { name: string; tone: ChipTone }[] = [
  { name: "Linen blazer", tone: "warm" },
  { name: "Silk camisole", tone: "blush" },
  { name: "Wide trouser", tone: "cool" },
  { name: "Suede loafer", tone: "sand" },
  { name: "Gold hoop", tone: "ash" },
];

export const FALLBACK_COMPLIMENT = "Let's make them remember.";
export const FALLBACK_MEGA = "Go slay.";
export const FALLBACK_CLOSING = "You're going to look incredible.";

export const TIMELINE_DURATION = 58.5;
export const PROGRESS_90_AT = 54.5;
export const PROGRESS_CAP = 98;
export const HALO_START = 38;

/** Full reference timeline plays over this many real seconds on web */
export const WEB_TIMELINE_REAL_SECONDS = 32;
export const WEB_TIMELINE_RATIO = TIMELINE_DURATION / WEB_TIMELINE_REAL_SECONDS;
/** After API completes, advance remaining phases at this timeline-seconds per real second */
export const WEB_FAST_FORWARD_RATE = 7;
/** Pause timeline here until API completes, then fast-forward through closing */
export const WEB_TIMELINE_HOLD_UNTIL_API = 54.4;

export function toTimelineElapsed(realSeconds: number): number {
  return Math.min(realSeconds * WEB_TIMELINE_RATIO, TIMELINE_DURATION);
}

export function pickPrimaryLayer(
  layers: CopyLayer[],
  type: CopyLayer["type"]
): CopyLayer | undefined {
  const matches = layers.filter((l) => l.type === type);
  if (matches.length === 0) return undefined;
  return matches.reduce((best, layer) => (layer.start >= best.start ? layer : best));
}

export type CopyLayerType =
  | "eyebrow"
  | "hero"
  | "sub"
  | "number"
  | "mega"
  | "closing"
  | "almostDone";

export type CopyLayer = {
  id: string;
  type: CopyLayerType;
  text: string;
  start: number;
  end: number;
  align?: "eyebrow" | "hero" | "sub" | "number" | "chips" | "fit" | "closing";
  numberLabel?: string;
};

export type SessionRandoms = {
  funnel1: number;
  funnel2: number;
  funnel3: number;
  fitConfidence: number;
};

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createSessionRandoms(): SessionRandoms {
  return {
    funnel1: randomInt(10000, 14999),
    funnel2: randomInt(200, 300),
    funnel3: 5,
    fitConfidence: randomInt(96, 99),
  };
}

export function formatUserPrompt(prompt: string): string {
  const trimmed = (prompt || "").trim();
  if (!trimmed) return "Going on a date.";
  if (/[.!?]$/.test(trimmed)) return trimmed;
  return `${trimmed}.`;
}

export function chipsFromProducts(items: WtwProductItem[]): { name: string; tone: ChipTone }[] {
  const tones: ChipTone[] = ["warm", "blush", "cool", "sand", "ash", "sage", "clay", "moss"];
  return items.slice(0, 5).map((item, i) => ({
    name: item.name || item.category || "Piece",
    tone: tones[i % tones.length],
  }));
}

export function computeProgressPct(elapsed: number): number {
  if (elapsed <= PROGRESS_90_AT) {
    return Math.min(90, Math.round((elapsed / PROGRESS_90_AT) * 90));
  }
  const extra = Math.floor((elapsed - PROGRESS_90_AT) / 2);
  return Math.min(PROGRESS_CAP, 90 + extra);
}

export function isInWindow(elapsed: number, start: number, end: number): boolean {
  return elapsed >= start && elapsed < end;
}

export type FunnelStep = 0 | 1 | 2 | null;

export function getFunnelStep(elapsed: number): FunnelStep {
  if (elapsed >= 12 && elapsed < 18) return 0;
  if (elapsed >= 18 && elapsed < 22) return 1;
  if (elapsed >= 22 && elapsed < 25) return 2;
  return null;
}

export function buildStaticLayers(
  userPrompt: string,
  compliment: string,
  megaText: string,
  closingLine: string
): CopyLayer[] {
  const prompt = formatUserPrompt(userPrompt);
  return [
    { id: "p1-eyebrow", type: "eyebrow", text: "FROM YOUR PROMPT", start: 0.5, end: 4.5, align: "eyebrow" },
    { id: "p1-hero", type: "hero", text: prompt, start: 0.9, end: 4.5, align: "hero" },
    { id: "p2-hero", type: "hero", text: "Setting the vibe.", start: 6.0, end: 10.5, align: "hero" },
    { id: "p2-sub", type: "sub", text: compliment, start: 6.7, end: 10.5, align: "sub" },
    { id: "p3-eyebrow", type: "eyebrow", text: "READING YOUR TASTE", start: 12.0, end: 25.0, align: "eyebrow" },
    { id: "p4-eyebrow", type: "eyebrow", text: "BUILDING THE LOOK", start: 26.5, end: 42.0, align: "eyebrow" },
    { id: "p4-h1", type: "hero", text: "Tailored to you.", start: 27.0, end: 30.5, align: "hero" },
    { id: "p4-h2", type: "hero", text: "Better than expected.", start: 32.0, end: 36.0, align: "hero" },
    { id: "p4-h3", type: "hero", text: "Getting things ready.", start: 37.5, end: 41.0, align: "hero" },
    { id: "p5-eyebrow", type: "eyebrow", text: "TRYING IT ON YOU", start: 42.5, end: 54.5, align: "eyebrow" },
    { id: "p5-h1", type: "hero", text: "Setting the drape.", start: 43.0, end: 47.0, align: "hero" },
    { id: "p5-h2", type: "hero", text: "Catching the light.", start: 48.5, end: 52.0, align: "hero" },
    { id: "p5-h3", type: "hero", text: "Trust us, you look incredible.", start: 53.0, end: 54.5, align: "hero" },
    { id: "p6-almost", type: "almostDone", text: "Almost done", start: 54.5, end: 58.5, align: "closing" },
    { id: "p6-mega", type: "mega", text: megaText, start: 56.0, end: 58.5, align: "closing" },
    { id: "p6-closing", type: "closing", text: closingLine, start: 57.5, end: 58.5, align: "closing" },
  ];
}

export function getNumberLayer(
  elapsed: number,
  randoms: SessionRandoms
): { value: number; label: string } | null {
  const step = getFunnelStep(elapsed);
  if (step === 0) return { value: randoms.funnel1, label: "Outfits considered" };
  if (step === 1) return { value: randoms.funnel2, label: "fit your taste" };
  if (step === 2) return { value: randoms.funnel3, label: "made the cut" };
  return null;
}

export function getActiveLayers(layers: CopyLayer[], timelineElapsed: number): CopyLayer[] {
  return layers.filter((l) => isInWindow(timelineElapsed, l.start, l.end));
}

export function showChips(timelineElapsed: number): boolean {
  return timelineElapsed >= 28 && timelineElapsed < 42;
}

export function showFitMeter(timelineElapsed: number): boolean {
  return timelineElapsed >= 43.5 && timelineElapsed < 53.0;
}

export function getFitPct(timelineElapsed: number, target: number): number {
  if (timelineElapsed < 43.5) return 0;
  if (timelineElapsed >= 53) return target;
  const progress = (timelineElapsed - 43.5) / (53 - 43.5);
  return Math.round(target * Math.min(1, progress));
}
