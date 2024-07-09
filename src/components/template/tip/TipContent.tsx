import { TipList } from "@/components/parts/TipList";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { ActionIcon, Button, Flex, Stack, Title } from "@mantine/core";
import { ArrowRightIcon, PlusIcon } from "@radix-ui/react-icons";

export const TipContent: React.FC = () => {
  return (
    <Stack gap={32}>
      <Flex justify="space-between" align="end">
        <Flex align="center" gap={16}>
          <Title>Your Tips</Title>
          <ActionIcon variant="light" radius="xl" component="a" href={CLIENT_PATHS.TIP_CREATE}>
            <PlusIcon />
          </ActionIcon>
        </Flex>
        <Button variant="subtle" rightSection={<ArrowRightIcon />} component="a" href={CLIENT_PATHS.STOCK}>
          Stocked Tips
        </Button>
      </Flex>
      <TipList />
    </Stack>
  );
};
