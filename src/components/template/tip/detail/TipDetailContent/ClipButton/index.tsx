"use client";

import { ActionIcon, Alert, Dialog } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { InfoCircledIcon, Link1Icon } from "@radix-ui/react-icons";

export const ClipButton: React.FC = () => {
  const clipboard = useClipboard({ timeout: 1000 });

  return (
    <>
      <Dialog opened={clipboard.copied}>
        <Alert title="Copied!" color="green" icon={<InfoCircledIcon />} />
      </Dialog>
      <ActionIcon
        radius="xl"
        variant="light"
        onClick={() => {
          clipboard.copy(window.location);
        }}
      >
        <Link1Icon />
      </ActionIcon>
    </>
  );
};
