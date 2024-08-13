import SeoComponent from "@/components/layout/SeoComponent";
import { StockContent } from "@/components/template/stock/StockContent";
import type { Metadata } from "next";

export const metadata: Metadata = SeoComponent({
  title: "Your Stock | TechTips",
  description: "保存した技術Tipsを確認しましょう",
  url: `${process.env.NEXT_PUBLIC_URL}/stock`,
  imageUrl: "image/default_ogp.png",
  noindex: false,
});

export default function Home() {
  return <StockContent />;
}
