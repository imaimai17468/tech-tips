import { TipDetailContent } from "@/components/template/tip/detail/TipDetailContent";
import { createMockTip } from "@/repositories/tips/mock";
import type { Metadata } from "next";

type Props = {
  params: { tipID: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.tipID;
  const tip = createMockTip({ id });

  return {
    title: `${tip.title} | TechTips`,
    description: `${tip.author.username}さんの技術tips`,
    openGraph: {
      title: `${tip.title} | TechTips`,
      description: `${tip.author.username}さんの技術tips`,
    },
  };
}

export default function Home() {
  return <TipDetailContent />;
}
