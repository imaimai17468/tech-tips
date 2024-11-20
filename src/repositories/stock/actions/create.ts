"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { stocks } from "@/db/schema";
import { TipValidator } from "@/repositories/tips/types";
import { replaceIDinPath } from "@/utils/replaceIDinPath";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createStock = async (tipId: string) => {
  const parsedTipId = TipValidator.shape.id.safeParse(tipId);

  if (!parsedTipId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  await db.insert(stocks).values({
    userId,
    tipId,
    clerkUserId: userId,
  });

  revalidatePath(replaceIDinPath(CLIENT_PATHS.TIP_DETAIL, tipId));
};
