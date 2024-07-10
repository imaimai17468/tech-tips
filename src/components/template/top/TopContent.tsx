"use client";

import { Button, Card, Image, Stack, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AuthModal } from "./component/AuthModal";

export const TopContent: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack align="center" gap={48}>
      <Title>Where Technologies Rest.</Title>
      <Button onClick={open} variant="light">
        はじめる
      </Button>
      <AuthModal opened={opened} onClose={close} />
      <Stack gap={16} maw="600px">
        <Text>TechTipsは、技術的なメモやアイデアを簡単に書き留めるためのサービスです。</Text>
        <Text>
          ここでは、完璧な情報や高度な解説を書く必要はありません。周囲の評価や、反響を気にする必要もありません。
        </Text>
        <Text>
          「自分のために、気軽にメモを残す」「いつか誰かが役立てるかもしれない」
          <br />
          そんなリラックスした気持ちで、技術的なメモやコードスニペットを保存するための場所です。
        </Text>
        <Text>
          技術的な発見や考えを自由に記録し、整理するためのツールとして、あなたの成長と創造性をサポートします。
        </Text>
      </Stack>
      <Card bg="gray.1" padding="xl" radius="lg" style={{ border: "1px solid #cdcdcd" }}>
        <Stack align="center" gap={32}>
          <Text>あなたの静かな技術の場所を作りましょう。</Text>
          <Image src="/image/coder.svg" alt="Coder" maw={150} />
          <Button onClick={open} variant="light">
            はじめる
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
};