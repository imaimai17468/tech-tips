import { SignIn } from "@clerk/nextjs";
import { Center } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | TechTips",
  description: "ログインしてあなたの技術Tipsを作成しましょう",
  openGraph: {
    title: "Sign In | TechTips",
    description: "ログインしてあなたの技術Tipsを作成しましょう",
  },
};

export default function Page() {
  return (
    <Center>
      <SignIn />
    </Center>
  );
}
