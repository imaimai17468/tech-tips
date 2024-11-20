import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { stocks, tips, users } from "@/db/schema";
import { type Tip, TipValidator } from "@/repositories/tips/types";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const getStocksByLoggedInUser = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const userStocks = await db
    .select()
    .from(stocks)
    .where(eq(stocks.userId, userId))
    .innerJoin(tips, eq(stocks.tipId, tips.id))
    .innerJoin(users, eq(tips.authorId, users.id));

  const stockedTipsWithDetails: Tip[] = userStocks.map((stock) => {
    const { authorId, ...tipWithoutAuthorId } = stock.tips;
    return {
      ...tipWithoutAuthorId,
      author: {
        ...stock.users,
        bio: stock.users.bio ?? undefined,
        twitterUsername: stock.users.twitterUsername ?? undefined,
        githubUsername: stock.users.githubUsername ?? undefined,
        userImageURL: stock.users.userImageURL ?? undefined,
      },
    };
  });

  const parsedStocksDetails = TipValidator.array().safeParse(stockedTipsWithDetails);

  if (!parsedStocksDetails.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsedStocksDetails.data;
};
