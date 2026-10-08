import { NextResponse } from "next/server";

export async function GET() {
  const catalog = {
    linkset: [
      {
        anchor: "https://www.slidez.social/",
        "service-desc": [
          {
            href: "https://www.slidez.social/openapi.json",
            type: "application/json",
          },
          {
            href: "https://www.slidez.social/.well-known/agent-card.json",
            type: "application/json",
          },
          {
            href: "https://www.slidez.social/.well-known/openid-configuration",
            type: "application/json",
          },
          {
            href: "https://www.slidez.social/.well-known/oauth-protected-resource",
            type: "application/json",
          },
          {
            href: "https://www.slidez.social/.well-known/mcp/server-card.json",
            type: "application/json",
          },
          {
            href: "https://www.slidez.social/.well-known/agent-skills/index.json",
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: "https://www.slidez.social/llms.txt",
            type: "text/plain",
          },
        ],
        status: [
          {
            href: "https://www.slidez.social/api/health",
            type: "application/json",
          },
        ],
      },
    ],
  };

  return NextResponse.json(catalog, {
    headers: {
      "Content-Type":
        'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
