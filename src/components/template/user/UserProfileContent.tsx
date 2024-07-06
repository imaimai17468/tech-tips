import { SNSButtons } from "@/components/parts/SNSButtons/SNSButtons";
import { TipList } from "@/components/parts/TipList";
import { createMockUser } from "@/repositories/user/mock";
import { Card, Flex, Image, Stack, Text } from "@mantine/core";

export const UserProfileContent: React.FC = () => {
  const user = createMockUser();

  return (
    <Stack gap={32}>
      <Card radius="md" shadow="sm" p={32}>
        <Flex gap={32}>
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
      <TipList />
    </Stack>
  );
};
