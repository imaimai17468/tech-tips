import { getUser } from "@/repositories/user/actions";
import { Alert } from "@mantine/core";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { BioCard } from "./BioCard";
import { SNSCard } from "./SNSCard";
import { UserNameCard } from "./UserNameCard";

export const ProfileSettingsContent: React.FC = async () => {
  const userData = await getUser();

  if (!userData)
    return (
      <Alert color="red" icon={<ExclamationTriangleIcon />} title="User Not Found ">
        Failed to retrieve your user information.
      </Alert>
    );

  return (
    <>
      <UserNameCard user={userData} />
      <BioCard user={userData} />
      <SNSCard user={userData} />
    </>
  );
};