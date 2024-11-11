import { TipList } from "@/components/parts/TipList";
import { createMockTips } from "@/repositories/tips/mock";
import { Skeleton, Stack } from "@mantine/core";
import { Suspense } from "react";
import { UserProfileCard } from "./UserProfileCard";

export const UserContent: React.FC = () => {
  const tips = createMockTips(10);

  return (
    <Stack gap={32}>
      <Suspense fallback={<Skeleton w="100%" h={200} />}>
        <UserProfileCard />
      </Suspense>
      <TipList tips={tips} />
    </Stack>
  );
};
