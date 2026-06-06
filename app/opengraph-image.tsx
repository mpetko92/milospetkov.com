import { ImageResponse } from "next/og";
import { site, hero } from "@/data/content";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "80px",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#5b6eff",
            }}
          />
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>{hero.eyebrow}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#d4d4d8",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {hero.headline}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#71717a" }}>
          {`${site.role} · linkedin.com/in/petko92`}
        </div>
      </div>
    ),
    { ...size }
  );
}
