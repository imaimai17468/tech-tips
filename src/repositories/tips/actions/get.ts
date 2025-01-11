"use server";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { createClerkSupabaseClientSsr } from "@/db/client";
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

  if (error || !tipResponse) {
    return redirect(CLIENT_PATHS.NOT_FOUND);
  }

  const { data: stocksResponse, error: stocksError } = await supabase
    .from("stocks")
    .select("*")
    .eq("tip_id", parsedId.data);

  if (stocksError || !stocksResponse) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const { author_id, created_at, updated_at, ...tipWithoutAuthorId } = tipResponse;
  const mappedTipResponse: Tip = {
    ...tipWithoutAuthorId,
    createdAt: new Date(created_at),
    updatedAt: new Date(updated_at),
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
      users!inner (*)
    `)
    .eq("author_id", parsedId.data)
    .order("created_at", { ascending: false });

  if (error || !tipsResponse) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const mappedTipsResponse: Tip[] = tipsResponse.map((tip) => {
    const { author_id, created_at, updated_at, ...tipWithoutAuthorId } = tip;
    return {
      ...tipWithoutAuthorId,
      createdAt: new Date(created_at),
      updatedAt: new Date(updated_at),
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
