"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { stocks } from "@/db/schema";
import { TipValidator } from "@/repositories/tips/types";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteStock = async (tipId: string) => {
  const parsedTipId = TipValidator.shape.id.safeParse(tipId);

  if (!parsedTipId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  await db.delete(stocks).where(and(eq(stocks.userId, userId), eq(stocks.tipId, tipId)));

  revalidatePath(replaceIDinPath(CLIENT_PATHS.TIP_DETAIL, tipId));
};
