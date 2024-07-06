"use client";

import { ActionIcon, Menu } from "@mantine/core";
import { DoubleArrowDownIcon, DownloadIcon, TrashIcon } from "@radix-ui/react-icons";

export const TipSettingMenu: React.FC = () => {
  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <ActionIcon radius="xl" size="lg" variant="subtle">
          <DoubleArrowDownIcon />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<DownloadIcon />}>Export in Markdown</Menu.Item>
        <Menu.Item leftSection={<TrashIcon />} color="red">
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
