"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createTip } from "@/repositories/tips/actions/create";
import { updateTip } from "@/repositories/tips/actions/update";
import { TipValidator } from "@/repositories/tips/types";
import { useForm, useInputControl } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Box, Button, Card, Divider, Flex, LoadingOverlay, Stack, Switch, TagsInput, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { ulid } from "ulidx";
import type { Tip } from "../../../../../../repositories/tips/types";

const Editor = dynamic(() => import("@/components/parts/Editor").then((v) => v.Editor), {
  loading: () => <LoadingOverlay visible loaderProps={{ type: "bars" }} />,
  ssr: false,
});

type Props = {
  initialValues?: Tip;
};

export const TipEditForm: React.FC<Props> = ({ initialValues }) => {
  const router = useRouter();
  const [lastResult, action, isPending] = useActionState(initialValues ? updateTip : createTip, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      const result = parseWithZod(formData, {
        schema: TipValidator.pick({ id: true, title: true, tags: true, content: true, isPublic: true }),
      });
      return result;
    },
    defaultValue: initialValues ?? {
      id: ulid(),
      isPublic: false,
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const contentControl = useInputControl(fields.content);

  useEffect(() => {
    if (lastResult?.status === "success") {
      notifications.show({
        color: "green",
        title: "Success",
        message: "Tip updated",
      });
      router.push(CLIENT_PATHS.TIP);
    } else if (lastResult?.status === "error") {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Failed to update Tip",
      });
    }
  }, [lastResult, router.push]);

  return (
    <Box w="100%">
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <input type="hidden" name={fields.id.name} value={fields.id.initialValue} />
        <Stack gap={32}>
          <Stack>
            <Flex justify="end" align="center" gap={16}>
              <Switch
                label="Public"
                key={fields.isPublic.key}
                name={fields.isPublic.name}
                defaultValue={fields.isPublic.initialValue}
                error={fields.isPublic.errors?.join(", ")}
              />
              <Button
                variant="light"
                w="fit-content"
                type="submit"
                rightSection={<PaperPlaneIcon />}
                loading={isPending}
              >
                Post
              </Button>
            </Flex>
            <Card shadow="lg" padding="xl" radius="lg" h="fit-content" w="100%">
              <Stack gap={16}>
                <TextInput
                  variant="default"
                  label="Title"
                  key={fields.title.key}
                  name={fields.title.name}
                  defaultValue={fields.title.initialValue}
                  error={fields.title.errors?.join(", ")}
                />
                <TagsInput
                  variant="default"
                  label="Tags"
                  description="Press Enter to submit a tag"
                  key={fields.tags.key}
                  name={fields.tags.name}
                  defaultValue={fields.tags.initialValue as string[]}
                  error={fields.tags.errors?.join(", ")}
                />
                <Divider />
                <Box mih="50vh" pl={54}>
                  <Editor onChange={contentControl.change} defaultValue={contentControl.value} editable={!isPending} />
                </Box>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};
