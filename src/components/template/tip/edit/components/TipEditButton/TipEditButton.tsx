"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { replaceIDinPath } from "@/libs/replaceIDinPath";
import { Button, Flex, Text } from "@mantine/core";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

export const TipEditButton: React.FC<Props> = ({ id }) => {
  const router = useRouter();

  return (
    <Button
      w="fit-content"
      onClick={() => {
        router.push(replaceIDinPath(CLIENT_PATHS.TIP_EDIT, id));
      }}
    >
      <Flex align="center" gap={4}>
        <PlusCircledIcon />
        <Text>Edit</Text>
      </Flex>
    </Button>
  );
};
