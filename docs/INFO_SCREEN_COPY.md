# Slidez Multi Try-On Loading — Copy & Design Reference

Web implementation: `components/features/ai-stylist/wtw/`. Mobile source: `info_screen.dart`.

## Overview

| Item | Value |
|------|--------|
| Duration (nominal) | 58 seconds |
| Background | `#FFFFFF` |
| Web hybrid | Result shows when API completes; timeline fast-forwards to closing if API finishes early |

## Color palette

| Token | Hex | Usage |
|-------|-----|--------|
| Background | `#FFFFFF` | Screen |
| Ink | `#0A0A0A` | Headlines, numbers |
| Muted | `#6B6B6B` | Eyebrows, subtext |
| Muted 2 | `#9A9A9A` | Secondary UI |
| Hair | `#ECECEC` | Progress track |

**Chip tones:** warm `#C7B59B`, cool `#9AA6AD`, blush `#C9A89C`, sage `#9AA68B`, sand `#B8A079`, ash `#8C8C8A`, clay `#A87A59`, moss `#7C896A`

## Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Eyebrow | Roboto Mono | 11px | 500 |
| Hero | Inter | 44px | 600 |
| Sub | Inter | 22px | 400 |
| Big numbers | Inter | 96px | 600 |
| Progress label | Roboto Mono | 9.5px | — |

## Full timeline copy

### Phase 1 — Intro (0–4.5s)

- `FROM YOUR PROMPT`
- **{user prompt}** (punctuation added if missing)

### Phase 2 — Context (6–10.5s)

- `Setting the vibe.`
- **{AI compliment}** (default: `Let's make them remember.`)

### Phase 3 — Number funnel (12–25s)

- `READING YOUR TASTE`
- **{10,000–14,999}** · `Outfits considered`
- **{200–300}** · `fit your taste`
- `5` · `made the cut`

### Phase 4 — Building (26.5–42s)

- `BUILDING THE LOOK`
- `Tailored to you.` / `Better than expected.` / `Getting things ready.`
- Product chips (default or API categories)

### Phase 5 — Try-on (42.5–54.5s)

- `TRYING IT ON YOU`
- `Setting the drape.` / `Catching the light.` / `Trust us, you look incredible.`
- **{96–99}%** · `FIT CONFIDENCE`

### Phase 6 — Closing (54.5–58.5s)

- `Almost done` + animated `...`
- **{AI mega}** (default: `Go slay.`)
- **{AI closing}** (default: `You're going to look incredible.`)

### Persistent footer

- `COMPOSING YOUR LOOK` · `{progress}%` (90% by 54.5s, then +1% / 2s to 98% cap)

## AI callables

- `generateStylistCompliment` — Phase 2 subtext
- `generateStylistClosing` — Phase 6 mega + closing lines

Wired in `lib/slidezCallableFunctions.ts` with static fallbacks on error.

## Landing copy-paste (full story)

```
FROM YOUR PROMPT
{Your occasion prompt.}

Setting the vibe.
{Personalized compliment.}

READING YOUR TASTE
12,847
Outfits considered

247
fit your taste

5
made the cut

BUILDING THE LOOK
Tailored to you.
Better than expected.
Getting things ready.

[Linen blazer] [Silk camisole] [Wide trouser] [Suede loafer] [Gold hoop]

TRYING IT ON YOU
Setting the drape.
Catching the light.
Trust us, you look incredible.

98%
FIT CONFIDENCE

Almost done...

Go slay.
You're going to look incredible.

COMPOSING YOUR LOOK · 98%
```
