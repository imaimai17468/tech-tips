import { atomWithStorage } from "jotai/utils";

export const themeAtom = atomWithStorage<"light" | "dark" | null>("theme", null);
