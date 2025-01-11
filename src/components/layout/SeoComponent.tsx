import type { Metadata } from "next";
export type SEOProps = {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  noindex: boolean;
};

export default function SeoComponent(Info: SEOProps): Metadata {
  const { title, description, url, imageUrl, noindex } = Info;

  const metadata: Metadata = {
    title: title,
    description: description,
    icons: "/icon.png",
    keywords: ["TechTips", "技術Tips", "技術", "Tips"],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    twitter: {
      card: "summary_large_image",
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: "TechTips",
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
    robots: {
      index: !noindex,
    },
  };
  return metadata;
}
