"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Button, Flex, Text } from "@mantine/core";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export const TipCreateButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      w="fit-content"
      onClick={() => {
        router.push(CLIENT_PATHS.TIP_CREATE);
      }}
    >
      <Flex align="center" gap={4}>
        <PlusCircledIcon />
        <Text>Create</Text>
      </Flex>
    </Button>
  );
};
