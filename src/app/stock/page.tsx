import { StockContent } from "@/components/template/stock/StockContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Stock | TechTips",
  description: "保存した技術Tipsを確認しましょう",
  openGraph: {
    title: "Your Stock | TechTips",
    description: "保存した技術Tipsを確認しましょう",
    images: "image/default_ogp.png",
  },
};

export default function Home() {
  return <StockContent />;
}
