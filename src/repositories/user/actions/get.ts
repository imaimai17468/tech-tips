"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { users } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { type User, UserValidator } from "../types";

export const getUserByLoggedIn = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const userResponse = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .then((res) => res[0]);

  if (!userResponse) {
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const mappedUserResponse: User = {
    ...userResponse,
    bio: userResponse.bio ?? undefined,
    twitterUsername: userResponse.twitterUsername ?? undefined,
    githubUsername: userResponse.githubUsername ?? undefined,
    userImageURL: userResponse.userImageURL ?? undefined,
  };

  const parsed = UserValidator.safeParse(mappedUserResponse);

  if (!parsed.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsed.data;
};

export const getUserByID = async (userID: string) => {
  const parsedId = UserValidator.shape.id.safeParse(userID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const userResponse = await db
    .select()
    .from(users)
    .where(eq(users.id, parsedId.data))
    .then((res) => res[0]);

  if (!userResponse) {
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const mappedUserResponse: User = {
    ...userResponse,
    bio: userResponse.bio ?? undefined,
    twitterUsername: userResponse.twitterUsername ?? undefined,
    githubUsername: userResponse.githubUsername ?? undefined,
    userImageURL: userResponse.userImageURL ?? undefined,
  };

  const parsed = UserValidator.safeParse(mappedUserResponse);

  if (!parsed.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsed.data;
};
