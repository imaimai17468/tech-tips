import { Button, Card, Stack, Text } from "@mantine/core";

type Props = {
  userName: string;
};

export const UserNameCard: React.FC<Props> = ({ userName }) => {
  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">User Name</Text>
        <Stack>
          <Text c="gray">{userName}</Text>
          <Button w="fit-content">Edit User Name</Button>
        </Stack>
      </Stack>
    </Card>
  );
};
