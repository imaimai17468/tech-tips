"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { tips, users } from "@/db/schema";
import { UserValidator } from "@/repositories/user/types";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { TipValidator } from "../types";

export const getTipByID = async (tipID: string) => {
  const parsedId = TipValidator.shape.id.safeParse(tipID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const tipResponse = await db
    .select()
    .from(tips)
    .where(eq(tips.id, parsedId.data))
    .innerJoin(users, eq(tips.authorId, users.id));

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

  const tipsResponse = await db
    .select({
      tips: {
        ...tips,
        author: users,
      },
    })
    .from(tips)
    .innerJoin(users, eq(tips.authorId, users.id))
    .where(eq(tips.authorId, parsedId.data))
    .orderBy(desc(tips.createdAt));

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
