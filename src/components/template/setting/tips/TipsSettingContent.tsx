import { createMockTips } from "@/repositories/tips/mock";
import { Divider, Stack, Text } from "@mantine/core";
import { TipItem } from "./component/TipItem";

export const TipsSettingContent: React.FC = () => {
  const tips = createMockTips(10);

  return (
    <Stack>
      <Text size="xl" fw="bold">
        Tips Setting
      </Text>
      <Stack>
        {tips.map((tip) => (
          <Stack key={tip.id}>
            <TipItem tip={tip} />
            <Divider />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
