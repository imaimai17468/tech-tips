import { TipList } from "@/components/parts/TipList";
import { createMockTips } from "@/repositories/tips/mock";
import { Stack, Text } from "@mantine/core";

export const StackContent: React.FC = () => {
  const tips = createMockTips(10);

  return (
    <Stack>
      <Text size="xl" fw="bold">
        Your Stacks
      </Text>
      <TipList tips={tips} />
    </Stack>
  );
};
