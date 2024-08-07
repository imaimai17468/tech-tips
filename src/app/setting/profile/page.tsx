import { ProfileContent } from "@/components/template/setting/profile/ProfileContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Setting | Tech Tips",
  description: "あなたのプロフィールを設定しましょう",
};

export default function Home() {
  return <ProfileContent />;
}
