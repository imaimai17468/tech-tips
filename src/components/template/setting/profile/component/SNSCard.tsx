"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { updateUserSNS } from "@/repositories/user/actions";
import type { User } from "@/repositories/user/types";
import { UserValidator } from "@/repositories/user/types";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Box, Button, Card, Flex, Image, Stack, Text, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

type Props = {
  user: User;
};

export const SNSCard: React.FC<Props> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [lastResult, action, isPending] = useActionState(updateUserSNS, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      const result = parseWithZod(formData, {
        schema: UserValidator.pick({ twitterUsername: true, githubUsername: true }),
      });
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
        message: "SNS information updated",
      });
      redirect(CLIENT_PATHS.SETTINGS_PROFILE);
    } else if (lastResult?.status === "error") {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Failed to update SNS information",
      });
    }
  }, [lastResult]);

  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">SNS</Text>
        {isEdit ? (
          <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
            <Stack>
              <Flex align="center" gap={16}>
                <Box bg="white" p={2} style={{ borderRadius: "50%" }}>
                  <Image src="/image/github-mark.svg" w={24} h={24} />
                </Box>
                <TextInput
                  leftSection={"@"}
                  placeholder="your github username"
                  key={fields.githubUsername.key}
                  name={fields.githubUsername.name}
                  defaultValue={fields.githubUsername.initialValue}
                  error={fields.githubUsername.errors?.join(", ")}
                />
              </Flex>
              <Flex align="center" gap={16}>
                <Box bg="black" p={8} style={{ borderRadius: "50%" }}>
                  <Image src="/image/logo.svg" w={12} h={12} />
                </Box>
                <TextInput
                  leftSection={"@"}
                  placeholder="your twitter username"
                  key={fields.twitterUsername.key}
                  name={fields.twitterUsername.name}
                  defaultValue={fields.twitterUsername.initialValue}
                  error={fields.twitterUsername.errors?.join(", ")}
                />
              </Flex>
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
                <Button variant="outline" w="fit-content" type="submit" loading={isPending}>
                  Save SNS User Name
                </Button>
              </Flex>
            </Stack>
          </form>
        ) : (
          <Stack>
            <Flex align="center" gap={16}>
              <Box bg="white" p={2} style={{ borderRadius: "50%" }} w="fit-content">
                <Image src="/image/github-mark.svg" w={24} h={24} />
              </Box>
              <Text c="gray">@{user.githubUsername}</Text>
            </Flex>
            <Flex align="center" gap={16}>
              <Box bg="black" p={8} style={{ borderRadius: "50%" }} w="fit-content">
                <Image src="/image/logo.svg" w={12} h={12} />
              </Box>
              <Text c="gray">@{user.twitterUsername}</Text>
            </Flex>
            <Button variant="light" w="fit-content" onClick={() => setIsEdit(true)}>
              Edit SNS User Name
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
