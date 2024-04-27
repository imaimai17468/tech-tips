import { CLIENT_PATHS } from "@/constants/clientPaths";

export const TABLIST = ["Your Tips", "Stacks", "Explore"] as const;
// TABLISTのリテラル型を定義
export type TabList = (typeof TABLIST)[number];

export const TAB_WITH_PATH = {
  "Your Tips": CLIENT_PATHS.TOP,
  Stacks: CLIENT_PATHS.STACK,
  Explore: CLIENT_PATHS.EXPLORE,
};
