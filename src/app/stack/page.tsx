import { TabsLayout } from "@/components/layout/TabsLayout";
import { StackContent } from "@/components/template/stack/StackContent";

export default function Home() {
  return (
    <TabsLayout tabName="Stacks">
      <StackContent />
    </TabsLayout>
  );
}
