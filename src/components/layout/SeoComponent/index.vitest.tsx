import { describe, expect, it } from "vitest";
import SeoComponent, { type SEOProps } from "./SeoComponent";

describe("SeoComponent", () => {
  const defaultProps: SEOProps = {
    title: "Test Title",
    description: "Test Description",
    url: "https://example.com",
    noindex: false,
  };

  it("should generate correct metadata with required props", () => {
    const metadata = SeoComponent(defaultProps);

    expect(metadata).toEqual(
      expect.objectContaining({
        title: "Test Title",
        description: "Test Description",
        icons: "/icon.png",
        keywords: ["TechTips", "技術Tips", "技術", "Tips"],
        twitter: {
          card: "summary_large_image",
        },
        openGraph: {
          title: "Test Title",
          description: "Test Description",
          url: "https://example.com",
          siteName: "TechTips",
        },
        robots: {
          index: true,
        },
      }),
    );
  });

  it("should include image when imageUrl is provided", () => {
    const propsWithImage: SEOProps = {
      ...defaultProps,
      imageUrl: "https://example.com/image.jpg",
    };

    const metadata = SeoComponent(propsWithImage);

    expect(metadata.twitter).toEqual(
      expect.objectContaining({
        images: ["https://example.com/image.jpg"],
      }),
    );

    expect(metadata.openGraph).toEqual(
      expect.objectContaining({
        images: ["https://example.com/image.jpg"],
      }),
    );
  });

  it("should set noindex correctly", () => {
    const propsWithNoindex: SEOProps = {
      ...defaultProps,
      noindex: true,
    };

    const metadata = SeoComponent(propsWithNoindex);

    expect(metadata.robots).toEqual({
      index: false,
    });
  });

  it("should not include images when imageUrl is not provided", () => {
    const metadata = SeoComponent(defaultProps);

    expect(metadata.twitter).not.toHaveProperty("images");
    expect(metadata.openGraph).not.toHaveProperty("images");
  });
});
