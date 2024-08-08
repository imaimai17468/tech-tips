import { TipCreateContent } from "@/components/template/tip/create/TipCreateContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Tip | TechTips",
  description: "あなたの技術Tipsを作成しましょう",
  openGraph: {
    title: "Create Tip | TechTips",
    description: "あなたの技術Tipsを作成しましょう",
  },
  robots: {
    index: true,
  },
};

export default function Home() {
  return <TipCreateContent />;
}
