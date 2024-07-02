import { TipList } from "@/components/parts/TipList";
import { Stack, Text } from "@mantine/core";

export const TopContent: React.FC = () => {
  return (
    <Stack>
      <Text size="xl" fw="bold">
        Your Tips
      </Text>
      <TipList />
    </Stack>
  );
};
