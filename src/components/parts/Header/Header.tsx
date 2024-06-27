import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Anchor, Card, Flex } from "@mantine/core";
import { Logo } from "../Logo";
import { RouteButton } from "./components/RouteButton";
import { TipCreateButton } from "./components/TipCreateButton";
import { UserButton } from "./components/UserButton";
import { createMockUser } from "@/repositories/user/mock";

export const Header: React.FC = () => {
  const user = createMockUser();

  return (
    <Card shadow="md" radius="md" py={8} px={24} mx={16} mt={16}>
      <Flex justify="space-between" align="center">
        <Anchor href={CLIENT_PATHS.TOP} underline="never">
          <Logo />
        </Anchor>
        <Flex gap={16} align="center">
          <RouteButton href={CLIENT_PATHS.TOP}>YourTips</RouteButton>
          <RouteButton href={CLIENT_PATHS.STACK}>Stack</RouteButton>
          <TipCreateButton />
          <UserButton href={user.userImageURL} userName={user.username} />
        </Flex>
      </Flex>
    </Card>
  );
};
