import type { HeroGender } from "./hero-model-config";

/** Original model photos shown while each prompt is typing */
export const PROMPT_TYPING_MODELS: { gender: HeroGender; modelId: string }[] = [
  { gender: "women", modelId: "mia" },
  { gender: "women", modelId: "ava" },
  { gender: "men", modelId: "leo" },
  { gender: "men", modelId: "sam" },
  { gender: "women", modelId: "mia" },
];

/** Custom slides shown during 3s pause and while deleting (index matches hero PROMPTS) */
export const PROMPT_PAUSE_IMAGES = [
  "/hero-slides/slide_woman_2.jpg",
  "/hero-slides/slide_woman_3.png",
  "/hero-slides/slide_woman2_2.jpg",
  "/hero-slides/slide4.jpg",
  "/hero-slides/slide_man2_1.png",
] as const;
