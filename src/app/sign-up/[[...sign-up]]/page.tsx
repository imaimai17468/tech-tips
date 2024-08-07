import { SignUp } from "@clerk/nextjs";
import { Center } from "@mantine/core";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | TechTips",
  description: "ログインしてあなたの技術Tipsを作成しましょう",
  openGraph: {
    title: "Sign Up | TechTips",
    description: "ログインしてあなたの技術Tipsを作成しましょう",
  },
};

export default function Page() {
  return (
    <Center>
      <SignUp />
    </Center>
  );
}
