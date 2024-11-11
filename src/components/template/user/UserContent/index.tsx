import { TipList } from "@/components/parts/TipList";
import { Skeleton, Stack } from "@mantine/core";
import { Suspense } from "react";
import { UserProfileCard } from "./UserProfileCard";

type Props = {
  userID: string;
};

export const UserContent: React.FC<Props> = async ({ userID }) => {
  return (
    <Stack gap={32}>
      <Suspense fallback={<Skeleton w="100%" h={200} />}>
        <UserProfileCard userID={userID} />
      </Suspense>
      <Suspense fallback={<Skeleton height={300} />}>
        <TipList type={{ user: "public", authorId: userID }} />
      </Suspense>
    </Stack>
  );
};
