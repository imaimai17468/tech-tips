import { Button, Card, Stack, Text } from "@mantine/core";

type Props = {
  bio: string;
};

export const BioCard: React.FC<Props> = ({ bio }) => {
  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">Bio</Text>
        <Stack>
          <Text c="gray">{bio}</Text>
          <Button w="fit-content">Edit Bio</Button>
        </Stack>
      </Stack>
    </Card>
  );
};
