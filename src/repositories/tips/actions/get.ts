"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { prisma } from "@/libs/prisma";
import { UserValidator } from "@/repositories/user/types";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TipIDValidator, TipValidator } from "../types";

export const getTipByID = async (tipID: string) => {
  const parsedId = TipIDValidator.safeParse(tipID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const tipResponse = await prisma.tip.findUnique({
    where: { id: parsedId.data },
    include: { author: true },
  });

  if (!tipResponse) {
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const parsed = TipValidator.safeParse(tipResponse);

  if (!parsed.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsed.data;
};

export const getTipsByAuthorID = async (authorID: string) => {
  const parsedId = UserValidator.shape.id.safeParse(authorID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const tipsResponse = await prisma.tip.findMany({
    where: { authorId: parsedId.data },
    include: { author: true },
  });

  const parsed = TipValidator.array().safeParse(tipsResponse);

  if (!parsed.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsed.data;
};

export const getTipsByLoggedInUser = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  return getTipsByAuthorID(userId);
};
