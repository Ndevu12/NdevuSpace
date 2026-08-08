import { ImageResponse } from "next/og";
import { SITE_CONFIG, FEATURED_TECH } from "@/data/seo";

export const runtime = "edge";
export const alt = `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Extract domain from URL for display
const displayUrl = SITE_CONFIG.url.replace(/^https?:\/\//, "");

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        {/* Ambient monochrome glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -150,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "rgba(255, 255, 255, 0.06)",
            filter: "blur(120px)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 80px",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f2f2f2",
              margin: 0,
              marginBottom: 16,
              letterSpacing: "-2px",
            }}
          >
            {SITE_CONFIG.name}
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: 36,
              color: "#9a9a9a",
              margin: 0,
              marginBottom: 32,
              fontWeight: 500,
            }}
          >
            {SITE_CONFIG.title}
          </p>

          {/* Tagline */}
          <p
            style={{
              fontSize: 24,
              color: "#6b6b6b",
              margin: 0,
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            {SITE_CONFIG.description.tagline}
          </p>

          {/* Tech stack tags - glass look */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {FEATURED_TECH.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "8px 20px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: 20,
                  color: "#d4d4d4",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Website URL */}
          <p
            style={{
              fontSize: 20,
              color: "#6b6b6b",
              margin: 0,
              marginTop: 48,
              fontWeight: 500,
            }}
          >
            {displayUrl}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
