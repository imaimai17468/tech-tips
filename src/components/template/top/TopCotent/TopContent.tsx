import { TipList } from "@/components/parts/TipList";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { ActionIcon, Button, Flex, Stack, Text } from "@mantine/core";
import { ArrowRightIcon, PlusIcon } from "@radix-ui/react-icons";

export const TopContent: React.FC = () => {
  return (
    <Stack>
      <Flex justify="space-between">
        <Flex align="center" gap={16}>
          <Text size="xl" fw="bold">
            Your Tips
          </Text>
          <ActionIcon variant="outline" radius="xl" component="a" href={CLIENT_PATHS.TIP_CREATE}>
            <PlusIcon />
          </ActionIcon>
        </Flex>
        <Button variant="subtle" rightSection={<ArrowRightIcon />} component="a" href={CLIENT_PATHS.STACK}>
          Stack Tips
        </Button>
      </Flex>
      <TipList />
    </Stack>
  );
};
