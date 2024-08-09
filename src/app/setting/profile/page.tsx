import { ProfileContent } from "@/components/template/setting/profile/ProfileContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Setting | TechTips",
  description: "あなたのプロフィールを設定しましょう",
  openGraph: {
    title: "Profile Setting | TechTips",
    description: "あなたのプロフィールを設定しましょう",
    images: "image/default_ogp.png",
  },
};

export default function Home() {
  return <ProfileContent />;
}
