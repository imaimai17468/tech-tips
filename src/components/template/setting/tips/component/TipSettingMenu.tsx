"use client";

import { ActionIcon, Alert, Button, Menu, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DoubleArrowDownIcon, DownloadIcon, ExclamationTriangleIcon, TrashIcon } from "@radix-ui/react-icons";

export const TipSettingMenu: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleDelete = () => {
    console.log("Delete tip");
    close();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Delete Tip"
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        transitionProps={{ transition: "rotate-left" }}
      >
        <Stack>
          <Text>Are you sure you want to delete this tip?</Text>
          <Alert color="orange" icon={<ExclamationTriangleIcon />} variant="light">
            Deleting a tip cannot be undone.
          </Alert>
          <Button color="red" onClick={handleDelete} leftSection={<TrashIcon />}>
            Delete
          </Button>
        </Stack>
      </Modal>
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
