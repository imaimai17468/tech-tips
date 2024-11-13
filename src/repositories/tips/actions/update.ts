"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { prisma } from "@/libs/prisma";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { TipIDValidator, TipValidator } from "../types";

export const updateTip = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
  const { userId } = auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const submission = parseWithZod(formData, {
    schema: TipValidator.pick({ id: true, title: true, content: true, isPublic: true }),
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const parsedId = TipIDValidator.safeParse(submission.value.id);

  if (!parsedId.success) {
    return submission.reply();
  }

  await prisma.tip.update({ where: { id: parsedId.data }, data: submission.value });

  return submission.reply();
};