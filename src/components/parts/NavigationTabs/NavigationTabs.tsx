"use client";

import { SegmentedControl } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TABLIST, TAB_WITH_PATH, type TabList } from "./constants/tablist";

type Props = {
  defaultTab: TabList;
};

export const NavigationTabs: React.FC<Props> = ({ defaultTab }: Props) => {
  const [activeTab, setActiveTab] = useState<TabList>(defaultTab);
  const router = useRouter();
  const parseTabList = [...TABLIST];

  useEffect(() => {
    const path = TAB_WITH_PATH[activeTab];
    router.push(path);
  }, [activeTab]);

  return (
    <SegmentedControl
      value={activeTab}
      onChange={(value) => {
        setActiveTab(value as TabList);
      }}
      data={parseTabList}
      bg={"gray.2"}
    />
  );
};
