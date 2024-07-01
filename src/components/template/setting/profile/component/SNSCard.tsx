import { Box, Button, Card, Flex, Image, Stack, Text } from "@mantine/core";

type Props = {
  githubUsername: string;
  twitterUsername: string;
};

export const SNSCard: React.FC<Props> = ({ githubUsername, twitterUsername }) => {
  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">SNS</Text>
        <Stack>
          <Flex align="center" gap={16}>
            <Image src="/image/github-mark.svg" w={24} h={24} />
            <Text c="gray">@{githubUsername}</Text>
          </Flex>
          <Flex align="center" gap={16}>
            <Box bg="black" p={6} style={{ borderRadius: "50%" }}>
              <Image src="/image/logo.svg" w={12} h={12} />
            </Box>
            <Text c="gray">@{twitterUsername}</Text>
          </Flex>
          <Button w="fit-content">Edit SNS User Name</Button>
        </Stack>
      </Stack>
    </Card>
  );
};
