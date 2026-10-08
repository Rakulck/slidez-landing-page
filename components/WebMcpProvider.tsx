"use client";

import { useEffect } from "react";

export default function WebMcpProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const controller = new AbortController();
    const signal = controller.signal;

    const modelContext =
      (document as any).modelContext ||
      (typeof navigator !== "undefined" && (navigator as any).modelContext);

    if (!modelContext || typeof modelContext.registerTool !== "function") {
      return;
    }

    try {
      modelContext.registerTool(
        {
          name: "get_outfit_recommendations",
          description:
            "Generate AI fashion styling and outfit recommendations for an occasion, vibe, or aesthetic.",
          inputSchema: {
            type: "object",
            properties: {
              occasion: {
                type: "string",
                description:
                  "Event, occasion, or style vibe (e.g., casual coffee date, winter work chic)",
              },
              style: {
                type: "string",
                description: "Preferred fashion aesthetic or clothing style",
              },
            },
            required: ["occasion"],
          },
          execute: async (params: { occasion: string; style?: string }) => {
            return {
              status: "success",
              message: `Generated outfit recommendations for '${params.occasion}'`,
              url: `https://www.slidez.social/outfit-ideas?occasion=${encodeURIComponent(
                params.occasion
              )}`,
            };
          },
        },
        { signal }
      );

      modelContext.registerTool(
        {
          name: "virtual_try_on",
          description:
            "Visualize clothing items or complete outfit looks on a virtual body model.",
          inputSchema: {
            type: "object",
            properties: {
              itemUrl: {
                type: "string",
                description:
                  "Image URL or website link of the clothing item to try on",
              },
            },
            required: ["itemUrl"],
          },
          execute: async (params: { itemUrl: string }) => {
            return {
              status: "success",
              message: "Virtual try-on visualization initiated",
              url: "https://www.slidez.social/ai-virtual-try-on",
            };
          },
        },
        { signal }
      );

      modelContext.registerTool(
        {
          name: "search_fashion_guides",
          description:
            "Search Slidez AI fashion guides, styling tips, and closet articles.",
          inputSchema: {
            type: "object",
            properties: {
              query: {
                type: "string",
                description:
                  "Search topic (e.g. body type calculator, black jeans outfit, color matching)",
              },
            },
            required: ["query"],
          },
          execute: async (params: { query: string }) => {
            return {
              status: "success",
              query: params.query,
              url: `https://www.slidez.social/blog?q=${encodeURIComponent(
                params.query
              )}`,
            };
          },
        },
        { signal }
      );
    } catch {
      // Gracefully ignore registration errors in environments without WebMCP
    }

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}
