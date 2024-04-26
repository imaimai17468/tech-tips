import { PATHS } from "@/constants/paths";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Card,
  Flex,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { BellIcon } from "@radix-ui/react-icons";

export const Header: React.FC = () => {
  return (
    <Box py={16} pl={32} pr={16} style={{ position: "sticky", top: 0 }}>
      <Flex justify="space-between" align="center">
        <Anchor href={PATHS.TOP}>
          <Text
            size="xl"
            fw={700}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
          >
            Tech Tips
          </Text>
        </Anchor>
        <Card shadow="md" radius="md" py={8} px={24}>
          <Flex gap={16} align="center">
            <ActionIcon variant="outline" radius="xl">
              <BellIcon />
            </ActionIcon>
            <UnstyledButton>
              <Avatar />
            </UnstyledButton>
          </Flex>
        </Card>
      </Flex>
    </Box>
  );
};
