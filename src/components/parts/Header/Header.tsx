import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createMockUser } from "@/repositories/user/mock";
import { Anchor, Card, Flex } from "@mantine/core";
import { Logo } from "../Logo";
import { RouteButton } from "./components/RouteButton";
import { TipCreateButton } from "./components/TipCreateButton";
import { UserButton } from "./components/UserButton";

export const Header: React.FC = () => {
  const user = createMockUser();

  return (
    <Card shadow="sm" radius="md" py={8} px={24} mx={16} mt={16}>
      <Flex justify="space-between" align="center">
        <Anchor href={CLIENT_PATHS.TOP} underline="never">
          <Logo />
        </Anchor>
        <Flex gap={16} align="center">
          <RouteButton href={CLIENT_PATHS.TOP}>YourTips</RouteButton>
          <RouteButton href={CLIENT_PATHS.STACK}>Stacks</RouteButton>
          <TipCreateButton />
          <UserButton href={user.userImageURL} userName={user.username} userID={user.id} />
        </Flex>
      </Flex>
    </Card>
  );
};
