import { TopContent } from "@/components/template/top/TopContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechTips",
  description: "ためになる技術置き場",
  openGraph: {
    title: "TechTips",
    description: "ためになる技術置き場",
    images: "image/default_ogp.png",
  },
};

export default function Home() {
  return <TopContent />;
}
