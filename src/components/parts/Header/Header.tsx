"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createMockUser } from "@/repositories/user/mock";
import { Anchor, Flex, Button } from "@mantine/core";
import { Logo } from "../Logo";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { SettingsButton } from "./components/SettingsButton";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const Header: React.FC = () => {
  const user = createMockUser();

  return (
    <Flex justify="space-between" align="center" py={8} px={24} mx={16} mt={16}>
      <Anchor href={user ? CLIENT_PATHS.TIP : CLIENT_PATHS.TOP} underline="never">
        <Logo />
      </Anchor>
      <Flex gap={16} align="center">
        <ClerkLoading>
          <Button variant="light" loading />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
            <SettingsButton href={user.userImageURL} userName={user.username} userID={user.id} />
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
