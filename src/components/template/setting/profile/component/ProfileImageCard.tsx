import { Card, Stack, Text, Image, Button, Flex } from "@mantine/core";

type Props = {
  userImageURL?: string;
};

export const ProfileImageCard: React.FC<Props> = ({ userImageURL }) => {
  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">Profile Image</Text>
        <Flex align="center" gap={32}>
          <Image src={userImageURL} h={150} w={150} style={{ borderRadius: "50%" }} />
          <Button variant="light">Edit Profile Image</Button>
        </Flex>
      </Stack>
    </Card>
  );
};
