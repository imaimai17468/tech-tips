"use client";

import type { User } from "@/repositories/user/types";
import { UserValidator } from "@/repositories/user/types";
import { Button, Card, Stack, Text, Textarea, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import { useState } from "react";

type Props = {
  user: User;
};

export const BioCard: React.FC<Props> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [bio, setBio] = useState(user.bio);

  const form = useForm<User>({
    mode: "uncontrolled",
    initialValues: user,
    validate: zodResolver(UserValidator),
  });

  const handleFormSubmit = (values: User) => {
    console.log(values);
    setIsEdit(false);
    setBio(values.bio);
  };

  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">Bio</Text>
        {isEdit ? (
          <form onSubmit={form.onSubmit(handleFormSubmit)}>
            <Stack>
              <Textarea placeholder="your bio" key={form.key("bio")} {...form.getInputProps("bio")} />
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
                  Save Bio
                </Button>
              </Flex>
            </Stack>
          </form>
        ) : (
          <Stack>
            <Text c="gray">{bio}</Text>
            <Button w="fit-content" onClick={() => setIsEdit(true)}>
              Edit Bio
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
