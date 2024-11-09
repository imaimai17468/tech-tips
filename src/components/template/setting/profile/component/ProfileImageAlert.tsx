import { Alert, Text } from "@mantine/core";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ProfileImageAlert: React.FC = () => {
  return (
    <Alert color="orange" icon={<ExclamationTriangleIcon />} variant="light" title="Profile Image Update Instructions">
      <Text>
        The profile image is managed by Clerk.
        <br />
        To change it, <strong>click the User Icon in the Header</strong>, then go to
        <strong>[Manage Account] → [Update Profile]</strong>.
      </Text>
    </Alert>
  );
};
