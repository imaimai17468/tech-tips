import { TipList } from "@/components/parts/TipList";
import { createMockTips } from "@/repositories/tips/mock";
import { Skeleton, Stack } from "@mantine/core";
import { Suspense } from "react";
import { UserProfileCard } from "./UserProfileCard";

type Props = {
  userID: string;
};

export const UserContent: React.FC<Props> = async ({ userID }) => {
  const tips = createMockTips(10);

  return (
    <Stack gap={32}>
      <Suspense fallback={<Skeleton w="100%" h={200} />}>
        <UserProfileCard userID={userID} />
      </Suspense>
      <TipList tips={tips} />
    </Stack>
  );
};
