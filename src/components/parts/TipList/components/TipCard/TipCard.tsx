import { CLIENT_PATHS } from "@/constants/clientPaths";
import { replaceIDinPath } from "@/libs/replaceIDinPath";
import type { Tip } from "@/repositories/tips/types";
import { Anchor, Avatar, Badge, Card, Flex, Stack, Text } from "@mantine/core";

export const TipCard: React.FC<{ tip: Tip }> = ({ tip }) => {
  return (
    <Card shadow="xs" radius="md" padding="md">
      <Stack gap={16} justify="space-between" h="100%">
        <Stack gap={4}>
          <Anchor href={replaceIDinPath(CLIENT_PATHS.TIP_DETAIL, tip.id)} lineClamp={2} size="lg" fw={700} c="black">
            {tip.title}
          </Anchor>
          <Text lineClamp={3}>{tip.description}</Text>
          <Flex gap={8} wrap="wrap">
            {tip.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </Flex>
        </Stack>
        <Flex justify="space-between" align="end">
          <Flex align="center" gap={8}>
            <Avatar src={tip.author.userImageURL} alt={tip.author.username} />
            <Text lineClamp={1}>{tip.author.username}</Text>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  );
};
