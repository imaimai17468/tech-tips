import SeoComponent from "@/components/layout/SeoComponent";
import { SignIn } from "@clerk/nextjs";
import { Center } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = SeoComponent({
  title: "Sign In | TechTips",
  description: "ログインしてあなたの技術Tipsを作成しましょう",
  url: `${process.env.NEXT_PUBLIC_URL}/sign-in`,
  imageUrl: "image/default_ogp.png",
  noindex: false,
});

export default function Page() {
  return (
    <Center>
      <SignIn />
    </Center>
  );
}
