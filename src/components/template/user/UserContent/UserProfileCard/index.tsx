import { SNSButtons } from "@/components/parts/SNSButtons";
import { getUserByID } from "@/repositories/user/actions/get";
import { Avatar, Card, Flex, Stack, Text } from "@mantine/core";

type Props = {
  userID: string;
};

export const UserProfileCard: React.FC<Props> = async ({ userID }) => {
  const user = await getUserByID(userID);

  return (
    <Card radius="md" shadow="sm" p={{ base: 16, xs: 32 }}>
      <Flex gap={{ base: 16, xs: 32 }} direction={{ base: "column", xs: "row" }}>
        <Flex gap={16} align="center">
          <Avatar
            src={user.userImageURL || ""}
            alt={user.username}
            w={{ base: 42, xs: 100 }}
            h={{ base: 42, xs: 100 }}
          />
          <Text size="xl" fw="bold" hiddenFrom="xs">
            {user.username}
          </Text>
        </Flex>
        <Stack>
          <Text size="xl" fw="bold" visibleFrom="xs">
            {user.username}
          </Text>
          <Text style={{ whiteSpace: "pre-line" }}>{user.bio}</Text>
          <SNSButtons githubUsername={user.githubUsername} twitterUsername={user.twitterUsername} />
        </Stack>
      </Flex>
    </Card>
  );
};
