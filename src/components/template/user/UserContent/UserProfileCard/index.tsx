import { SNSButtons } from "@/components/parts/SNSButtons";
import { getUser } from "@/repositories/user/actions";
import { Alert, Card, Flex, Image, Stack, Text } from "@mantine/core";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const UserProfileCard: React.FC = async () => {
  const user = await getUser();

  if (!user) {
    return (
      <Alert color="red" icon={<ExclamationTriangleIcon />} title="Failed to retrieve user information">
        Failed to retrieve your user information.
      </Alert>
    );
  }

  return (
    <Card radius="md" shadow="sm" p={32}>
      <Flex gap={32} wrap={{ base: "wrap", sm: "nowrap" }}>
        <Image w={100} h={100} src={user.userImageURL} alt={user.username} style={{ borderRadius: "50%" }} />
        <Stack>
          <Text size="xl" fw="bold">
            {user.username}
          </Text>
          <Text>{user.bio}</Text>
          <SNSButtons githubUsername={user.githubUsername} twitterUsername={user.twitterUsername} />
        </Stack>
      </Flex>
    </Card>
  );
};
