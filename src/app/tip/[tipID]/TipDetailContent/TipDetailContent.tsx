import { Badge, Card, Flex, Stack, Text, Title } from "@mantine/core";
import { createMockTip } from "../../../../repositories/tips/mock";

export const TipDetailContent: React.FC = () => {
  const tip = createMockTip();

  return (
    <Card shadow="xs" padding="xl" radius="lg">
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
  );
};
