"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { prisma } from "@/libs/prisma";
import { redirect } from "next/navigation";
import { TipIDValidator } from "../types";

export const deleteTipByID = async (tipID: string) => {
  const parsedId = TipIDValidator.safeParse(tipID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  await prisma.tip.delete({
    where: { id: parsedId.data },
  });
  return redirect(CLIENT_PATHS.SETTINGS_TIPS);
};
