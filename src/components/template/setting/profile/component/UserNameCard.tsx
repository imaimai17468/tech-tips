"use client";

import type { User } from "@/repositories/user/types";
import { UserValidator } from "@/repositories/user/types";
import { Button, Card, Flex, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import { useState } from "react";

type Props = {
  user: User;
};

export const UserNameCard: React.FC<Props> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userName, setUserName] = useState(user.username);

  const form = useForm<User>({
    mode: "uncontrolled",
    initialValues: user,
    validate: zodResolver(UserValidator),
  });

  const handleFormSubmit = (values: User) => {
    console.log(values);
    setIsEdit(false);
    setUserName(values.username);
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
                <Button variant="outline" w="fit-content" type="submit">
                  Save UserName
                </Button>
              </Flex>
            </Stack>
          </form>
        ) : (
          <Stack>
            <Text c="gray">{userName}</Text>
            <Button w="fit-content" onClick={() => setIsEdit(true)}>
              Edit User Name
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
