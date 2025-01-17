"use client";

import { themeAtom } from "@/store/themeAtom";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (theme === null) {
      setTheme("dark");
      setColorScheme("dark");
    }
  }, [setTheme, setColorScheme, theme]);

  return (
    <ActionIcon
      variant="outline"
      color={theme === "dark" ? "yellow" : "blue"}
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
          setColorScheme("dark");
        } else {
          setTheme("light");
          setColorScheme("light");
        }
      }}
      title="Toggle color scheme"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </ActionIcon>
  );
};
