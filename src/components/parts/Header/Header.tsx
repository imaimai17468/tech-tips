import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createMockUser } from "@/repositories/user/mock";
import { Anchor, Flex } from "@mantine/core";
import { Logo } from "../Logo";
import { UserButton } from "./components/UserButton";

export const Header: React.FC = () => {
  const user = createMockUser();

  return (
    <Flex justify="space-between" align="center" py={8} px={24} mx={16} mt={16}>
      <Anchor href={CLIENT_PATHS.TOP} underline="never">
        <Logo />
      </Anchor>
      <UserButton href={user.userImageURL} userName={user.username} userID={user.id} />
    </Flex>
  );
};
