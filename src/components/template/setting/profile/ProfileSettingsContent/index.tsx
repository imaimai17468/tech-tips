import { getUserByLoggedIn } from "@/repositories/user/actions";
import { BioCard } from "./BioCard";
import { SNSCard } from "./SNSCard";
import { UserNameCard } from "./UserNameCard";

export const ProfileSettingsContent: React.FC = async () => {
  const userData = await getUserByLoggedIn();

  return (
    <>
      <UserNameCard user={userData} />
      <BioCard user={userData} />
      <SNSCard user={userData} />
    </>
  );
};
