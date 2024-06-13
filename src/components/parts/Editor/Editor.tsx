"use client";

import type { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect, useMemo, useState } from "react";

type props = {
  onChange: (value: string) => void;
  defaultValue?: string;
};

export const Editor: React.FC<props> = ({ onChange, defaultValue }: props) => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const editor = useCreateBlockNote({
    initialContent: JSON.parse(defaultValue || "[]"),
  });
  const contents = useMemo(() => JSON.stringify(blocks, null, 2), [blocks]);

  useEffect(() => {
    onChange(contents);
  }, [contents]);

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        setBlocks(editor.document);
      }}
    />
  );
};
