import SeoComponent from "@/components/layout/SeoComponent";
import { TipCreateContent } from "@/components/template/tip/create/TipCreateContent";
import type { Metadata } from "next";

export const metadata: Metadata = SeoComponent({
  title: "Create Tip | TechTips",
  description: "あなたの技術Tipsを作成しましょう",
  url: `${process.env.NEXT_PUBLIC_URL}/tip/create`,
  imageUrl: "image/default_ogp.png",
  noindex: true,
});

export default function Home() {
  return <TipCreateContent />;
}
