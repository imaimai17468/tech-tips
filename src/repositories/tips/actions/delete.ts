"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { tips } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { TipValidator } from "../types";

export const deleteTipByID = async (tipID: string) => {
  const parsedId = TipValidator.shape.id.safeParse(tipID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  await db.delete(tips).where(eq(tips.id, parsedId.data));

  return redirect(CLIENT_PATHS.SETTINGS_TIPS);
};
