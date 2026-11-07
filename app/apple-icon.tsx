import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 76,
          background: "linear-gradient(135deg, #3B62E6, #5277E8)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 40,
          fontWeight: 800,
          letterSpacing: -2,
        }}
      >
        DP
      </div>
    ),
    {
      ...size,
    },
  );
}

