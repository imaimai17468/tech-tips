import { Stack, Title } from "@mantine/core";
import { UserTipList } from "./UserTipList";

export const TipsSettingContent: React.FC = async () => {
  return (
    <Stack gap={32}>
      <Title>Tips Setting</Title>
      <UserTipList />
    </Stack>
  );
};
