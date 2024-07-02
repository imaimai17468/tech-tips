"use client";

import { Editor } from "@/components/parts/Editor";
import { createInitialTipForm } from "@/repositories/tips/mock";
import { type Tip, type TipForm, TipFormValidator } from "@/repositories/tips/types";
import type { User } from "@/repositories/user/types";
import { Box, Button, Card, Divider, Flex, Stack, Switch, TagsInput, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { zodResolver } from "mantine-form-zod-resolver";
import { typeid } from "typeid-js";

type Props = {
  user: User;
  initialValues?: TipForm;
};

export const TipEditForm: React.FC<Props> = ({ user, initialValues }) => {
  const form = useForm<TipForm>({
    mode: "uncontrolled",
    initialValues: initialValues ?? createInitialTipForm(),
    validate: zodResolver(TipFormValidator),
  });

  const handleFormSubmit = (values: TipForm) => {
    const submitData: Tip = {
      ...values,
      id: typeid().toString(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      author: user,
    };

    console.log(submitData);
  };

  return (
    <Box w="100%">
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stack gap={32}>
          <Stack>
            <Flex justify="end" align="center" gap={16}>
              <Switch label="isPublic" key={form.key("isPublic")} {...form.getInputProps("isPublic")} />
              <Button w="fit-content" type="submit">
                <Flex align="center" gap={4}>
                  <Text>Post</Text>
                  <PaperPlaneIcon />
                </Flex>
              </Button>
            </Flex>
            <Card shadow="xs" padding="xl" radius="lg" h="fit-content" w="100%">
              <Stack gap={16}>
                <TextInput
                  variant="unstyled"
                  placeholder="Title"
                  label="Title"
                  key={form.key("title")}
                  {...form.getInputProps("title")}
                />
                <TagsInput
                  placeholder="tag1, tag2, ..."
                  variant="unstyled"
                  label="Tags"
                  description="Press Enter to submit a tag"
                  key={form.key("tags")}
                  {...form.getInputProps("tags")}
                />
                <Divider />
                <Box mih="50vh">
                  <Editor key={form.key("contents")} {...form.getInputProps("contents")} />
                </Box>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};
