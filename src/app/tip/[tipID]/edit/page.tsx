import SeoComponent from "@/components/layout/SeoComponent";
import { TipEditContent } from "@/components/template/tip/edit/TipEditContent";
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
    title: `編集中 | ${tip.title} | TechTips`,
    description: "あなたの技術tipsを編集します",
    url: `${process.env.NEXT_PUBLIC_URL}/tip/${id}/edit`,
    imageUrl: "image/default_ogp.png",
    noindex: true,
  });
}

export default async function Home(props: Props) {
  const params = await props.params;
  return <TipEditContent tipID={params.tipID} />;
}
