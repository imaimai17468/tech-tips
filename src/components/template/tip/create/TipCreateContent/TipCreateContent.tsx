"use client";

import { Editor } from "@/components/parts/Editor";
import { TipValidator } from "@/repositories/tips/types";
import { createMockUser } from "@/repositories/user/mock";
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
  const user = createMockUser();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      author: user,
      isPublic: false,
    },
    validate: zodResolver(TipValidator),
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Flex gap={32}>
        <Stack w="100%" gap={32}>
          <Stack>
            <Flex justify="end" align="center" gap={16}>
              <Switch label="公開" key={form.key("isPublic")} {...form.getInputProps("isPublic")} />
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
                  <TextInput label="Title" key={form.key("title")} {...form.getInputProps("title")} />
                  <Textarea
                    label="Description"
                    rows={3}
                    key={form.key("description")}
                    {...form.getInputProps("description")}
                  />
                </Stack>
                <TagsInput
                  label="Tags"
                  description="Press Enter to submit a tag"
                  key={form.key("tags")}
                  {...form.getInputProps("tags")}
                />
              </Stack>
            </Card>
          </Stack>
          <Card shadow="xs" padding="xl" radius="lg" h="fit-content" w="100%" mih="50vh">
            <Editor key={form.key("contents")} {...form.getInputProps("contents")} />
          </Card>
        </Stack>
        <Card shadow="xs" padding="xl" radius="lg" w={300} style={{ flexShrink: 0 }} h="fit-content">
          <Stack gap={16}>
            <Flex align="center" gap={8}>
              <Avatar src={user.userImageURL} alt={user.username} />
              <Anchor lineClamp={1} c="black" fw={700}>
                {user.username}
              </Anchor>
            </Flex>
            <Text>{user.bio}</Text>
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
