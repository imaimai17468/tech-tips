"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Button, Flex, Text } from "@mantine/core";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export const TipPostButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      w="fit-content"
      onClick={() => {
        router.push(CLIENT_PATHS.TOP);
      }}
    >
      <Flex align="center" gap={4}>
        <Text>Post</Text>
        <PaperPlaneIcon />
      </Flex>
    </Button>
  );
};
