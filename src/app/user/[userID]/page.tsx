import SeoComponent from "@/components/layout/SeoComponent";
import { UserProfileContent } from "@/components/template/user/UserProfileContent";
import { createMockUser } from "@/repositories/user/mock";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ userID: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const id = params.userID;
  const user = createMockUser({ id });

  return SeoComponent({
    title: `${user.username}'s Tips | TechTips`,
    description: `${user.username}さんの技術tips`,
    url: `${process.env.NEXT_PUBLIC_URL}/user/${user.id}`,
    imageUrl: "image/default_ogp.png",
    noindex: false,
  });
}

export default function Home() {
  return <UserProfileContent />;
}
