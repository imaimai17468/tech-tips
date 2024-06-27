import { TipList } from "@/components/parts/TipList";
import { createMockTips } from "@/repositories/tips/mock";
import { Stack, Text } from "@mantine/core";

export const TopContent: React.FC = () => {
  const tips = createMockTips(10);

  return (
    <Stack>
      <Text size="xl" fw="bold">
        Your Tips
      </Text>
      <TipList tips={tips} />
    </Stack>
  );
};
