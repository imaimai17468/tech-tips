"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { updateUserBio } from "@/repositories/user/actions/update";
import type { User } from "@/repositories/user/types";
import { UserValidator } from "@/repositories/user/types";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Card, Flex, Stack, Text, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

type Props = {
  user: User;
};

export const BioCard: React.FC<Props> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [lastResult, action, isPending] = useActionState(updateUserBio, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: UserValidator.pick({ bio: true }) });
    },
    defaultValue: user,
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (lastResult?.status === "success") {
      setIsEdit(false);
      notifications.show({
        color: "green",
        title: "Success",
        message: "Bio updated",
      });
      redirect(CLIENT_PATHS.SETTINGS_PROFILE);
    } else if (lastResult?.status === "error") {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Failed to update Bio",
      });
    }
  }, [lastResult]);

  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">Bio</Text>
        {isEdit ? (
          <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
            <Stack>
              <Textarea
                placeholder="your bio"
                key={fields.bio.key}
                name={fields.bio.name}
                defaultValue={fields.bio.initialValue}
                error={fields.bio.errors?.join(", ")}
              />
              <Flex gap={16}>
                <Button
                  onClick={() => {
                    setIsEdit(false);
                  }}
                  variant="subtle"
                  color="red"
                >
                  Cancel
                </Button>
                <Button
                  variant="outline"
                  w="fit-content"
                  type="submit"
                  loading={isPending}
                  disabled={!form.valid || !form.dirty}
                >
                  Save Bio
                </Button>
              </Flex>
            </Stack>
          </form>
        ) : (
          <Stack>
            <Text c="gray" style={{ whiteSpace: "pre-line" }}>
              {user.bio}
            </Text>
            <Button variant="light" w="fit-content" onClick={() => setIsEdit(true)}>
              Edit Bio
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
