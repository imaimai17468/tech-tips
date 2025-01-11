"use server";

import { createClerkSupabaseClientSsr } from "@/app/ssr/client";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { TipValidator } from "../types";

export const updateTip = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const submission = parseWithZod(formData, {
    schema: TipValidator.pick({ id: true, title: true, content: true, tags: true, isPublic: true }),
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const supabase = await createClerkSupabaseClientSsr();

  const { error } = await supabase
    .from("tips")
    .update({
      title: submission.value.title,
      content: submission.value.content,
      tags: submission.value.tags,
      is_public: submission.value.isPublic,
      updated_at: new Date().toISOString(),
    })
    .eq("id", submission.value.id);

  if (error) {
    console.error(error);
    redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return submission.reply();
};
