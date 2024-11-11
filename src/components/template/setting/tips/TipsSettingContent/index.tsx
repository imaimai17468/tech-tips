import { Skeleton, Stack, Title } from "@mantine/core";
import { Suspense } from "react";
import { TipSettingsList } from "./TipSettingsList";

export const TipsSettingContent: React.FC = async () => {
  return (
    <Stack gap={32}>
      <Title>Tips Setting</Title>
      <Suspense fallback={<Skeleton height={300} />}>
        <TipSettingsList />
      </Suspense>
    </Stack>
  );
};
