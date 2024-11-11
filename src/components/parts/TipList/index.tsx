import { getTipsByAuthorID, getTipsByLoggedInUser } from "@/repositories/tips/actions";
import { SimpleGrid } from "@mantine/core";
import { Alert } from "@mantine/core";
import { ExclamationTriangleIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { TipCard } from "./components/TipCard";

type Props = {
  type:
    | {
        user: "logged-in";
      }
    | {
        user: "public";
        authorId: string;
      };
};

export const TipList: React.FC<Props> = async ({ type }) => {
  const tips = type.user === "logged-in" ? await getTipsByLoggedInUser() : await getTipsByAuthorID(type.authorId);

  if (!tips) {
    return (
      <Alert color="red" icon={<ExclamationTriangleIcon />} title="Failed to retrieve tips">
        Failed to retrieve tips.
      </Alert>
    );
  }

  if (tips.length === 0) {
    return (
      <Alert color="gray" icon={<InfoCircledIcon />} title="No tips found">
        Try writing some tips!
      </Alert>
    );
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" verticalSpacing="lg">
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </SimpleGrid>
  );
};
