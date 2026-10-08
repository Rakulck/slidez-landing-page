import { NextResponse } from "next/server";

export async function GET() {
  const manifest = {
    specVersion: "1.0",
    host: {
      displayName: "Slidez",
      identifier: "did:web:slidez.social",
    },
    entries: [
      {
        identifier: "urn:air:slidez.social:mcp:fashion-stylist",
        displayName: "Slidez MCP Server",
        type: "application/mcp-server-card+json",
        url: "https://www.slidez.social/.well-known/mcp/server-card.json",
        representativeQueries: [
          "what should I wear to a casual coffee date",
          "generate outfit recommendations for winter work chic",
          "how can I try on clothes virtually before buying",
        ],
      },
      {
        identifier: "urn:air:slidez.social:agent:fashion-stylist",
        displayName: "Slidez A2A Agent",
        type: "application/json",
        url: "https://www.slidez.social/.well-known/agent-card.json",
        representativeQueries: [
          "find outfits matching my personal style",
          "visualize clothing looks on a virtual model",
        ],
      },
      {
        identifier: "urn:air:slidez.social:api:openapi",
        displayName: "Slidez OpenAPI Specification",
        type: "application/openapi+json",
        url: "https://www.slidez.social/openapi.json",
        representativeQueries: [
          "query Slidez AI styling endpoints",
          "check API health status",
        ],
      },
      {
        identifier: "urn:air:slidez.social:skills:agent-skills",
        displayName: "Slidez Agent Skills Index",
        type: "application/json",
        url: "https://www.slidez.social/.well-known/agent-skills/index.json",
        representativeQueries: [
          "discover available AI stylist skills",
          "find virtual try-on agent skill definitions",
        ],
      },
      {
        identifier: "urn:air:slidez.social:docs:llms-txt",
        displayName: "Slidez LLMs Documentation",
        type: "text/plain",
        url: "https://www.slidez.social/llms.txt",
        representativeQueries: [
          "read Slidez product overview and documentation",
          "learn how Slidez AI fashion assistant works",
        ],
      },
    ],
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
