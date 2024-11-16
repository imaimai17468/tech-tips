"use client";

import { createStock } from "@/repositories/stock/actions/create";
import { deleteStock } from "@/repositories/stock/actions/delete";
import { ActionIcon } from "@mantine/core";
import { BookmarkIcon } from "@radix-ui/react-icons";

type Props = {
  tipId: string;
  isStocked: boolean;
};

export const StockButton: React.FC<Props> = ({ tipId, isStocked }) => {
  const handleStockButtonClick = async () => {
    if (isStocked) {
      await deleteStock(tipId);
    } else {
      await createStock(tipId);
    }
  };

  return (
    <ActionIcon radius="xl" variant={isStocked ? "filled" : "light"} color="pink" onClick={handleStockButtonClick}>
      <BookmarkIcon />
    </ActionIcon>
  );
};
