export const LOAD_PHASES = [
  "Reading your prompt",
  "Curating your pieces",
  "Composing the outfit",
  "Trying it on you",
] as const;

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function clamp01(x: number): number {
  return Math.max(0, Math.min(1, x));
}

export function occasionFromPrompt(prompt: string): string {
  const p = (prompt || "").toLowerCase();
  if (/office|work|interview|meeting/.test(p)) return "Office";
  if (/party|club|night out/.test(p)) return "Party";
  if (/beach|pool|summer/.test(p)) return "Beach";
  if (/winter|cold|snow/.test(p)) return "Winter";
  if (/casual|everyday|relaxed/.test(p)) return "Casual";
  if (/brunch|sunday/.test(p)) return "Brunch";
  return "Date night";
}

export function mapTryOnStageToPhase(tryOnStage: string | null): number {
  if (!tryOnStage) return 0;
  const s = tryOnStage.toLowerCase();
  if (/try-on|generating|render/.test(s)) return 3;
  if (/compos|outfit|match|find/.test(s)) return 2;
  if (/curat|product|piec/.test(s)) return 1;
  if (/analy|read|style|intent|upload|setup|detect/.test(s)) return 0;
  return 0;
}

export type WtwFlowScreen = "input" | "loading" | "result";

export type WtwProductItem = {
  category: string;
  name: string;
  imageUrl: string | null;
  productLink: string | null;
  brand: string | null;
  brandLogoUrl: string | null;
};

export function inferBrandFromLink(link: string | null): string | null {
  if (!link) return null;
  try {
    const hostname = new URL(link).hostname.replace(/^www\./, "");
    const base = hostname.split(".")[0] ?? "";
    if (!base || base.length < 2) return null;
    const skip = new Set(["shop", "m", "store", "api", "cdn", "click"]);
    if (skip.has(base.toLowerCase())) return null;
    return base.charAt(0).toUpperCase() + base.slice(1);
  } catch {
    return null;
  }
}
