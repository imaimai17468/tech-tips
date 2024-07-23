import { createMockTipForm } from "@/repositories/tips/mock";
import { createMockUser } from "@/repositories/user/mock";
import { Box } from "@mantine/core";
import { TipEditForm } from "../components/TipEditForm";

export const TipEditContent: React.FC = () => {
  const user = createMockUser();
  const initialValues = createMockTipForm();

  return (
    <Box>
      <TipEditForm user={user} initialValues={initialValues} />
    </Box>
  );
};
