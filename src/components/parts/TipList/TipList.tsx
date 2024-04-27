import { SimpleGrid } from "@mantine/core";
import type { Tip } from "../../../repositories/tips/types";
import { TipCard } from "../TipCard";

export const TipList: React.FC<{ tips: Tip[] }> = ({ tips }) => {
  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg">
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </SimpleGrid>
  );
};
