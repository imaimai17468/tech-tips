import { TipEditContent } from "@/components/template/tip/edit/TipEditContent";
import { createMockTip } from "@/repositories/tips/mock";
import type { Metadata } from "next";

type Props = {
  params: { tipID: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.tipID;
  const tip = createMockTip({ id });

  return {
    title: `編集中 | ${tip.title} | TechTips`,
    description: "あなたの技術tipsを編集します",
    openGraph: {
      title: `編集中 | ${tip.title} | TechTips`,
      description: "あなたの技術tipsを編集します",
    },
    robots: {
      index: true,
    },
  };
}

export default function Home() {
  return <TipEditContent />;
}
