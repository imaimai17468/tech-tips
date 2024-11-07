import { createMockUser } from "@/repositories/user/mock";
import { Stack, Title } from "@mantine/core";
import { BioCard } from "./component/BioCard";
import { ProfileImageAlert } from "./component/ProfileImageAlert";
import { SNSCard } from "./component/SNSCard";
import { UserNameCard } from "./component/UserNameCard";

export const ProfileContent: React.FC = () => {
  const user = createMockUser();

  return (
    <Stack gap={32}>
      <Title>Profile Setting</Title>
      <Stack>
        <ProfileImageAlert />
        <UserNameCard user={user} />
        <BioCard user={user} />
        <SNSCard user={user} />
      </Stack>
    </Stack>
  );
};
