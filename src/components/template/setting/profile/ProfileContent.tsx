import { createMockUser } from "@/repositories/user/mock";
import { Divider, Stack, Text } from "@mantine/core";
import { BioCard } from "./component/BioCard";
import { ProfileImageCard } from "./component/ProfileImageCard";
import { SNSCard } from "./component/SNSCard";
import { UserNameCard } from "./component/UserNameCard";

export const ProfileContent: React.FC = () => {
  const user = createMockUser();

  return (
    <Stack>
      <Text size="xl">Profile Setting</Text>
      <Divider />
      <ProfileImageCard userImageURL={user.userImageURL} />
      <UserNameCard user={user} />
      <BioCard user={user} />
      <SNSCard user={user} />
    </Stack>
  );
};