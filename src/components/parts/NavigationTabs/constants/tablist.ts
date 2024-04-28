import { CLIENT_PATHS } from "@/constants/clientPaths";

export const TABLIST = ["Your Tips", "Your Stocks", "Explore"] as const;
export type TabList = (typeof TABLIST)[number];

export const TAB_WITH_PATH = {
  "Your Tips": CLIENT_PATHS.TOP,
  "Your Stocks": CLIENT_PATHS.STACK,
  Explore: CLIENT_PATHS.EXPLORE,
};
