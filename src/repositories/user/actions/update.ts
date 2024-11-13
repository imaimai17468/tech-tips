"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { prisma } from "@/libs/prisma";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
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

  await prisma.user.update({ where: { id: userId }, data: submission.value });

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

  await prisma.user.update({
    where: { id: userId },
    data: {
      ...submission.value,
      bio: submission.value.bio ?? "",
    },
  });

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

  await prisma.user.update({
    where: { id: userId },
    data: {
      ...submission.value,
      twitterUsername: submission.value.twitterUsername ?? "",
      githubUsername: submission.value.githubUsername ?? "",
    },
  });

  return submission.reply();
};
