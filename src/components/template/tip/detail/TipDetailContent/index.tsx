import { AuthorCard } from "@/components/parts/AuthorCard";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { getTipByID } from "@/repositories/tips/actions/get";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { auth } from "@clerk/nextjs/server";
import { ActionIcon, Button, Flex, Stack } from "@mantine/core";
import { BookmarkIcon } from "@radix-ui/react-icons";
import { Pencil1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ClipButton } from "./ClipButton";
import { TipArticleContent } from "./TipArticleContent";

type Props = {
  tipID: string;
};

export const TipDetailContent: React.FC<Props> = async ({ tipID }) => {
  const tip = await getTipByID(tipID);
  const { userId } = await auth();

  return (
    <Flex gap={32} direction={{ base: "column", md: "row" }}>
      <Stack w="100%">
        {userId === tip.author.id && (
          <Button
            ml="auto"
            variant="light"
            w="fit-content"
            component={Link}
            href={replaceIDinPath(CLIENT_PATHS.TIP_EDIT, tip.id)}
            rightSection={<Pencil1Icon />}
          >
            Edit
          </Button>
        )}
        <TipArticleContent tip={tip} />
      </Stack>
      <Stack>
        <Flex gap={8}>
          <ActionIcon radius="xl" variant="light" color="pink">
            <BookmarkIcon />
          </ActionIcon>
          <ClipButton />
        </Flex>
        <AuthorCard user={tip.author} />
      </Stack>
    </Flex>
  );
};
