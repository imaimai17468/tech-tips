import { createMockUser } from "@/repositories/user/mock";
import { Box } from "@mantine/core";
import { TipEditForm } from "../components/TipEditForm";

export const TipCreateContent: React.FC = () => {
  const user = createMockUser();

  return (
    <Box>
      <TipEditForm user={user} />
    </Box>
  );
};
