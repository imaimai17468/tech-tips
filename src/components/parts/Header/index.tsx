"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Anchor, Button, Flex } from "@mantine/core";
import { Logo } from "../Logo";
import { SettingsButton } from "./components/SettingsButton";
import { ThemeSwitch } from "./components/ThemeSwitch";

export const Header: React.FC = () => {
  const { user, isSignedIn } = useUser();

  return (
    <Flex
      justify="space-between"
      align="center"
      py={16}
      px={24}
      pos="sticky"
      top={0}
      style={{
        zIndex: 1000,
        backdropFilter: "blur(4px)",
        "@supports (backdrop-filter: blur(4px))": {
          backgroundColor: "rgba(var(--background-color, 255, 255, 255), 0.6)",
        },
      }}
    >
      <Anchor href={isSignedIn ? CLIENT_PATHS.TIP : CLIENT_PATHS.TOP} underline="never">
        <Logo />
      </Anchor>
      <Flex gap={16} align="center">
        <ClerkLoading>
          <Button variant="light" loading />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
            {isSignedIn && <SettingsButton userID={user.id} />}
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="light">はじめる</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
        <ThemeSwitch />
      </Flex>
    </Flex>
  );
};
