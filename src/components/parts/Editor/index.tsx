"use client";
import { themeAtom } from "@/store/themeAtom";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import { type Theme, darkDefaultTheme, lightDefaultTheme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useAtomValue } from "jotai";
import "./style.css";

const lightTheme = {
  ...lightDefaultTheme,
} satisfies Theme;

const darkTheme = {
  ...darkDefaultTheme,
  colors: {
    ...darkDefaultTheme.colors,
    editor: {
      text: darkDefaultTheme.colors.editor.text,
      background: "--mantine-color-dark-6",
    },
  },
} satisfies Theme;

type props = {
  onChange?: (value: string) => void;
  defaultValue: string | undefined | null;
  editable?: boolean;
};

export const Editor: React.FC<props> = ({ onChange, defaultValue, editable = true }: props) => {
  const theme = useAtomValue(themeAtom);

  const editor = useCreateBlockNote({
    initialContent: defaultValue && JSON.parse(defaultValue),
  });

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        const blocksJSON = JSON.stringify(editor.document, null, 2);
        if (onChange) onChange(blocksJSON);
      }}
      editable={editable}
      theme={theme === "light" ? lightTheme : darkTheme}
    />
  );
};
