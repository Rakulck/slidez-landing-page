import { NextResponse } from "next/server";

export async function GET() {
  const metadata = {
    resource: "https://www.slidez.social",
    authorization_servers: ["https://www.slidez.social"],
    scopes_supported: ["openid", "profile", "email"],
    bearer_methods_supported: ["header"],
    resource_documentation: "https://www.slidez.social/llms.txt",
  };

  return NextResponse.json(metadata, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
