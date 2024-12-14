"use client";

import { createStock } from "@/repositories/stock/actions/create";
import { deleteStock } from "@/repositories/stock/actions/delete";
import { SignInButton, useUser } from "@clerk/nextjs";
import { ActionIcon, Button, Center, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BookmarkIcon } from "@radix-ui/react-icons";

type Props = {
  tipId: string;
  isStocked: boolean;
};

export const StockButton: React.FC<Props> = ({ tipId, isStocked }) => {
  const { isSignedIn } = useUser();
  const [opened, { open, close }] = useDisclosure(false);

  const handleStockButtonClick = async () => {
    if (!isSignedIn) {
      open();
      return;
    }

    if (isStocked) {
      await deleteStock(tipId);
    } else {
      await createStock(tipId);
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Please log in to stock this tip." centered>
        <Center>
          <SignInButton>
            <Button variant="light">Get Started</Button>
          </SignInButton>
        </Center>
      </Modal>
      <ActionIcon radius="xl" variant={isStocked ? "filled" : "light"} color="pink" onClick={handleStockButtonClick}>
        <BookmarkIcon />
      </ActionIcon>
    </>
  );
};
