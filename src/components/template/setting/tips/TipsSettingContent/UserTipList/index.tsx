import { getTipsByLoggedInUser } from "@/repositories/tips/actions";
import { Alert, Divider, Stack } from "@mantine/core";
import { ExclamationTriangleIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { TipItem } from "../TipItem";

export const UserTipList: React.FC = async () => {
  const tips = await getTipsByLoggedInUser();

  if (!tips) {
    return (
      <Alert color="red" icon={<ExclamationTriangleIcon />} title="Failed to retrieve tips">
        Failed to retrieve tips.
      </Alert>
    );
  }

  if (tips.length === 0) {
    return (
      <Alert color="gray" icon={<InfoCircledIcon />} title="No tips found">
        Try writing some tips!
      </Alert>
    );
  }

  return (
    <Stack>
      {tips.map((tip) => (
        <Stack key={tip.id}>
          <TipItem tip={tip} />
          <Divider />
        </Stack>
      ))}
    </Stack>
  );
};
