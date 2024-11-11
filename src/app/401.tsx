import { Alert } from "@mantine/core";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function NotFound() {
  return (
    <Alert color="red" icon={<ExclamationTriangleIcon />} title="Unauthorized">
      You are not authorized to view this page.
    </Alert>
  );
}
