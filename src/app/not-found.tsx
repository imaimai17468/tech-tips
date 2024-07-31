import { Alert } from "@mantine/core";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function NotFound() {
  return (
    <Alert color="red" icon={<ExclamationTriangleIcon />} title="Not Found">
      The page you are looking for does not exist.
    </Alert>
  );
}
