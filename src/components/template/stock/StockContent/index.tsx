import { TipList } from "@/components/parts/TipList";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Button, Flex, Stack, Title } from "@mantine/core";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const StockContent: React.FC = async () => {
  return (
    <Stack gap={32}>
      <Flex justify="space-between" align="end">
        <Title>Your Stocked Tips</Title>
        <Button variant="subtle" rightSection={<ArrowRightIcon />} component="a" href={CLIENT_PATHS.TIP}>
          Your Tips
        </Button>
      </Flex>
      <TipList type={{ user: "stocked" }} />
    </Stack>
  );
};
