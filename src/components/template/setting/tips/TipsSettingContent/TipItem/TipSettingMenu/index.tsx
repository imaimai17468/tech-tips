"use client";

import { ActionIcon, Menu, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DoubleArrowDownIcon, DownloadIcon, TrashIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { useState } from "react";
import { TipDeleteModal } from "./TipDeleteModal";

const MarkdownDownloader = dynamic(() => import("./MarkdownDownloader").then((mod) => mod.MarkdownDownloader), {
  ssr: false,
});

const HTMLDownloader = dynamic(() => import("./HTMLDownloader").then((mod) => mod.HTMLDownloader), {
  ssr: false,
});

type Props = {
  tipID: string;
  tipContent?: string;
};

export const TipSettingMenu: React.FC<Props> = ({ tipID, tipContent }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isMarkdownDownloading, setIsMarkdownDownloading] = useState(false);
  const [isHTMLDownloading, setIsHTMLDownloading] = useState(false);

  return (
    <>
      {tipContent && (
        <>
          <MarkdownDownloader
            content={tipContent}
            isMarkdownDownloading={isMarkdownDownloading}
            onFinish={() => setIsMarkdownDownloading(false)}
          />
          <HTMLDownloader
            content={tipContent}
            isHTMLDownloading={isHTMLDownloading}
            onFinish={() => setIsHTMLDownloading(false)}
          />
        </>
      )}
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
                  setIsMarkdownDownloading(true);
                }}
                disabled={isMarkdownDownloading}
              >
                Export in Markdown
              </Menu.Item>
              <Menu.Item
                leftSection={<DownloadIcon />}
                onClick={() => {
                  setIsHTMLDownloading(true);
                }}
                disabled={isHTMLDownloading}
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
