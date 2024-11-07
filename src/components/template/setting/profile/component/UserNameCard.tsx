"use client";

import { updateUser } from "@/repositories/user/actions";
import type { User } from "@/repositories/user/types";
import { UserValidator } from "@/repositories/user/types";
import { Button, Card, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import { useState, useTransition } from "react";

type Props = {
  user: User;
};

export const UserNameCard: React.FC<Props> = ({ user }) => {
  const [isPending, startTransition] = useTransition();
  const [isEdit, setIsEdit] = useState(false);

  const form = useForm<User>({
    mode: "uncontrolled",
    initialValues: user,
    validate: zodResolver(UserValidator),
  });

  const handleFormSubmit = (values: User) => {
    startTransition(async () => {
      try {
        await updateUser(values);
        setIsEdit(false);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">User Name</Text>
        {isEdit ? (
          <form onSubmit={form.onSubmit(handleFormSubmit)}>
            <Stack>
              <TextInput placeholder="your name" key={form.key("username")} {...form.getInputProps("username")} />
              <Flex gap={16}>
                <Button
                  onClick={() => {
                    setIsEdit(false);
                    form.reset();
                  }}
                  variant="subtle"
                  color="red"
                >
                  Cancel
                </Button>
                <Button variant="outline" w="fit-content" type="submit" loading={isPending}>
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
