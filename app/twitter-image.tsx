import { ImageResponse } from "next/og";
import { Info } from "@/lib/data";

export const alt = `${Info.name} — Frontend, Full Stack & AI Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #f8fafc 0%, #e8eeff 100%)",
          color: "#172033",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              borderRadius: 14,
              background: "#5277E8",
              fontSize: 22,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            DP
          </div>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#172033" }}>{Info.name}</span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 52, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1 }}>
          Building meaningful digital experiences with modern web &amp; AI.
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 22, opacity: 0.75, lineHeight: 1.45, maxWidth: 840 }}>
          Computer Science student · ANU CET · Frontend, Full Stack &amp; Generative AI Enthusiast.
        </div>
        <div style={{ display: "flex", marginTop: 32, gap: 14, fontSize: 18, color: "#5277E8", fontWeight: 600 }}>
          <span>{Info.email}</span>
          <span style={{ color: "#64748b" }}>·</span>
          <span>github.com/{Info.githubUser}</span>
        </div>
      </div>
    ),
    size,
  );
}
