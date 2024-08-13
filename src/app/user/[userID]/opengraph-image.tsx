import { createMockUser } from "@/repositories/user/mock";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "TechTips";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const user = createMockUser();

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        background: "linear-gradient(to right, #7AF78D, #73BDFC)",
        width: "100%",
        height: "100%",
        padding: 32,
      }}
    >
      <div
        style={{
          background: "#f5f5f5",
          padding: 48,
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
        <h1
          style={{
            fontSize: 56,
            fontWeight: 700,
          }}
        >
          {user.username}さんの技術tips
        </h1>
        <div style={{ display: "flex", alignSelf: "flex-end" }}>
          <img src={user.userImageURL} alt={user.username} style={{ width: 64, height: 64, borderRadius: "50%" }} />
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
