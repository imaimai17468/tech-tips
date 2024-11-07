import { auth } from "@clerk/nextjs/server";
import { Alert, Skeleton, Stack, Title } from "@mantine/core";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import { ProfileImageAlert } from "./component/ProfileImageAlert";
import { ProfileSettingsContent } from "./component/ProfileSettingsContent";

export const ProfileContent: React.FC = async () => {
  const { userId } = await auth();

  return (
    <Stack gap={32}>
      <Title>Profile Setting</Title>
      <Stack>
        <ProfileImageAlert />
        {userId ? (
          <Suspense fallback={<Skeleton height={100} />}>
            <ProfileSettingsContent userId={userId} />
          </Suspense>
        ) : (
          <Alert color="red" icon={<ExclamationTriangleIcon />} title="User Not Found">
            Unable to retrieve UserID.
          </Alert>
        )}
      </Stack>
    </Stack>
  );
};
