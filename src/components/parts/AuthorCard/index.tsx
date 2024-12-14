import { CLIENT_PATHS } from "@/constants/clientPaths";
import type { User } from "@/repositories/user/types";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { Anchor, Avatar, Card, Flex, Stack, Text } from "@mantine/core";
import { SNSButtons } from "../SNSButtons";

type Props = {
  user: User;
};

export const AuthorCard: React.FC<Props> = ({ user }) => {
  return (
    <Card shadow="xs" padding="xl" radius="lg" w={300} style={{ flexShrink: 0 }} h="fit-content">
      <Stack gap={16}>
        <Flex align="center" gap={8}>
          <Avatar src={user.userImageURL} alt={user.username} />
          <Anchor lineClamp={1} c="black" fw={700} href={replaceIDinPath(CLIENT_PATHS.USER, user.id)}>
            {user.username}
          </Anchor>
        </Flex>
        {user.bio && <Text style={{ whiteSpace: "pre-line" }}>{user.bio}</Text>}
        {(user.githubUsername || user.twitterUsername) && (
          <SNSButtons githubUsername={user.githubUsername} twitterUsername={user.twitterUsername} />
        )}
      </Stack>
    </Card>
  );
};
