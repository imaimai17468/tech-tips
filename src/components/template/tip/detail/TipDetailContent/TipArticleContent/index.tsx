"use client";

import type { Tip } from "@/repositories/tips/types";
import { Badge, Box, Card, Flex, Stack, Title } from "@mantine/core";
import { LoadingOverlay } from "@mantine/core";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/parts/Editor").then((v) => v.Editor), {
  loading: () => <LoadingOverlay visible loaderProps={{ type: "bars" }} />,
  ssr: false,
});

type Props = {
  tip: Tip;
};

export const TipArticleContent: React.FC<Props> = ({ tip }) => {
  return (
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
  );
};
