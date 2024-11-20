"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { users } from "@/db/schema";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { UserValidator } from "../types";

export const updateUserName = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const submission = parseWithZod(formData, { schema: UserValidator.pick({ username: true }) });

  if (submission.status !== "success" || !userId) {
    return submission.reply();
  }

  await db.update(users).set(submission.value).where(eq(users.id, userId));

  return submission.reply();
};

export const updateUserBio = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const submission = parseWithZod(formData, { schema: UserValidator.pick({ bio: true }) });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db
    .update(users)
    .set({ ...submission.value, bio: submission.value.bio ?? "" })
    .where(eq(users.id, userId));

  return submission.reply();
};

export const updateUserSNS = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const submission = parseWithZod(formData, {
    schema: UserValidator.pick({ twitterUsername: true, githubUsername: true }),
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db
    .update(users)
    .set({
      ...submission.value,
      twitterUsername: submission.value.twitterUsername ?? "",
      githubUsername: submission.value.githubUsername ?? "",
    })
    .where(eq(users.id, userId));

  return submission.reply();
};
