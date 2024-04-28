import { createMockTip } from "@/repositories/tips/mock";
import { ActionIcon, Anchor, Avatar, Badge, Card, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { BookmarkIcon, Link1Icon } from "@radix-ui/react-icons";

export const TipDetailContent: React.FC = () => {
  const tip = createMockTip();

  return (
    <Flex gap={32}>
      <Card shadow="xs" padding="xl" radius="lg" h="fit-content" w="100%">
        <Stack gap={16}>
          <Stack gap={4}>
            <Title>{tip.title}</Title>
            <Text size="xl">{tip.description}</Text>
          </Stack>
          <Flex gap={8}>
            {tip.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </Flex>
          <Text>{tip.content}</Text>
        </Stack>
      </Card>
      <Stack>
        <Flex gap={8}>
          <ActionIcon radius="xl" variant="outline" color="pink">
            <BookmarkIcon />
          </ActionIcon>
          <ActionIcon radius="xl" variant="outline">
            <Link1Icon />
          </ActionIcon>
        </Flex>
        <Card shadow="xs" padding="xl" radius="lg" w={300} style={{ flexShrink: 0 }} h="fit-content">
          <Stack gap={16}>
            <Flex align="center" gap={8}>
              <Avatar src={tip.author.userImageURL} alt={tip.author.username} />
              <Anchor lineClamp={1} c="black" fw={700}>
                {tip.author.username}
              </Anchor>
            </Flex>
            <Text>{tip.author.bio}</Text>
            <Flex gap={8}>
              <ActionIcon radius="xl" variant="outline" color="black">
                <Image src="/image/github-mark.svg" w={16} h={16} />
              </ActionIcon>
              <ActionIcon radius="xl" color="black">
                <Image src="/image/logo.svg" w={16} h={16} />
              </ActionIcon>
            </Flex>
          </Stack>
        </Card>
      </Stack>
    </Flex>
  );
};
