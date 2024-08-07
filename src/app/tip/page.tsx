import { TipContent } from "@/components/template/tip/TipContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Tips | Tech Tips",
  description: "あなたの技術Tipsを作成しましょう",
};

export default function Home() {
  return <TipContent />;
}
