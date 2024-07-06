import { createMockTips } from "@/repositories/tips/mock";
import { Divider, Stack, Title } from "@mantine/core";
import { TipItem } from "./component/TipItem";

export const TipsSettingContent: React.FC = () => {
  const tips = createMockTips(10);

  return (
    <Stack>
      <Title>Tips Setting</Title>
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
