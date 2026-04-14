import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site.config";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse at 20% 10%, #1e3a8a 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, #4c1d95 0%, transparent 50%), #07090f",
          color: "#e6eaf2",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg,#60a5fa,#2563eb,#8b5cf6)",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em" }}>Courtix</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              maxWidth: 960,
            }}
          >
            Enterprise-grade software, engineered to ship.
          </div>
          <div style={{ fontSize: 28, color: "#9aa4b2", maxWidth: 880 }}>
            Custom applications · Cloud hosting · API integration · DevOps & SRE
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#64748b",
          }}
        >
          <div>courtix.com</div>
          <div>Delaware, USA · Established 2021</div>
        </div>
      </div>
    ),
    size
  );
}
