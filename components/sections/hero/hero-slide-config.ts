import type { HeroGender } from "./hero-model-config";

export const HERO_PROMPTS = [
  "Style me for a rooftop dinner…",
  "Beach vacation look…",
  "Business casual, but make it edgy…",
  "Cozy Sunday brunch outfit…",
  "Chic night out look…",
] as const;

/**
 * Original model photos shown while each prompt is typing (before prompt completion).
 * Each entry is strictly matched to the same person and aesthetic in PROMPT_PAUSE_IMAGES.
 */
export const PROMPT_TYPING_MODELS: { gender: HeroGender; modelId: string }[] = [
  { gender: "women", modelId: "ava" }, // Ava before -> rooftop dinner outfit after
  { gender: "women", modelId: "mia" }, // Mia before -> beach vacation outfit after
  { gender: "men", modelId: "leo" },   // Leo before -> edgy suit after
  { gender: "men", modelId: "eli" },   // Eli before -> Sunday brunch outfit after
  { gender: "women", modelId: "ava" }, // Ava before -> chic night out outfit after
];

/**
 * Custom slides shown during pause and while deleting (after prompt completion).
 * Index exactly matches HERO_PROMPTS and PROMPT_TYPING_MODELS.
 */
export const PROMPT_PAUSE_IMAGES = [
  "/hero-slides/slide_woman_2.jpg",   // Ava - rooftop dinner
  "/hero-slides/slide_woman2_2.jpg",  // Mia - beach vacation
  "/hero-slides/slide_man2_1.png",    // Leo - edgy business casual
  "/hero-slides/slide4.jpg",          // Eli - cozy Sunday brunch
  "/hero-slides/slide_woman_3.png",   // Ava - chic night out
] as const;
