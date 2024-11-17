import { CLIENT_PATHS } from "@/constants/clientPaths";
import { prisma } from "@/libs/prisma";
import { TipValidator } from "@/repositories/tips/types";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const getStocksByLoggedInUser = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect(CLIENT_PATHS.UNAUTHORIZED);
  }

  const stocks = await prisma.stock.findMany({ where: { userId }, include: { tip: { include: { author: true } } } });
  const stockedTips = stocks.map((stock) => stock.tip);

  const parsedStocksDetails = TipValidator.array().safeParse(stockedTips);

  if (!parsedStocksDetails.success) {
    console.error(parsedStocksDetails.error);
    return redirect(CLIENT_PATHS.BAD_REQUEST);
  }

  return parsedStocksDetails.data;
};
