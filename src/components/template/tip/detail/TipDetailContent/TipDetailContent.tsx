import { AuthorCard } from "@/components/parts/authorCard";
import { createMockTip } from "@/repositories/tips/mock";
import { ActionIcon, Badge, Card, Flex, Stack, Text, Title } from "@mantine/core";
import { BookmarkIcon, Link1Icon } from "@radix-ui/react-icons";
import { TipEditButton } from "../../edit/components/TipEditButton/TipEditButton";

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
          {tip.tags && (
            <Flex gap={8}>
              {tip.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </Flex>
          )}
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
        <AuthorCard user={tip.author} />
        <TipEditButton id={tip.id} />
      </Stack>
    </Flex>
  );
};
