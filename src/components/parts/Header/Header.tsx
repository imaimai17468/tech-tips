"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { useAuth } from "@/context/auth";
import { Anchor, Flex } from "@mantine/core";
import { Logo } from "../Logo";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { UserButton } from "./components/UserButton";

export const Header: React.FC = () => {
  const user = useAuth();

  return (
    <Flex justify="space-between" align="center" py={8} px={24} mx={16} mt={16}>
      <Anchor href={user ? CLIENT_PATHS.TIP : CLIENT_PATHS.TOP} underline="never">
        <Logo />
      </Anchor>
      <Flex gap={16} align="center">
        {user && <UserButton href={user.userImageURL} userName={user.username} userID={user.id} />}
        <ThemeSwitch />
      </Flex>
    </Flex>
  );
};
