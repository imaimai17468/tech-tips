"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { updateUserName } from "@/repositories/user/actions";
import type { User } from "@/repositories/user/types";
import { UserValidator } from "@/repositories/user/types";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Card, Flex, Stack, Text, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

type Props = {
  user: User;
};

export const UserNameCard: React.FC<Props> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [lastResult, action, isPending] = useActionState(updateUserName, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      const result = parseWithZod(formData, { schema: UserValidator.pick({ username: true }) });
      return result;
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
        message: "User Name updated",
      });
      redirect(CLIENT_PATHS.SETTINGS_PROFILE);
    } else if (lastResult?.status === "error") {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Failed to update User Name",
      });
    }
  }, [lastResult]);

  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">User Name</Text>
        {isEdit ? (
          <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
            <Stack>
              <TextInput
                type="text"
                key={fields.username.key}
                name={fields.username.name}
                defaultValue={fields.username.initialValue}
                error={fields.username.errors?.join(", ")}
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
                  Save UserName
                </Button>
              </Flex>
            </Stack>
          </form>
        ) : (
          <Stack>
            <Text c="gray">{user.username}</Text>
            <Button variant="light" w="fit-content" onClick={() => setIsEdit(true)}>
              Edit User Name
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
