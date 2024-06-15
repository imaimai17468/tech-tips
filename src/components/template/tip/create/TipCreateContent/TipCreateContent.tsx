"use client";

import { Editor } from "@/components/parts/Editor";
import { createMockTip } from "@/repositories/tips/mock";
import { TipValidator } from "@/repositories/tips/types";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Button,
  Card,
  Flex,
  Image,
  Stack,
  Switch,
  TagsInput,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { zodResolver } from "mantine-form-zod-resolver";

export const TipCreateContent: React.FC = () => {
  const tip = createMockTip();

  const form = useForm({
    mode: "uncontrolled",
    validate: zodResolver(TipValidator),
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Flex gap={32}>
        <Stack w="100%" gap={32}>
          <Stack>
            <Flex justify="end" align="center" gap={16}>
              <Switch label="公開" />
              <Button w="fit-content" type="submit">
                <Flex align="center" gap={4}>
                  <Text>Post</Text>
                  <PaperPlaneIcon />
                </Flex>
              </Button>
            </Flex>
            <Card shadow="xs" padding="xl" radius="lg" h="fit-content" w="100%">
              <Stack gap={16}>
                <Stack gap={4}>
                  <TextInput label="Title" />
                  <Textarea label="Description" rows={3} />
                </Stack>
                <TagsInput label="Tags" description="Press Enter to submit a tag" />
              </Stack>
            </Card>
          </Stack>
          <Card shadow="xs" padding="xl" radius="lg" h="fit-content" w="100%" mih="50vh">
            <Editor
              onChange={(value) => {
                console.log(value);
              }}
            />
          </Card>
        </Stack>
        <Card shadow="xs" padding="xl" radius="lg" w={300} style={{ flexShrink: 0 }} h="fit-content">
          <Stack gap={16}>
            <Flex align="center" gap={8}>
              <Avatar src={tip.author.userImageURL} alt={tip.author.username} />
              <Anchor lineClamp={1} c="black" fw={700}>
                {tip.author.username}
              </Anchor>
            </Flex>
            <Text>{tip.author.bio}</Text>
            <Flex gap={8}>
              <ActionIcon radius="xl" variant="outline" color="black">
                <Image src="/image/github-mark.svg" w={16} h={16} />
              </ActionIcon>
              <ActionIcon radius="xl" color="black">
                <Image src="/image/logo.svg" w={16} h={16} />
              </ActionIcon>
            </Flex>
          </Stack>
        </Card>
      </Flex>
    </form>
  );
};
