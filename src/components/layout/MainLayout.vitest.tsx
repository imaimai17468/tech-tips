import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MainLayout } from "./MainLayout";

// テスト用のモックコンポーネント
vi.mock("@/components/parts/Footer", () => ({
  Footer: () => <footer>Footer</footer>,
}));

vi.mock("@/components/parts/Header", () => ({
  Header: () => <header>Header</header>,
}));

vi.mock("@/components/parts/Aurora", () => ({
  Aurora: () => <div data-testid="aurora">Aurora</div>,
}));

describe("MainLayout", () => {
  it("should render children content", () => {
    render(
      <MainLayout>
        <div data-testid="test-content">Test Content</div>
      </MainLayout>,
    );

    expect(screen.getByTestId("test-content")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("should render header and footer", () => {
    render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>,
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("should render Aurora component", () => {
    render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>,
    );

    expect(screen.getByTestId("aurora")).toBeInTheDocument();
  });

  it("should have a main content area", () => {
    render(
      <MainLayout>
        <div>Content</div>
      </MainLayout>,
    );

    const mainContent = screen.getByText("Content").closest("div");
    expect(mainContent).toBeInTheDocument();
  });
});
