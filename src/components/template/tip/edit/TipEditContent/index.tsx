import { getTipByID } from "@/repositories/tips/actions/get";
import { Box } from "@mantine/core";
import { TipEditForm } from "./TipEditFrom";

type Props = {
  tipID: string;
};

export const TipEditContent: React.FC<Props> = async ({ tipID }) => {
  const tip = await getTipByID(tipID);

  return (
    <Box>
      <TipEditForm initialValues={tip} />
    </Box>
  );
};
