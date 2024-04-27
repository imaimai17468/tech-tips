import { TabsLayout } from "@/components/layout/TabsLayout";
import { TopContent } from "@/components/template/top/TopCotent/TopContent";

export default function Home() {
  return (
    <TabsLayout tabName="Your Tips">
      <TopContent />
    </TabsLayout>
  );
}
