import { createMockTipForm } from "@/repositories/tips/mock";
import { createMockUser } from "@/repositories/user/mock";
import { ActionIcon, Anchor, Avatar, Card, Flex, Image, Stack, Text } from "@mantine/core";
import { TipEditForm } from "../../components/TipEditForm";

export const TipEditContent: React.FC = () => {
  const user = createMockUser();
  const initialValues = createMockTipForm();

  return (
    <Flex gap={32}>
      <TipEditForm user={user} initialValues={initialValues} />
      <Card shadow="xs" padding="xl" radius="lg" w={300} style={{ flexShrink: 0 }} h="fit-content">
        <Stack gap={16}>
          <Flex align="center" gap={8}>
            <Avatar src={user.userImageURL} alt={user.username} />
            <Anchor lineClamp={1} c="black" fw={700}>
              {user.username}
            </Anchor>
          </Flex>
          <Text>{user.bio}</Text>
          <Flex gap={8}>
            <ActionIcon radius="xl" variant="outline" color="black">
              <Image src="/image/github-mark.svg" w={16} h={16} />
            </ActionIcon>
            <ActionIcon radius="xl" color="black">
              <Image src="/image/logo.svg" w={16} h={16} />
            </ActionIcon>
          </Flex>
        </Stack>
      </Card>
    </Flex>
  );
};
