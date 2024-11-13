import SeoComponent from "@/components/layout/SeoComponent";
import { TipDetailContent } from "@/components/template/tip/detail/TipDetailContent";
import { createMockTip } from "@/repositories/tips/mock";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ tipID: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const id = params.tipID;
  const tip = createMockTip({ id });

  return SeoComponent({
    title: `${tip.title} | TechTips`,
    description: `${tip.author.username}さんの技術tips`,
    url: `${process.env.NEXT_PUBLIC_URL}/tip/${tip.id}`,
    imageUrl: "image/default_ogp.png",
    noindex: false,
  });
}

export default async function Home(props: Props) {
  const params = await props.params;
  return <TipDetailContent tipID={params.tipID} />;
}
