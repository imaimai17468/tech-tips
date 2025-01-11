import { createSitePath } from "@/utils/createSiteURL";
import { ActionIcon, Flex } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

type Props = {
  githubUsername?: string;
  twitterUsername?: string;
};

export const SNSButtons: React.FC<Props> = ({ githubUsername, twitterUsername }) => {
  return (
    <Flex gap={8}>
      {githubUsername && (
        <ActionIcon
          radius="xl"
          variant="outline"
          bg="white"
          color="black"
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href={createSitePath("github", githubUsername)}
        >
          <Image src="/image/github-mark.svg" width={16} height={16} alt="GitHub" />
        </ActionIcon>
      )}
      {twitterUsername && (
        <ActionIcon
          radius="xl"
          color="black"
          component={Link}
          target="_blank"
          rel="noopener noreferrer"
          href={createSitePath("x", twitterUsername)}
        >
          <Image src="/image/logo.svg" width={16} height={16} alt="X(旧Twitter)" />
        </ActionIcon>
      )}
    </Flex>
  );
};
