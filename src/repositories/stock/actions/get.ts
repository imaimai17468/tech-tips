import { createClerkSupabaseClientSsr } from "@/app/ssr/client";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { type Tip, TipValidator } from "@/repositories/tips/types";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getStocksByLoggedInUser = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const supabase = await createClerkSupabaseClientSsr();

  const { data: userStocks, error } = await supabase
    .from("stocks")
    .select(
      `
      *,
      tips!inner (
        *
      ),
      users!inner (
        *
      )
    `,
    )
    .eq("user_id", userId);

  if (error) {
    console.error(error);
    redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  const stockedTipsWithDetails: Tip[] = userStocks.map((stock) => {
    const { author_id, is_public, ...tipWithoutAuthorId } = stock.tips;
    return {
      ...tipWithoutAuthorId,
      createdAt: new Date(stock.tips.created_at),
      updatedAt: new Date(stock.tips.updated_at),
      isPublic: is_public,
      author: {
        ...stock.users,
        id: stock.users.id,
        username: stock.users.username,
        createdAt: new Date(stock.users.created_at),
        updatedAt: new Date(stock.users.updated_at),
        bio: stock.users.bio ?? undefined,
        twitterUsername: stock.users.twitter_username ?? undefined,
        githubUsername: stock.users.github_username ?? undefined,
        userImageURL: stock.users.user_image_url ?? undefined,
      },
    };
  });

  const parsedStocksDetails = TipValidator.array().safeParse(stockedTipsWithDetails);

  if (!parsedStocksDetails.success) {
    console.error(parsedStocksDetails.error);
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsedStocksDetails.data;
};
