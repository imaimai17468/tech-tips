"use client";
import { Card, Image, Stack, Text, Title } from "@mantine/core";
import { StartButton } from "./StartButton";

export const TopContent: React.FC = () => {
  return (
    <Stack align="center" gap={48}>
      <Title>Where Technologies Rest.</Title>
      <StartButton />
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
      <Card padding="xl" radius="lg" style={{ border: "1px solid var(--mantine-color-gray-3)" }}>
        <Stack align="center" gap={32}>
          <Text>技術のための静かな場所を作りましょう。</Text>
          <Image src="/image/coder.svg" alt="コーディングしているプログラマーのイラスト" maw={150} />
          <StartButton />
        </Stack>
      </Card>
    </Stack>
  );
};
