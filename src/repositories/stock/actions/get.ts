import { CLIENT_PATHS } from "@/constants/clientPaths";
import { db } from "@/db";
import { stocks, tips } from "@/db/schema";
import { TipValidator } from "@/repositories/tips/types";
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
    .innerJoin(tips, eq(stocks.tipId, tips.id));
  const stockedTips = userStocks.map((stock) => stock.tips);

  const parsedStocksDetails = TipValidator.array().safeParse(stockedTips);

  if (!parsedStocksDetails.success) {
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsedStocksDetails.data;
};
