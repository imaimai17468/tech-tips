"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import type { Tip } from "@/repositories/tips/types";
import { dayFormat } from "@/utils/dayFormat";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { Anchor, Avatar, Badge, Card, Flex, Stack, Text } from "@mantine/core";

export const TipCard: React.FC<{ tip: Tip }> = ({ tip }) => {
  return (
    <Card radius="md" padding="md" style={{ border: "1px solid var(--mantine-color-gray-3)" }}>
      <Stack gap={16} justify="space-between" h="100%">
        <Stack gap={4}>
          <Anchor href={replaceIDinPath(CLIENT_PATHS.TIP_DETAIL, tip.id)} lineClamp={2} size="lg" fw={700} c="black">
            {tip.title}
          </Anchor>
          <Text size="xs">{dayFormat(tip.createdAt)}</Text>
          {tip.tags && tip.tags.length > 0 && (
            <Flex gap={8} wrap="wrap">
              {tip.tags.map((tag) => (
                <Badge variant="light" key={tag}>
                  {tag}
                </Badge>
              ))}
            </Flex>
          )}
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
