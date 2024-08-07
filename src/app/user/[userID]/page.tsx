import { UserProfileContent } from "@/components/template/user/UserProfileContent";
import { createMockUser } from "@/repositories/user/mock";
import type { Metadata } from "next";

type Props = {
  params: { userID: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.userID;
  const user = createMockUser({ id });

  return {
    title: `${user.username}'s Tips | TechTips`,
    description: `${user.username}さんの技術tips`,
    openGraph: {
      title: `${user.username}'s Tips | TechTips`,
      description: `${user.username}さんの技術tips`,
    },
  };
}

export default function Home() {
  return <UserProfileContent />;
}
