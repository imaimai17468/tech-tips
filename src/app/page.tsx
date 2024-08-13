import SeoComponent from "@/components/layout/SeoComponent";
import { TopContent } from "@/components/template/top/TopContent";
import type { Metadata } from "next";

export const metadata: Metadata = SeoComponent({
  title: "TechTips",
  description: "あなたの技術Tipsを作成しましょう",
  url: `${process.env.NEXT_PUBLIC_URL}`,
  imageUrl: "/image/default_ogp.png",
  noindex: false,
});

export default function Home() {
  return <TopContent />;
}
