import { CLIENT_PATHS } from "@/constants/clientPaths";
import { ActionIcon, Anchor, Avatar, Box, Card, Flex, UnstyledButton } from "@mantine/core";
import { BellIcon } from "@radix-ui/react-icons";
import { Logo } from "../Logo";
import { TipCreateButton } from "./components/TipCreateButton";

export const Header: React.FC = () => {
  return (
    <Box py={16} px={32} pos="sticky" top={0}>
      <Flex justify="space-between" align="center">
        <Anchor href={CLIENT_PATHS.TOP} underline="never">
          <Logo />
        </Anchor>
        <Card shadow="md" radius="md" py={8} px={24}>
          <Flex gap={16} align="center">
            <ActionIcon variant="outline" radius="xl">
              <BellIcon />
            </ActionIcon>
            <UnstyledButton>
              <Avatar />
            </UnstyledButton>
            <TipCreateButton />
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
};
