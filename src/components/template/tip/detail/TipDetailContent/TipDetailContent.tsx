import { AuthorCard } from "@/components/parts/authorCard";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createMockTip } from "@/repositories/tips/mock";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { ActionIcon, Badge, Button, Card, Flex, Stack, Text, Title } from "@mantine/core";
import { BookmarkIcon, Link1Icon, Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

export const TipDetailContent: React.FC = () => {
  const tip = createMockTip();

  return (
    <Flex gap={32} mt={64}>
      <Stack>
        <Button w="fit-content" component={Link} href={replaceIDinPath(CLIENT_PATHS.TIP_EDIT, tip.id)}>
          <Flex gap={4} align="center">
            <Pencil2Icon />
            <Text>Edit</Text>
          </Flex>
        </Button>
        <Card shadow="xs" padding="xl" radius="lg" h="fit-content" w="100%">
          <Stack gap={16}>
            <Title>{tip.title}</Title>
            {tip.tags && (
              <Flex gap={8}>
                {tip.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </Flex>
            )}
            <Text>{tip.content}</Text>
          </Stack>
        </Card>
      </Stack>
      <Stack>
        <Flex gap={8}>
          <ActionIcon radius="xl" variant="outline" color="pink">
            <BookmarkIcon />
          </ActionIcon>
          <ActionIcon radius="xl" variant="outline">
            <Link1Icon />
          </ActionIcon>
        </Flex>
        <AuthorCard user={tip.author} />
      </Stack>
    </Flex>
  );
};
