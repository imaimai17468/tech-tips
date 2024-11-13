"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { prisma } from "@/libs/prisma";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { ulid } from "ulidx";
import { TipValidator } from "../types";

export const createTip = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
  const { userId } = auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const submission = parseWithZod(formData, {
    schema: TipValidator.pick({ title: true, content: true, isPublic: true }),
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.tip.create({ data: { ...submission.value, authorId: userId, id: ulid() } });

  return submission.reply();
};
