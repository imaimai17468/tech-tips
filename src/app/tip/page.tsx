import SeoComponent from "@/components/layout/SeoComponent";
import { TipContent } from "@/components/template/tip/TipContent";
import type { Metadata } from "next";

export const metadata: Metadata = SeoComponent({
  title: "Your Tips | TechTips",
  description: "あなたの技術Tipsを確認しましょう",
  url: `${process.env.NEXT_PUBLIC_URL}/tip`,
  imageUrl: "/image/default_ogp.png",
  noindex: false,
});

export default function Home() {
  return <TipContent />;
}
