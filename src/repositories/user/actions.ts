"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { UserValidator } from "./types";

const prisma = new PrismaClient();

export async function updateUser(...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> {
  const { userId } = auth();
  const submission = parseWithZod(formData, { schema: UserValidator.pick({ username: true }) });

  if (submission.status !== "success" || !userId) {
    return submission.reply();
  }

  await prisma.user.update({ where: { id: userId }, data: { username: submission.value.username } });

  redirect(CLIENT_PATHS.SETTINGS_PROFILE);
  return submission.reply();
}

export const getUser = async (id: string) => {
  const userResponse = await prisma.user.findUnique({ where: { id } });
  const parsed = UserValidator.safeParse(userResponse);

  if (!userResponse || !parsed.success) {
    return null;
  }

  return parsed.data;
};
