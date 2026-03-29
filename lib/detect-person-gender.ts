/**
 * detectPersonGender — Firebase callable function
 *
 * Deploy this file in your Firebase Functions project alongside analyzeClothingImage.
 * It uses Gemini to detect whether the person in a photo is Male or Female.
 *
 * Returns: { gender: "Men" | "Women" } or throws if no person is detected.
 */

import { onCall, HttpsError } from "firebase-functions/v2/https";
import { GEMINI_KEY, callGemini, previewText } from "./shared";

const PROMPT = `Look at this photo and determine the gender of the person in it.

RULES:
- Answer ONLY with a JSON object, no extra text.
- If there is a clearly visible person, return their gender.
- Use "Male" for male-presenting and "Female" for female-presenting.
- If no person is visible, or you cannot determine gender with confidence, return "unknown".

OUTPUT FORMAT:
{"gender": "Male"} or {"gender": "Female"} or {"gender": "unknown"}

Return ONLY the JSON object.`;

export const detectPersonGender = onCall(
  {
    secrets: [GEMINI_KEY],
    enforceAppCheck: false,
    invoker: "public",
    cors: true,
  },
  async (request) => {
    const { imageBase64, mimeType = "image/jpeg" } = request.data as {
      imageBase64: string;
      mimeType?: string;
    };

    if (!imageBase64) {
      throw new HttpsError("invalid-argument", "imageBase64 is required.");
    }

    console.log(
      `detectPersonGender called | mimeType=${mimeType} | imageBase64Len=${imageBase64.length}`
    );

    const text = await callGemini(GEMINI_KEY.value(), {
      contents: [
        {
          parts: [
            { text: PROMPT },
            { inline_data: { mime_type: mimeType, data: imageBase64 } },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        topK: 1,
        topP: 1,
        maxOutputTokens: 64,
      },
    });

    console.log(`detectPersonGender raw response="${previewText(text, 200)}"`);

    try {
      let jsonText = text.trim();
      if (jsonText.startsWith("```")) jsonText = jsonText.replace(/^```json?/, "").replace(/```$/, "").trim();
      const match = /\{[\s\S]*\}/.exec(jsonText);
      if (!match) throw new Error("No JSON in response");
      const parsed = JSON.parse(match[0]) as { gender?: string };
      const raw = (parsed.gender ?? "").toLowerCase();
      if (raw === "male") return { gender: "male" };
      if (raw === "female") return { gender: "female" };
      return { gender: null };
    } catch {
      return { gender: null };
    }
  }
);
