import SeoComponent from "@/components/layout/SeoComponent";
import { SignUp } from "@clerk/nextjs";
import { Center } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = SeoComponent({
  title: "Sign Up | TechTips",
  description: "ログインしてあなたの技術Tipsを作成しましょう",
  url: `${process.env.NEXT_PUBLIC_URL}/sign-up`,
  imageUrl: "image/default_ogp.png",
  noindex: false,
});

export default function Page() {
  return (
    <Center>
      <SignUp />
    </Center>
  );
}
