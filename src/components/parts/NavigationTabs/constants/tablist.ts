import { PATHS } from "@/constants/paths";

export const TABLIST = ["Your Tips", "Stacks", "Explore"] as const;
// TABLISTのリテラル型を定義
export type TabList = (typeof TABLIST)[number];

export const TAB_WITH_PATH = {
  "Your Tips": PATHS.TOP,
  Stacks: PATHS.STACK,
  Explore: PATHS.EXPLORE,
};
