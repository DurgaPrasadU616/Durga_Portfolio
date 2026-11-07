import { ImageResponse } from "next/og";
import { Info } from "@/lib/data";

export const alt = `${Info.name} — Frontend, Full Stack & AI Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #0f172a 0%, #172033 60%, #3b62e6 150%)",
          color: "#f8fafc",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #3b62e6, #5277E8)",
              fontSize: 24,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            DP
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontSize: 26, fontWeight: 700 }}>{Info.name}</span>
            <span style={{ fontSize: 16, opacity: 0.72 }}>dp.dev</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              display: "flex",
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontSize: 16,
              opacity: 0.9,
            }}
          >
            Frontend · Full Stack · Generative AI
          </div>
          <div style={{ display: "flex", fontSize: 50, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.12 }}>
            Building meaningful digital experiences with modern web technologies and AI.
          </div>
          <div style={{ display: "flex", fontSize: 22, opacity: 0.78, lineHeight: 1.4, maxWidth: 860 }}>
            Computer Science student passionate about building responsive web applications and AI-powered solutions.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 18, opacity: 0.75 }}>
          <span>4+ products shipped</span>
          <span>·</span>
          <span>300+ DSA problems</span>
          <span>·</span>
          <span>8.2 CGPA</span>
          <span>·</span>
          <span>Available for internships 2026</span>
        </div>
      </div>
    ),
    size,
  );
}
