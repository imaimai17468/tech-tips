import { TipList } from "@/components/parts/TipList";
import { createMockTips } from "@/repositories/tips/mock";
import { Stack } from "@mantine/core";
import { TipCreateButton } from "./components/TipCreateButton";

export const TopContent: React.FC = () => {
  const tips = createMockTips(10);

  return (
    <Stack align="end">
      <TipCreateButton />
      <TipList tips={tips} />
    </Stack>
  );
};
