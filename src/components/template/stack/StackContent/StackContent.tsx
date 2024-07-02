import { TipList } from "@/components/parts/TipList";
import { Stack, Text } from "@mantine/core";

export const StackContent: React.FC = () => {
  return (
    <Stack>
      <Text size="xl" fw="bold">
        Your Stacks
      </Text>
      <TipList />
    </Stack>
  );
};
