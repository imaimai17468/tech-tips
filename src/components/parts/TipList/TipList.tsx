import { createMockTips } from "@/repositories/tips/mock";
import { SimpleGrid } from "@mantine/core";
import { TipCard } from "./components/TipCard";

export const TipList: React.FC = () => {
  const tips = createMockTips(10);

  return (
    <SimpleGrid cols={3} spacing="lg" verticalSpacing="lg">
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </SimpleGrid>
  );
};
