import { getStocksByLoggedInUser } from "@/repositories/stock/actions/get";
import { getTipsByAuthorID, getTipsByLoggedInUser } from "@/repositories/tips/actions/get";
import { SimpleGrid } from "@mantine/core";
import { Alert } from "@mantine/core";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { TipCard } from "./components/TipCard";

type Props = {
  type:
    | {
        user: "logged-in";
      }
    | {
        user: "public";
        authorId: string;
      }
    | {
        user: "stocked";
      };
};

export const TipList: React.FC<Props> = async ({ type }) => {
  const tips =
    type.user === "logged-in"
      ? await getTipsByLoggedInUser()
      : type.user === "public"
        ? await getTipsByAuthorID(type.authorId)
        : await getStocksByLoggedInUser();

  if (tips.length === 0) {
    return (
      <Alert color="gray" icon={<InfoCircledIcon />} title={type.user === "stocked" ? "No stocked tips" : "No tips"}>
        {type.user === "stocked" ? "Try stocking some interesting articles!" : "Try writing some tips!"}
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
