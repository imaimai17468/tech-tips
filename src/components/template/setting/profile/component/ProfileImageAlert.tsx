import { Alert } from "@mantine/core";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ProfileImageAlert: React.FC = () => {
  return (
    <Alert color="orange" icon={<ExclamationTriangleIcon />} variant="light" title="Profile Image Update Instructions">
      <p>The profile image is managed by Clerk. </p>
      <p>To change it, click the User Icon in the Header, then go to [Manage Account] → [Update Profile].</p>
    </Alert>
  );
};
