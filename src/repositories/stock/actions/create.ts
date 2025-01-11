"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createClerkSupabaseClientSsr } from "@/db/client";
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

  const supabase = await createClerkSupabaseClientSsr();

  const { error } = await supabase.from("stocks").insert({
    user_id: userId,
    tip_id: tipId,
    clerk_user_id: userId,
  });

  if (error) {
    console.error(error);
    redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  revalidatePath(replaceIDinPath(CLIENT_PATHS.TIP_DETAIL, tipId));
};
