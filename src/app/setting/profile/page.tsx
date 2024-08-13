import SeoComponent from "@/components/layout/SeoComponent";
import { ProfileContent } from "@/components/template/setting/profile/ProfileContent";
import type { Metadata } from "next";

export const metadata: Metadata = SeoComponent({
  title: "Profile Setting | TechTips",
  description: "あなたのプロフィールを設定しましょう",
  url: `${process.env.NEXT_PUBLIC_URL}/setting/profile`,
  imageUrl: "image/default_ogp.png",
  noindex: false,
});

export default function Home() {
  return <ProfileContent />;
}
