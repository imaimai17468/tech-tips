import SeoComponent from "@/components/layout/SeoComponent";
import { TipDetailContent } from "@/components/template/tip/detail/TipDetailContent";
import { createMockTip } from "@/repositories/tips/mock";
import type { Metadata } from "next";

type Props = {
  params: { tipID: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.tipID;
  const tip = createMockTip({ id });

  return SeoComponent({
    title: `${tip.title} | TechTips`,
    description: `${tip.author.username}さんの技術tips`,
    url: `${process.env.NEXT_PUBLIC_URL}/tip/${tip.id}`,
    noindex: false,
  });
}

export default function Home() {
  return <TipDetailContent />;
}
