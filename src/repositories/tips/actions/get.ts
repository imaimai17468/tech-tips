"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { tips, users } from "@/db/schema";
import { UserValidator } from "@/repositories/user/types";
import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { type Tip, TipValidator } from "../types";

export const getTipByID = async (tipID: string) => {
  const parsedId = TipValidator.shape.id.safeParse(tipID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const tipResponse = await db
    .select()
    .from(tips)
    .where(eq(tips.id, parsedId.data))
    .innerJoin(users, eq(tips.authorId, users.id))
    .then((res) => res[0]);

  if (!tipResponse) {
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const { authorId, ...tipWithoutAuthorId } = tipResponse.tips;
  const mappedTipResponse: Tip = {
    ...tipWithoutAuthorId,
    author: {
      ...tipResponse.users,
      bio: tipResponse.users.bio ?? undefined,
      twitterUsername: tipResponse.users.twitterUsername ?? undefined,
      githubUsername: tipResponse.users.githubUsername ?? undefined,
      userImageURL: tipResponse.users.userImageURL ?? undefined,
    },
  };

  const parsed = TipValidator.safeParse(mappedTipResponse);

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
      },
      users: {
        ...users,
      },
    })
    .from(tips)
    .innerJoin(users, eq(tips.authorId, users.id))
    .where(eq(tips.authorId, parsedId.data))
    .orderBy(desc(tips.createdAt));

  const mappedTipsResponse: Tip[] = tipsResponse.map((tip) => {
    const { authorId, ...tipWithoutAuthorId } = tip.tips;
    return {
      ...tipWithoutAuthorId,
      author: {
        ...tip.users,
        bio: tip.users.bio ?? undefined,
        twitterUsername: tip.users.twitterUsername ?? undefined,
        githubUsername: tip.users.githubUsername ?? undefined,
        userImageURL: tip.users.userImageURL ?? undefined,
      },
    };
  });

  const parsed = TipValidator.array().safeParse(mappedTipsResponse);

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
