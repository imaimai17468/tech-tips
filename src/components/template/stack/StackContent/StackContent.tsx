import { TipList } from "@/components/parts/TipList";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Button, Flex, Stack, Title } from "@mantine/core";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const StackContent: React.FC = () => {
  return (
    <Stack>
      <Flex justify="space-between">
        <Title>Your Stacks</Title>
        <Button variant="subtle" rightSection={<ArrowRightIcon />} component="a" href={CLIENT_PATHS.STACK}>
          Your Tips
        </Button>
      </Flex>
      <TipList />
    </Stack>
  );
};
