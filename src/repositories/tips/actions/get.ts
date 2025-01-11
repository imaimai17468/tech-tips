"use server";

import { createClerkSupabaseClientSsr } from "@/app/ssr/client";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { UserValidator } from "@/repositories/user/types";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { type Tip, TipValidator } from "../types";

export const getTipByID = async (tipID: string) => {
  const parsedId = TipValidator.shape.id.safeParse(tipID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const supabase = await createClerkSupabaseClientSsr();

  const { data: tipResponse, error } = await supabase
    .from("tips")
    .select(`
      *,
      users:author_id (*)
    `)
    .eq("id", parsedId.data)
    .single();

  if (error) {
    console.error(error);
    redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const { data: stocksResponse, error: stocksError } = await supabase
    .from("stocks")
    .select("*")
    .eq("tip_id", parsedId.data);

  if (stocksError) {
    console.error(stocksError);
    redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const { author_id, created_at, updated_at, is_public, ...tipWithoutAuthorId } = tipResponse;
  const mappedTipResponse: Tip = {
    ...tipWithoutAuthorId,
    createdAt: new Date(created_at),
    updatedAt: new Date(updated_at),
    isPublic: is_public,
    author: {
      ...tipResponse.users,
      bio: tipResponse.users.bio ?? undefined,
      twitterUsername: tipResponse.users.twitter_username ?? undefined,
      githubUsername: tipResponse.users.github_username ?? undefined,
      userImageURL: tipResponse.users.user_image_url ?? undefined,
      createdAt: new Date(tipResponse.users.created_at),
      updatedAt: new Date(tipResponse.users.updated_at),
    },
    stocks: stocksResponse.map((stock) => ({
      userId: stock.user_id,
      tipId: stock.tip_id,
    })),
  };

  const parsed = TipValidator.safeParse(mappedTipResponse);

  if (!parsed.success) {
    console.error(parsed.error);
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsed.data;
};

export const getTipsByAuthorID = async (authorID: string) => {
  const parsedId = UserValidator.shape.id.safeParse(authorID);

  if (!parsedId.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const supabase = await createClerkSupabaseClientSsr();

  const { data: tipsResponse, error } = await supabase
    .from("tips")
    .select(`
      *,
      users:author_id (*)
    `)
    .eq("author_id", parsedId.data)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const mappedTipsResponse: Tip[] = tipsResponse.map((tip) => {
    const { author_id, created_at, updated_at, is_public, ...tipWithoutAuthorId } = tip;
    return {
      ...tipWithoutAuthorId,
      createdAt: new Date(created_at),
      updatedAt: new Date(updated_at),
      isPublic: is_public,
      author: {
        ...tip.users,
        bio: tip.users.bio ?? undefined,
        twitterUsername: tip.users.twitter_username ?? undefined,
        githubUsername: tip.users.github_username ?? undefined,
        userImageURL: tip.users.user_image_url ?? undefined,
        createdAt: new Date(tip.users.created_at),
        updatedAt: new Date(tip.users.updated_at),
      },
    };
  });

  const parsed = TipValidator.array().safeParse(mappedTipsResponse);

  if (!parsed.success) {
    console.error(parsed.error);
    redirect(CLIENT_PATHS.BAD_REQUEST);
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
