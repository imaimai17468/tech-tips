import { Alert, Button, Modal, Stack, Text } from "@mantine/core";
import { ExclamationTriangleIcon, TrashIcon } from "@radix-ui/react-icons";

type Props = {
  opened: boolean;
  close: () => void;
  tipID: string;
};

export const TipDeleteModal: React.FC<Props> = ({ opened, close, tipID }) => {
  const handleDelete = () => {
    console.log("Delete tip with ID:", tipID);
    close();
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Delete Tip"
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      transitionProps={{ transition: "rotate-left" }}
    >
      <Stack>
        <Text>Are you sure you want to delete this tip?</Text>
        <Alert color="orange" icon={<ExclamationTriangleIcon />} variant="light">
          Deleting a tip cannot be undone.
        </Alert>
        <Button color="red" onClick={handleDelete} leftSection={<TrashIcon />}>
          Delete
        </Button>
      </Stack>
    </Modal>
  );
};
