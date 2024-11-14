import { TipList } from "@/components/parts/TipList";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Button, Flex, Skeleton, Stack, Title } from "@mantine/core";
import { ArrowRightIcon, GearIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";

export const TipContent: React.FC = async () => {
  return (
    <Stack gap={32}>
      <Flex justify="space-between" align="end">
        <Flex align="center" gap={16}>
          <Title>Your Tips</Title>
          <Button
            variant="light"
            radius="xl"
            component="a"
            href={CLIENT_PATHS.TIP_CREATE}
            leftSection={<PlusCircledIcon />}
          >
            Create Tip
          </Button>
          <Button
            variant="light"
            radius="xl"
            component="a"
            color="gray"
            href={CLIENT_PATHS.SETTINGS_TIPS}
            leftSection={<GearIcon />}
          >
            Manage Tips
          </Button>
        </Flex>
        <Button variant="subtle" rightSection={<ArrowRightIcon />} component="a" href={CLIENT_PATHS.STOCK}>
          Stocked Tips
        </Button>
      </Flex>
      <Suspense fallback={<Skeleton height={300} />}>
        <TipList type={{ user: "logged-in" }} />
      </Suspense>
    </Stack>
  );
};
