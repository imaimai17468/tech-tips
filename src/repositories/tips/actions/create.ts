"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createClerkSupabaseClientSsr } from "@/db/client";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { TipValidator } from "../types";

export const createTip = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
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

  const { error } = await supabase.from("tips").insert({
    id: submission.value.id,
    title: submission.value.title,
    content: submission.value.content,
    tags: submission.value.tags,
    is_public: submission.value.isPublic,
    author_id: userId,
    clerk_user_id: userId,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error(error);
    redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return submission.reply();
};
