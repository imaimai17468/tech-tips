import type { User } from "@/repositories/user/types";
import { Anchor, Avatar, Card, Flex, Stack, Text } from "@mantine/core";
import { SNSButtons } from "../SNSButtons/SNSButtons";

type Props = {
  user: User;
};

export const AuthorCard: React.FC<Props> = ({ user }) => {
  return (
    <Card shadow="xs" padding="xl" radius="lg" w={300} style={{ flexShrink: 0 }} h="fit-content">
      <Stack gap={16}>
        <Flex align="center" gap={8}>
          <Avatar src={user.userImageURL} alt={user.username} />
          <Anchor lineClamp={1} c="black" fw={700}>
            {user.username}
          </Anchor>
        </Flex>
        <Text>{user.bio}</Text>
        <SNSButtons githubUsername={user.githubUsername} twitterUsername={user.twitterUsername} />
      </Stack>
    </Card>
  );
};
