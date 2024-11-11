import { Alert } from "@mantine/core";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function NotFound() {
  return (
    <Alert color="red" icon={<ExclamationTriangleIcon />} title="Bad Request">
      The request could not be understood by the server due to malformed syntax.
    </Alert>
  );
}
