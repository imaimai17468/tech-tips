"use server";

import { createClerkSupabaseClientSsr } from "@/app/ssr/client";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { type User, UserValidator } from "../types";

export const getUserByLoggedIn = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const supabase = await createClerkSupabaseClientSsr();

  const { data: userResponse, error } = await supabase.from("users").select("*").eq("id", userId).single();

  if (error) {
    console.error(error);
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const mappedUserResponse: User = {
    ...userResponse,
    bio: userResponse.bio ?? undefined,
    twitterUsername: userResponse.twitter_username ?? undefined,
    githubUsername: userResponse.github_username ?? undefined,
    userImageURL: userResponse.user_image_url ?? undefined,
    createdAt: new Date(userResponse.created_at),
    updatedAt: new Date(userResponse.updated_at),
  };

  const parsed = UserValidator.safeParse(mappedUserResponse);

  if (!parsed.success) {
    console.error(parsed.error);
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsed.data;
};

export const getUserByID = async (userID: string) => {
  const parsedId = UserValidator.shape.id.safeParse(userID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const supabase = await createClerkSupabaseClientSsr();

  const { data: userResponse, error } = await supabase.from("users").select("*").eq("id", parsedId.data).single();

  if (error) {
    console.error(error);
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const mappedUserResponse: User = {
    ...userResponse,
    bio: userResponse.bio ?? undefined,
    twitterUsername: userResponse.twitter_username ?? undefined,
    githubUsername: userResponse.github_username ?? undefined,
    userImageURL: userResponse.user_image_url ?? undefined,
    createdAt: new Date(userResponse.created_at),
    updatedAt: new Date(userResponse.updated_at),
  };

  const parsed = UserValidator.safeParse(mappedUserResponse);

  if (!parsed.success) {
    console.error(parsed.error);
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsed.data;
};
