import { AuthorCard } from "@/components/parts/authorCard";
import { createMockTipForm } from "@/repositories/tips/mock";
import { createMockUser } from "@/repositories/user/mock";
import { Flex } from "@mantine/core";
import { TipEditForm } from "../components/TipEditForm";

export const TipEditContent: React.FC = () => {
  const user = createMockUser();
  const initialValues = createMockTipForm();

  return (
    <Flex gap={32}>
      <TipEditForm user={user} initialValues={initialValues} />
      <AuthorCard user={user} />
    </Flex>
  );
};
