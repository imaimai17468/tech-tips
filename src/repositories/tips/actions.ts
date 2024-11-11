"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { prisma } from "@/libs/prisma";
import type { ConformAction } from "@/types/conform";
import { auth } from "@clerk/nextjs/server";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { ulid } from "ulidx";
import { UserIDValidator } from "../user/types";
import { TipIDValidator, TipValidator } from "./types";

export const getTipByID = async (tipID: string) => {
  const parsedId = TipIDValidator.safeParse(tipID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const tipResponse = await prisma.tip.findUnique({ where: { id: parsedId.data } });
  const parsed = TipValidator.safeParse(tipResponse);

  if (!tipResponse || !parsed.success) {
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  return parsed.data;
};

export const getTipsByAuthorID = async (authorID: string) => {
  const parsedId = UserIDValidator.safeParse(authorID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const tipsResponse = await prisma.tip.findMany({ where: { authorId: parsedId.data } });
  const parsed = TipValidator.array().safeParse(tipsResponse);

  if (!tipsResponse || !parsed.success) {
    return null;
  }

  return parsed.data;
};

export const getTipsByLoggedInUser = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  return getTipsByAuthorID(userId);
};

export const createTip = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
  const { userId } = auth();
  const submission = parseWithZod(formData, {
    schema: TipValidator.pick({ title: true, content: true, isPublic: true }),
  });

  if (submission.status !== "success" || !userId) {
    return submission.reply();
  }

  await prisma.tip.create({ data: { ...submission.value, authorId: userId, id: ulid() } });

  return submission.reply();
};

export const updateTip = async (...[_prev, formData]: Parameters<ConformAction>): ReturnType<ConformAction> => {
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