import type { Tip } from "@/repositories/tips/types";
import { Avatar, Card, Flex, Stack, Text } from "@mantine/core";
import { HeartIcon } from "@radix-ui/react-icons";

export const TipCard: React.FC<{ tip: Tip }> = ({ tip }) => {
  return (
    <Card shadow="xs" radius="md" padding="md">
      <Stack gap={16} justify="space-between" h="100%">
        <Stack gap={4}>
          <Text lineClamp={2} size="lg" fw={700}>
            {tip.title}
          </Text>
          <Text lineClamp={3}>{tip.description}</Text>
        </Stack>
        <Flex justify="space-between" align="end">
          <Flex align="center" gap={8}>
            <Avatar src={tip.author.userImageURL} alt={tip.author.username} />
            <Text lineClamp={1}>{tip.author.username}</Text>
          </Flex>
          <Flex align="center" gap={4}>
            <HeartIcon color="#F783AC" />
            <Text size="xs" style={{ fontFamily: "sans-serif" }}>
              {tip.favCount}
            </Text>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  );
};
