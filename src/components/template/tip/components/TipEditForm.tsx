"use client";

// import { Editor } from "@/components/parts/Editor";
import { createInitialTipForm } from "@/repositories/tips/mock";
import { type Tip, type TipForm, TipFormValidator } from "@/repositories/tips/types";
import type { User } from "@/repositories/user/types";
import { Box, Button, Card, Divider, Flex, LoadingOverlay, Stack, Switch, TagsInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { zodResolver } from "mantine-form-zod-resolver";
import dynamic from "next/dynamic";
import { typeid } from "typeid-js";

const Editor = dynamic(() => import("@/components/parts/Editor").then((v) => v.Editor), {
  loading: () => <LoadingOverlay visible loaderProps={{ type: "bars" }} />,
  ssr: false,
});

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
              <Button variant="light" w="fit-content" type="submit" rightSection={<PaperPlaneIcon />}>
                Post
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
