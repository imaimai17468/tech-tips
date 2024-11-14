"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import type { Tip } from "@/repositories/tips/types";
import { dayFormat } from "@/utils/dayFormat";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { Anchor, Avatar, Badge, Card, Flex, Stack, Text } from "@mantine/core";

export const TipCard: React.FC<{ tip: Tip }> = ({ tip }) => {
  return (
    <Card radius="md" padding="md" shadow="sm">
      <Stack gap={16} justify="space-between" h="100%">
        <Stack gap={8}>
          <Flex gap={8} align="center" ml="auto">
            <Text size="xs">{dayFormat(tip.createdAt)}</Text>
            {tip.isPublic ? (
              <Badge variant="light" color="green">
                Public
              </Badge>
            ) : (
              <Badge variant="light" color="red">
                Private
              </Badge>
            )}
          </Flex>
          <Anchor href={replaceIDinPath(CLIENT_PATHS.TIP_DETAIL, tip.id)} lineClamp={2} size="lg" fw={700} c="black">
            {tip.title}
          </Anchor>
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
        <Flex align="center" gap={8} justify="flex-end">
          <Avatar size="sm" src={tip.author.userImageURL} alt={tip.author.username} />
          <Text lineClamp={1}>{tip.author.username}</Text>
        </Flex>
      </Stack>
    </Card>
  );
};
