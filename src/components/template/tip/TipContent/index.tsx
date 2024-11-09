import { TipList } from "@/components/parts/TipList";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createMockTips } from "@/repositories/tips/mock";
import { Button, Flex, Stack, Title } from "@mantine/core";
import { ArrowRightIcon, PlusCircledIcon } from "@radix-ui/react-icons";

export const TipContent: React.FC = () => {
  const tips = createMockTips(10);

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
        </Flex>
        <Button variant="subtle" rightSection={<ArrowRightIcon />} component="a" href={CLIENT_PATHS.STOCK}>
          Stocked Tips
        </Button>
      </Flex>
      <TipList tips={tips} />
    </Stack>
  );
};
