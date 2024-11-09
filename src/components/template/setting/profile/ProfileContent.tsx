import { Skeleton, Stack, Title } from "@mantine/core";
import { Suspense } from "react";
import { ProfileImageAlert } from "./component/ProfileImageAlert";
import { ProfileSettingsContent } from "./component/ProfileSettingsContent";

export const ProfileContent: React.FC = async () => {
  return (
    <Stack gap={32}>
      <Title>Profile Setting</Title>
      <Stack>
        <ProfileImageAlert />
        <Suspense fallback={<Skeleton height={900} />}>
          <ProfileSettingsContent />
        </Suspense>
      </Stack>
    </Stack>
  );
};
