import SeoComponent from "@/components/layout/SeoComponent";
import { UserContent } from "@/components/template/user/UserContent";
import { getUserByID } from "@/repositories/user/actions";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ userID: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const user = await getUserByID(params.userID);

  if (!user) {
    return SeoComponent({
      title: "User Tips | TechTips",
      description: "ユーザーが投稿したtips一覧",
      url: `${process.env.NEXT_PUBLIC_URL}/user/${params.userID}`,
      imageUrl: "image/default_ogp.png",
      noindex: true,
    });
  }

  return SeoComponent({
    title: `${user.username}'s Tips | TechTips`,
    description: `${user.username}さんの技術tips`,
    url: `${process.env.NEXT_PUBLIC_URL}/user/${user.id}`,
    imageUrl: "image/default_ogp.png",
    noindex: false,
  });
}

export default async function Home(props: Props) {
  const params = await props.params;
  return <UserContent userID={params.userID} />;
}
