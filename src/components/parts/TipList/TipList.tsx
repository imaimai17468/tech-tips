import type { Tip } from "@/repositories/tips/types";
import { SimpleGrid } from "@mantine/core";
import { TipCard } from "./components/TipCard";

type Props = {
  tips: Tip[];
};

export const TipList: React.FC<Props> = ({ tips }) => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" verticalSpacing="lg">
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </SimpleGrid>
  );
};
