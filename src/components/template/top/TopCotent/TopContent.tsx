import { TipList } from "@/components/parts/TipList";
import { createMockTips } from "@/repositories/tips/mock";

export const TopContent: React.FC = () => {
  const tips = createMockTips(10);

  return <TipList tips={tips} />;
};
