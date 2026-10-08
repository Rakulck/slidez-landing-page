import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "Slidez MCP Server",
    version: "1.0.0",
    status: "active",
    protocolVersion: "2024-11-05",
  });
}

export async function POST() {
  return NextResponse.json({
    jsonrpc: "2.0",
    result: {
      protocolVersion: "2024-11-05",
      capabilities: {
        tools: {},
        resources: {},
        prompts: {},
      },
      serverInfo: {
        name: "Slidez AI Fashion & Stylist MCP Server",
        version: "1.0.0",
      },
    },
  });
}
