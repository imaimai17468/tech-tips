"use client";

import GoogleIcon from "@/assets/icons/googleIcon.svg";
import { useAuth } from "@/context/auth";
import { login } from "@/lib/auth";
import { Button, Card, Flex, Stack, Text } from "@mantine/core";
import { useState } from "react";

export const AuthContent: React.FC = () => {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  return (
    <Flex justify="center" align="center" h="100%">
      <Card maw="500px" p="xl" radius="lg" shadow="xs">
        <Stack>
          <Stack gap={4}>
            <Text>TechTipsはあなたのための知見の書き置きサービスです。</Text>
            <Text>誰の目も気にせず、気軽に技術に触れましょう。</Text>
          </Stack>
          {user === null ? (
            <Button variant="light" onClick={signIn} leftSection={<GoogleIcon />} loading={waiting}>
              Login with Google
            </Button>
          ) : (
            <Button variant="light" component="a" href="/" loading={user === undefined}>
              はじめる
            </Button>
          )}
        </Stack>
      </Card>
    </Flex>
  );
};
