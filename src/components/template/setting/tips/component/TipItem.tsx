import { CLIENT_PATHS } from "@/constants/clientPaths";
import type { Tip } from "@/repositories/tips/types";
import { dayFormat } from "@/utils/dayFormat";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { ActionIcon, Badge, Flex, Stack, Text } from "@mantine/core";
import { EyeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { TipDetailMenu } from "./TipDetailMenu";

type Props = {
  tip: Tip;
};

export const TipItem: React.FC<Props> = ({ tip }) => {
  return (
    <Stack gap={8}>
      <Flex justify="space-between">
        <Text size="lg">{tip.title}</Text>
        <Flex gap={8}>
          <ActionIcon
            radius="xl"
            size="lg"
            variant="light"
            component="a"
            href={replaceIDinPath(CLIENT_PATHS.TIP_DETAIL, tip.id)}
          >
            <EyeOpenIcon />
          </ActionIcon>
          <ActionIcon
            radius="xl"
            size="lg"
            variant="light"
            component="a"
            href={replaceIDinPath(CLIENT_PATHS.TIP_EDIT, tip.id)}
          >
            <Pencil1Icon />
          </ActionIcon>
          <TipDetailMenu />
        </Flex>
      </Flex>
      <Flex align="center" gap={8}>
        {tip.isPublic ? (
          <Badge variant="outline">Public</Badge>
        ) : (
          <Badge variant="outline" color="gray">
            Private
          </Badge>
        )}
        <Text size="sm">{dayFormat(tip.createdAt)}</Text>
      </Flex>
    </Stack>
  );
};
