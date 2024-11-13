import { SNSButtons } from "@/components/parts/SNSButtons";
import { getUserByID } from "@/repositories/user/actions/get";
import { Card, Flex, Image, Stack, Text } from "@mantine/core";

type Props = {
  userID: string;
};

export const UserProfileCard: React.FC<Props> = async ({ userID }) => {
  const user = await getUserByID(userID);

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
