import { NavigationTabs } from "@/components/parts/NavigationTabs";
import type { TabList } from "@/components/parts/NavigationTabs/constants/tablist";
import { Stack } from "@mantine/core";

type Props = {
  children: React.ReactNode;
  tabName: TabList;
};

export const TabsLayout: React.FC<Props> = ({ children, tabName }: Props) => {
  return (
    <Stack>
      <NavigationTabs defaultTab={tabName} />
      {children}
    </Stack>
  );
};
