import { TipsSettingContent } from "@/components/template/setting/tips/TipsSettingContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tips Setting | TechTips",
  description: "あなたの技術Tipsを管理をしましょう",
  openGraph: {
    title: "Tips Setting | TechTips",
    description: "あなたの技術Tipsを管理をしましょう",
  },
};

export default function Home() {
  return <TipsSettingContent />;
}
