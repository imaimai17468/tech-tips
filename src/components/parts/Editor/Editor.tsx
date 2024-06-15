"use client";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

type props = {
  onChange: (value: string) => void;
  defaultValue?: string;
  editable?: boolean;
};

export const Editor: React.FC<props> = ({ onChange, defaultValue, editable = true }: props) => {
  const editor = useCreateBlockNote({
    initialContent: defaultValue && JSON.parse(defaultValue),
  });

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        const blocksJSON = JSON.stringify(editor.document, null, 2);
        onChange(blocksJSON);
      }}
      editable={editable}
    />
  );
};
