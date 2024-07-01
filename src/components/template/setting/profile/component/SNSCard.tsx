"use client";

import type { User } from "@/repositories/user/types";
import { UserValidator } from "@/repositories/user/types";
import { Box, Button, Card, Flex, Image, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";

type Props = {
  user: User;
};

export const SNSCard: React.FC<Props> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [githubUsername, setGithubUsername] = useState(user.githubUsername);
  const [twitterUsername, setTwitterUsername] = useState(user.twitterUsername);

  const form = useForm<User>({
    mode: "uncontrolled",
    initialValues: user,
    validate: zodResolver(UserValidator),
  });

  const handleFormSubmit = (values: User) => {
    console.log(values);
    setIsEdit(false);
    setGithubUsername(values.githubUsername);
    setTwitterUsername(values.twitterUsername);
  };

  return (
    <Card shadow="xs" padding="xl" radius="lg">
      <Stack>
        <Text size="lg">SNS</Text>
        {isEdit ? (
          <form onSubmit={form.onSubmit(handleFormSubmit)}>
            <Stack>
              <Flex align="center" gap={16}>
                <Image src="/image/github-mark.svg" w={24} h={24} />
                <TextInput
                  leftSection={"@"}
                  placeholder="your github username"
                  key={form.key("githubUsername")}
                  {...form.getInputProps("githubUsername")}
                />
              </Flex>
              <Flex align="center" gap={16}>
                <Box bg="black" p={6} style={{ borderRadius: "50%" }}>
                  <Image src="/image/logo.svg" w={12} h={12} />
                </Box>
                <TextInput
                  leftSection={"@"}
                  placeholder="your twitter username"
                  key={form.key("twitterUsername")}
                  {...form.getInputProps("twitterUsername")}
                />
              </Flex>
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
                  Save SNS User Name
                </Button>
              </Flex>
            </Stack>
          </form>
        ) : (
          <Stack>
            <Flex align="center" gap={16}>
              <Image src="/image/github-mark.svg" w={24} h={24} />
              <Text c="gray">@{githubUsername}</Text>
            </Flex>
            <Flex align="center" gap={16}>
              <Box bg="black" p={6} style={{ borderRadius: "50%" }}>
                <Image src="/image/logo.svg" w={12} h={12} />
              </Box>
              <Text c="gray">@{twitterUsername}</Text>
            </Flex>
            <Button w="fit-content" onClick={() => setIsEdit(true)}>
              Edit SNS User Name
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
