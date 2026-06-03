/** Gentle, slow easing for cinematic loading copy */
export const WTW_EASE_IN = [0.25, 0.1, 0.25, 1] as const;
export const WTW_EASE_OUT = [0.4, 0, 0.2, 1] as const;

export const WTW_PHRASE_ENTER_MS = 0.9;
export const WTW_PHRASE_EXIT_MS = 0.8;

export const WTW_PHRASE_VARIANTS = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: WTW_PHRASE_ENTER_MS, ease: WTW_EASE_IN },
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: { duration: WTW_PHRASE_EXIT_MS, ease: WTW_EASE_OUT },
  },
};

export const WTW_SCREEN_TRANSITION = {
  duration: 0.75,
  ease: WTW_EASE_IN,
} as const;

export const WTW_SCREEN_VARIANTS = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
};

export const WTW_CHIP_TRANSITION = {
  duration: 0.85,
  ease: WTW_EASE_IN,
} as const;

export const WTW_REVEAL_TRANSITION = {
  duration: 1.05,
  ease: WTW_EASE_IN,
} as const;
