import { TipList } from "@/components/parts/TipList";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createMockTips } from "@/repositories/tips/mock";
import { Button, Flex, Stack, Title } from "@mantine/core";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const StockContent: React.FC = () => {
  const tips = createMockTips(10);

  return (
    <Stack gap={32}>
      <Flex justify="space-between" align="end">
        <Title>Your Stocked Tips</Title>
        <Button variant="subtle" rightSection={<ArrowRightIcon />} component="a" href={CLIENT_PATHS.STOCK}>
          Your Tips
        </Button>
      </Flex>
      <TipList tips={tips} />
    </Stack>
  );
};
