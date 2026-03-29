# AI Stylist Landing Page Callable Pipeline

## Overview
This document explains how the landing-page `StylistTool` wires your “AI Stylist” UX to the 4 Firebase callable functions:
`analyzeOutfitIntent`, `analyzeClothingImage`, `fetchOutfitProducts`, and `executeMultiItemTryOn`.

After implementation, the landing page no longer shows only placeholder outfit cards. Instead, it calls the backend pipeline and renders the returned try-on images (`itemResults[].resultImageUrl`) in the UI.

## UX Flow (What the user does)
1. User types an occasion/prompt in the input box.
2. A small picker appears:
   - Select **Female Model** or **Male Model**, or
   - Click **Upload Your Photo** and choose an image.
3. The UI generates outfits:
   - If the user picks a model: generation runs using that gender.
   - If the user uploads a photo: the UI first calls `analyzeClothingImage` to infer gender, then generates outfits for the inferred gender.
4. The UI renders 3 try-on outfit images under the input box.

## Backend Pipeline (Callable Steps)
The calls follow this conceptual order:

```mermaid
flowchart TD
  A[User prompt] --> B[analyzeOutfitIntent]
  B --> C[fetchOutfitProducts]
  C --> D[executeMultiItemTryOn]
  D --> E[UI renders itemResults[].resultImageUrl]

  U[Upload photo] --> V[analyzeClothingImage]
  V -->|infer gender| B
```

### 1) `analyzeOutfitIntent`
**Request**
- `prompt: string`
- `gender?: "Women" | "Men"` (we pass the selected/inferred gender)

**Response**
- Structured outfit intent object (used directly by `fetchOutfitProducts`)

### 2) `fetchOutfitProducts`
**Request**
- `intent: OutfitIntent`
- `productsPerCategory?: number` (currently `3`)
- `userId: string` (anonymous UID)

**Response**
- `recommendations: Array<{ category, products: [...] }>`

### 3) `executeMultiItemTryOn`
**Request**
- `recommendations`
- `userId`
- `userProvidedItems?` (only when the user uploads a photo)

**Response**
- `finalImageUrl` (optional)
- `itemResults: Array<{ category, success, resultImageUrl, skipped, ... }>`

### 4) `analyzeClothingImage`
**Request (upload path)**
- `imageBase64: string`
- `mimeType?: string`
- `analyzeAll?: boolean` (currently `false`)

**Response**
- The landing page attempts to infer `gender` from common response fields.

## Implementation Notes
### Frontend code
Key files:
- `components/features/ai-stylist/StylistTool.tsx`
  - Orchestrates the UX state machine and renders output.
- `lib/firebaseClient.ts`
  - Initializes Firebase (auth + functions).
- `lib/slidezCallableFunctions.ts`
  - Wraps the 4 callables in typed frontend helper functions.

### Anonymous `userId`
The UI signs in anonymously (via Firebase Auth) before calling callables that require `userId`.

### Photo gender inference
The UI calls `analyzeClothingImage` and then tries to infer gender from common fields such as:
- `gender`, `predictedGender`, `userGender`
- `isMale`, `isFemale`
- `category`/`label` keywords

If gender inference fails, the UI falls back to showing an error and placeholder results.

### `userProvidedItems` category value (important)
When generating from an uploaded photo, the UI currently sends:
- `userProvidedItems: [{ category: "user", imageBase64, mimeType }]`

If your backend expects a different `category` value, update it in:
`StylistTool.tsx` (upload flow).

## Error Handling & Fallbacks
The UI:
- Shows a small stage indicator while generating.
- If any callable fails, it sets `tryOnError` and:
  - Renders fallback placeholder outfit cards (so the page doesn’t look broken).

Backend-specific known failure modes (from `AI_STYLIST_EXPERIENCE_AND_DEBUG.md`):
- `UNAUTHENTICATED`: ensure anonymous sign-in + callable/App Check setup
- Cloud Run `401`: ensure callables are deployed with `invoker: "public"`
- Gemini quota (`429 RESOURCE_EXHAUSTED`): ensure the backend short-circuits with a clean message

## How to Extend / Modify
1. Change the number of products per category
   - Update `productsPerCategory` in `generateTryOn` inside `StylistTool.tsx`.
2. Update photo gender inference
   - Adjust `inferGender` in `StylistTool.tsx` to match your backend response contract.
3. Align `userProvidedItems` with backend expectations
   - Update the `category` string in the upload flow.

## Testing Checklist
1. Model selection path:
   - Prompt -> choose **Female Model** -> 3 images appear.
2. Photo upload path:
   - Prompt -> **Upload Your Photo** -> gender inferred -> 3 images appear.
3. Failure modes:
   - If quota errors happen, ensure the UI shows the returned backend message.
   - If upload analysis fails, confirm fallback behavior.

