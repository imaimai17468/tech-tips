import { StockContent } from "@/components/template/stock/StockContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Stock | TechTips",
  description: "保存した技術Tipsを確認しましょう",
};

export default function Home() {
  return <StockContent />;
}
