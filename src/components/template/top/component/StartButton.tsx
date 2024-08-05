"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export const StartButton: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <ClerkLoading>
        <Button variant="light" loading />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <Button variant="light" onClick={() => router.push(CLIENT_PATHS.TIP)}>
            自分のページへ
          </Button>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button variant="light">はじめる</Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};
