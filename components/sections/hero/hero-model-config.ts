import type { Gender } from "@/lib/slidezCallableFunctions";

export type HeroGender = "women" | "men";

export type HeroModelEntry = {
  id: string;
  name: string;
  top: string;
  bot: string;
  glow: string;
  src: string;
};

export const HERO_MODELS: Record<HeroGender, HeroModelEntry[]> = {
  women: [
    { id: "mia", name: "Mia", top: "#e6c9b6", bot: "#bb8d76", glow: "#f1ddd1", src: "/models/onboarding-woman-2.png" },
    { id: "ava", name: "Ava", top: "#c8cfd8", bot: "#8d99a8", glow: "#dde4ec", src: "/models/onboarding-woman-1.png" },
    { id: "lena", name: "Lena", top: "#d0d6c1", bot: "#95a081", glow: "#e4e9da", src: "/models/brunette-woman.png" },
  ],
  men: [
    { id: "leo", name: "Leo", top: "#c8cfd8", bot: "#8d99a8", glow: "#dde4ec", src: "/models/onboarding-man-1.png" },
    { id: "sam", name: "Sam", top: "#dcc1a7", bot: "#a98863", glow: "#eddcc7", src: "/models/onboarding-man-2.png" },
    { id: "eli", name: "Eli", top: "#e6c9b6", bot: "#bb8d76", glow: "#f1ddd1", src: "/models/black-man.png" },
  ],
};

export const HERO_FIG_PATHS: Record<HeroGender, string> = {
  women:
    "M110,18 C123,18 135,30 135,47 C135,61 127,72 117,76 L119,88 C134,93 148,101 154,118 L146,200 L180,320 L150,344 L146,432 L128,432 L120,346 L100,346 L92,432 L74,432 L70,344 L40,320 L66,118 C72,101 86,93 101,88 L103,76 C93,72 85,61 85,47 C85,30 97,18 110,18 Z",
  men:
    "M110,18 C126,18 139,31 139,49 C139,64 130,75 119,79 L121,90 C139,94 156,103 163,119 L151,210 L157,250 L150,432 L124,432 L116,300 L104,300 L96,432 L70,432 L63,250 L69,210 L57,119 C64,103 81,94 99,90 L101,79 C90,75 81,64 81,49 C81,31 94,18 110,18 Z",
};

export function heroGenderToApi(gender: HeroGender): Gender {
  return gender === "women" ? "Women" : "Men";
}

export function getHeroModel(gender: HeroGender, modelId: string): HeroModelEntry {
  return HERO_MODELS[gender].find((m) => m.id === modelId) ?? HERO_MODELS[gender][0];
}

export function pickRandomHeroModelId(gender: HeroGender, excludeId: string): string {
  const pool = HERO_MODELS[gender].filter((m) => m.id !== excludeId);
  if (pool.length === 0) return excludeId;
  return pool[Math.floor(Math.random() * pool.length)].id;
}

export const DEFAULT_HERO_GENDER: HeroGender = "women";
export const DEFAULT_HERO_MODEL_ID = HERO_MODELS.women[0].id;
