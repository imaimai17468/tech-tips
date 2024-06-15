import { Anchor, Card, Flex, Stack, Text } from "@mantine/core";
import { Logo } from "../Logo";

export const Footer: React.FC = () => {
  return (
    <Card shadow="md" radius="md" w="fit-content" m={32} ml="auto" pos="sticky" top="100%">
      <Flex gap={16} align="end">
        <Stack gap={4}>
          <Logo />
          <Text size="xs" c="gray.6">
            僕らの技術のはき捨てば
          </Text>
        </Stack>
        <Flex gap={4} c="gray.6">
          <Text size="sm">Build by</Text>
          <Anchor underline="hover" size="sm" href="https://x.com/imaimai17468">
            imaimai17468
          </Anchor>
        </Flex>
      </Flex>
    </Card>
  );
};
