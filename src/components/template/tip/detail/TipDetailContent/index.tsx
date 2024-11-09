"use client";

import { AuthorCard } from "@/components/parts/AuthorCard";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createMockTip } from "@/repositories/tips/mock";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { ActionIcon, Badge, Box, Button, Card, Flex, Stack, Title } from "@mantine/core";
import { LoadingOverlay } from "@mantine/core";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { Pencil1Icon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ClipButton } from "./ClipButton";

const Editor = dynamic(() => import("@/components/parts/Editor").then((v) => v.Editor), {
  loading: () => <LoadingOverlay visible loaderProps={{ type: "bars" }} />,
  ssr: false,
});

export const TipDetailContent: React.FC = () => {
  const tip = createMockTip();

  return (
    <Flex gap={32} direction={{ base: "column", md: "row" }}>
      <Stack w="100%">
        <Button
          ml="auto"
          variant="light"
          w="fit-content"
          component={Link}
          href={replaceIDinPath(CLIENT_PATHS.TIP_EDIT, tip.id)}
          rightSection={<Pencil1Icon />}
        >
          Edit
        </Button>
        <Card shadow="xs" padding="xl" radius="lg" h="fit-content" w="100%">
          <Stack gap={16}>
            <Title>{tip.title}</Title>
            {tip.tags && (
              <Flex gap={8}>
                {tip.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </Flex>
            )}
            <Box mih="50vh">
              <Editor defaultValue={tip.content} editable={false} />
            </Box>
          </Stack>
        </Card>
      </Stack>
      <Stack>
        <Flex gap={8}>
          <ActionIcon radius="xl" variant="light" color="pink">
            <BookmarkIcon />
          </ActionIcon>
          <ClipButton />
        </Flex>
        <AuthorCard user={tip.author} />
      </Stack>
    </Flex>
  );
};
