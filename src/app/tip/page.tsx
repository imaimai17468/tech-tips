import { TipContent } from "@/components/template/tip/TipContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Tips | TechTips",
  description: "あなたの技術Tipsを確認しましょう",
  openGraph: {
    title: "Your Tips | TechTips",
    description: "あなたの技術Tipsを確認しましょう",
    images: "image/default_ogp.png",
  },
};

export default function Home() {
  return <TipContent />;
}
