import { UserValidator } from "@/repositories/user/types";
import { Alert } from "@mantine/core";
import { PrismaClient } from "@prisma/client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { BioCard } from "./BioCard";
import { SNSCard } from "./SNSCard";
import { UserNameCard } from "./UserNameCard";

const prisma = new PrismaClient();

type Props = {
  userId: string;
};

export const ProfileSettingsContent: React.FC<Props> = async ({ userId }) => {
  const userData = await prisma.user.findUnique({ where: { id: userId } });
  const parsed = UserValidator.safeParse(userData);

  if (!userData || !parsed.success)
    return (
      <Alert color="red" icon={<ExclamationTriangleIcon />} title="User Not Found ">
        Failed to retrieve your user information.
      </Alert>
    );

  return (
    <>
      <UserNameCard user={parsed.data} />
      <BioCard user={parsed.data} />
      <SNSCard user={parsed.data} />
    </>
  );
};
