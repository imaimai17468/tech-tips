"use client";
import { ActionIcon, Menu, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DoubleArrowDownIcon, DownloadIcon, TrashIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { TipDeleteModal } from "./TipDeleteModal";

const DynamicMarkdownDownloader = dynamic(() => import("./MarkdownDownloader").then((mod) => mod.MarkdownDownloader), {
  ssr: false,
});

const DynamicHTMLDownloader = dynamic(() => import("./HTMLDownloader").then((mod) => mod.HTMLDownloader), {
  ssr: false,
});

type Props = {
  tipID: string;
  tipContent?: string;
};

export const TipSettingMenu: React.FC<Props> = ({ tipID, tipContent }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [markdownDownload, setMarkdownDownload] = useState<((content: string) => void) | null>(null);
  const [htmlDownload, setHTMLDownload] = useState<((content: string) => void) | null>(null);

  const handleMarkdownDownload = useCallback((downloadFunction: (content: string) => void) => {
    setMarkdownDownload(() => downloadFunction);
  }, []);

  const handleHTMLDownload = useCallback((downloadFunction: (content: string) => void) => {
    setHTMLDownload(() => downloadFunction);
  }, []);

  return (
    <>
      <DynamicMarkdownDownloader onDownload={handleMarkdownDownload} />
      <DynamicHTMLDownloader onDownload={handleHTMLDownload} />
      <TipDeleteModal opened={opened} close={close} tipID={tipID} />
      <Menu position="bottom-end">
        <Menu.Target>
          <ActionIcon radius="xl" size="lg" variant="subtle">
            <DoubleArrowDownIcon />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          {tipContent ? (
            <>
              <Menu.Item
                leftSection={<DownloadIcon />}
                onClick={() => {
                  if (!markdownDownload) return;
                  markdownDownload(tipContent);
                }}
              >
                Export in Markdown
              </Menu.Item>
              <Menu.Item
                leftSection={<DownloadIcon />}
                onClick={() => {
                  if (!htmlDownload) return;
                  htmlDownload(tipContent);
                }}
              >
                Export in HTML
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item leftSection={<DownloadIcon />} disabled>
                <Stack gap={2}>
                  <Text>Export in Markdown</Text>
                  <Text size="xs" c="red">
                    content is empty
                  </Text>
                </Stack>
              </Menu.Item>
              <Menu.Item leftSection={<DownloadIcon />} disabled>
                <Stack gap={2}>
                  <Text>HTML in Markdown</Text>
                  <Text size="xs" c="red">
                    content is empty
                  </Text>
                </Stack>
              </Menu.Item>
            </>
          )}
          <Menu.Item leftSection={<TrashIcon />} color="red" onClick={open}>
            Delete
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
