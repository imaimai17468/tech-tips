import { createMockTipForm } from "@/repositories/tips/mock";
import { Box } from "@mantine/core";
import { TipEditForm } from "./TipEditFrom";

export const TipEditContent: React.FC = () => {
  const initialValues = createMockTipForm();

  return (
    <Box>
      <TipEditForm initialValues={initialValues} />
    </Box>
  );
};
