"use client";

import { ActionIcon, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DoubleArrowDownIcon, DownloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { TipDeleteModal } from "./TipDeleteModal";

type Props = {
  tipID: string;
  tipContent: string;
};

export const TipSettingMenu: React.FC<Props> = ({ tipID }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <TipDeleteModal opened={opened} close={close} tipID={tipID} />
      <Menu position="bottom-end">
        <Menu.Target>
          <ActionIcon radius="xl" size="lg" variant="subtle">
            <DoubleArrowDownIcon />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item leftSection={<DownloadIcon />}>Export in Markdown</Menu.Item>
          <Menu.Item leftSection={<TrashIcon />} color="red" onClick={open}>
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
