"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createClerkSupabaseClientSsr } from "@/db/client";
import { redirect } from "next/navigation";
import { TipValidator } from "../types";

export const deleteTipByID = async (tipID: string) => {
  const parsedId = TipValidator.shape.id.safeParse(tipID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }
  const supabase = await createClerkSupabaseClientSsr();

  const { error } = await supabase.from("tips").delete().eq("id", parsedId.data);

  if (error) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return redirect(CLIENT_PATHS.SETTINGS_TIPS);
};
