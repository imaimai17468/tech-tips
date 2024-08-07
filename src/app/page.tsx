import { TopContent } from "@/components/template/top/TopContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechTips",
  description: "ためになる技術置き場",
};

export default function Home() {
  return <TopContent />;
}
