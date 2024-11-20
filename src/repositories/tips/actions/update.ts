"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { tips } from "@/db/schema";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { eq } from "drizzle-orm";
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

  await db
    .update(tips)
    .set({ ...submission.value, isPublic: submission.value.isPublic ?? false })
    .where(eq(tips.id, submission.value.id));

  return submission.reply();
};
