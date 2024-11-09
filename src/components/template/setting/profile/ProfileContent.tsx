import { LoadingOverlay, Stack, Title } from "@mantine/core";
import { Suspense } from "react";
import { ProfileImageAlert } from "./component/ProfileImageAlert";
import { ProfileSettingsContent } from "./component/ProfileSettingsContent";

export const ProfileContent: React.FC = async () => {
  return (
    <Stack gap={32}>
      <Title>Profile Setting</Title>
      <Stack>
        <ProfileImageAlert />
        <Suspense
          fallback={
            <LoadingOverlay
              visible
              zIndex={1000}
              loaderProps={{ type: "bars", color: "blue" }}
              overlayProps={{ radius: "sm", blur: 2 }}
            />
          }
        >
          <ProfileSettingsContent />
        </Suspense>
      </Stack>
    </Stack>
  );
};
