import SeoComponent from "@/components/layout/SeoComponent";
import { TipsSettingContent } from "@/components/template/setting/tips/TipsSettingContent";
import type { Metadata } from "next";

export const metadata: Metadata = SeoComponent({
  title: "Tips Setting | TechTips",
  description: "あなたの技術Tipsを管理をしましょう",
  url: `${process.env.NEXT_PUBLIC_URL}/setting/tips`,
  imageUrl: "image/default_ogp.png",
  noindex: false,
});

export default function Home() {
  return <TipsSettingContent />;
}
