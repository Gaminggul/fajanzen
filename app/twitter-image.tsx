import { ImageResponse } from "next/og";
import { SEO } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  const tagline = SEO.en.tagline;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "radial-gradient(circle at top left, rgba(94,242,214,0.28), transparent 60%), radial-gradient(circle at bottom right, rgba(243,181,98,0.24), transparent 55%), #050806",
          color: "#e6f3ee",
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Noel Janzen
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#8ff0d8",
          }}
        >
          {tagline}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 20,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(230, 243, 238, 0.7)",
          }}
        >
          fajanzen.de
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
