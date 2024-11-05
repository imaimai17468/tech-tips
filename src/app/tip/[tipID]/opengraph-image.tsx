import { createMockTip } from "@/repositories/tips/mock";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "TechTips";
export const size = {
  width: 960,
  height: 504,
};

export const contentType = "image/png";

export default async function Image() {
  const tip = createMockTip();
  const clampedTitle = tip.title.slice(0, 100) + (tip.title.length > 100 ? "..." : "");

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        background: "linear-gradient(to right, #7AF78D, #73BDFC)",
        width: "100%",
        height: "100%",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "#f5f5f5",
          padding: 32,
          borderRadius: 16,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            {clampedTitle}
          </h1>
          {tip.tags && (
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {tip.tags.map((tag) => (
                <p
                  key={tag}
                  style={{
                    background: "#73BDFC",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "white",
                  }}
                >
                  {tag}
                </p>
              ))}
            </div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, alignSelf: "flex-end" }}>
          <img
            src={tip.author.userImageURL}
            alt={tip.author.username}
            style={{ width: 64, height: 64, borderRadius: "50%" }}
          />
          <p style={{ fontSize: 24, fontWeight: 700, alignSelf: "flex-end" }}>{tip.author.username}</p>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
