import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Slidez – AI Stylist & Virtual Try-On";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Brand label */}
        <div
          style={{
            color: "#808080",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Slidez
        </div>

        {/* Main headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          AI Stylist &amp; Virtual Try-On
        </div>

        {/* Subline */}
        <div
          style={{
            color: "rgba(255,255,255,0.38)",
            fontSize: 26,
            marginTop: 28,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Generate outfits. Try them on. Free on iOS &amp; Android.
        </div>
      </div>
    ),
    { ...size }
  );
}
