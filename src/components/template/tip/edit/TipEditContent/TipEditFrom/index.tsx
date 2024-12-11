"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createTip } from "@/repositories/tips/actions/create";
import { updateTip } from "@/repositories/tips/actions/update";
import { TipValidator } from "@/repositories/tips/types";
import type { Tip } from "@/repositories/tips/types";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { useForm, useInputControl } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Box, Button, Card, Divider, Flex, LoadingOverlay, Stack, Switch, TagsInput, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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
      return parseWithZod(formData, {
        schema: TipValidator.pick({ id: true, title: true, tags: true, content: true, isPublic: true }),
      });
    },
    defaultValue: initialValues ?? {
      id: uuidv4(),
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const contentControl = useInputControl(fields.content);
  const tagsControl = useInputControl(fields.tags);

  useEffect(() => {
    if (lastResult?.status === "success") {
      notifications.show({
        color: "green",
        title: "Success",
        message: "Tip updated",
      });

      if (initialValues) {
        router.push(replaceIDinPath(CLIENT_PATHS.TIP_DETAIL, initialValues.id));
      } else {
        router.push(CLIENT_PATHS.TIP);
      }
    } else if (lastResult?.status === "error") {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Failed to update Tip",
      });
    }
  }, [lastResult, router.push, initialValues]);

  return (
    <Box w="100%">
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <input type="hidden" key={fields.id.key} name={fields.id.name} defaultValue={fields.id.initialValue} />
        <Stack gap={32}>
          <Stack>
            <Flex justify="end" align="center" gap={16}>
              <Switch
                label="Public"
                key={fields.isPublic.key}
                name={fields.isPublic.name}
                defaultChecked={fields.isPublic.initialValue === "on"}
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
                  onChange={tagsControl.change}
                  defaultValue={tagsControl.value as string[]}
                  error={fields.tags.errors?.join(", ")}
                />
                <Divider />
                <Box mih="50vh" pl={54}>
                  <Editor
                    onChange={contentControl.change}
                    key={fields.content.key}
                    defaultValue={contentControl.value}
                    editable={!isPending}
                  />
                </Box>
              </Stack>
            </Card>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};
