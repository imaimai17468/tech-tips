import { AuthorCard } from "@/components/parts/authorCard";
import { createMockUser } from "@/repositories/user/mock";
import { Flex } from "@mantine/core";
import { TipEditForm } from "../../components/TipEditForm";

export const TipCreateContent: React.FC = () => {
  const user = createMockUser();

  return (
    <Flex gap={32} mt={64}>
      <TipEditForm user={user} />
      <AuthorCard user={user} />
    </Flex>
  );
};
