"use client";

import { Title, Stack, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AuthModal } from "./component/AuthModal";

export const TopContent: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack align="center">
      <Title>Where Technologies Rest.</Title>
      <Button onClick={open} variant="light">
        はじめる
      </Button>
      <AuthModal opened={opened} onClose={close} />
    </Stack>
  );
};
