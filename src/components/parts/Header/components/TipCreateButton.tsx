import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Button, Flex, Text } from "@mantine/core";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const TipCreateButton: React.FC = () => {
  return (
    <Button w="fit-content" component={Link} href={CLIENT_PATHS.TIP_CREATE}>
      <Flex align="center" gap={4}>
        <PlusCircledIcon />
        <Text>Create</Text>
      </Flex>
    </Button>
  );
};
