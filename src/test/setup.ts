import "@testing-library/jest-dom";
import React from "react";
import { vi } from "vitest";

// Next.js関連のモック
vi.mock("next/headers", () => ({
  headers: () => new Headers(),
  cookies: () => ({ get: vi.fn(), set: vi.fn() }),
}));

// Mantineのモック
vi.mock("@mantine/core", () => {
  return {
    Box: (props: { children: React.ReactNode } & Record<string, unknown>) => {
      const { children, ...rest } = props;
      return React.createElement("div", rest, children);
    },
  };
});

// プロバイダーのモック
vi.mock("@/providers/MantineProvider", () => {
  return {
    MantineProvider: (props: { children: React.ReactNode }) => {
      return React.createElement(React.Fragment, null, props.children);
    },
  };
});

// 環境変数の設定
process.env.NEXT_PUBLIC_APP_URL = "http://localhost:3000";
process.env.TZ = "Asia/Tokyo";
