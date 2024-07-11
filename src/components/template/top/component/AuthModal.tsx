import GoogleIcon from "@/assets/icons/googleIcon.svg";
import { Logo } from "@/components/parts/Logo";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { login } from "@/lib/auth";
import { Anchor, Button, Modal, Stack, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  opened: boolean;
  onClose: () => void;
};

export const AuthModal: React.FC<Props> = ({ opened, onClose }) => {
  const [waiting, setWaiting] = useState<boolean>(false);
  const router = useRouter();

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
        router.push(CLIENT_PATHS.TIP);
      });
  };

  return (
    <Modal
      size="md"
      centered
      padding="xl"
      radius="lg"
      withCloseButton={false}
      opened={opened}
      onClose={onClose}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      transitionProps={{ transition: "rotate-left" }}
    >
      <Stack gap={32} align="center">
        <Logo />
        <Stack gap={4} align="center">
          <Text>あなたのための、技術の知見書き置きサービス</Text>
          <Anchor href={CLIENT_PATHS.TOP}>詳しく見る</Anchor>
        </Stack>
        <Button variant="light" onClick={signIn} leftSection={<GoogleIcon />} loading={waiting}>
          Login with Google
        </Button>
      </Stack>
    </Modal>
  );
};
