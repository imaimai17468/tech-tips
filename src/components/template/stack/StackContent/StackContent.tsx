import { TipList } from "@/components/parts/TipList";
import { createMockTips } from "@/repositories/tips/mock";

export const StackContent: React.FC = () => {
  const tips = createMockTips(10);

  return <TipList tips={tips} />;
};
