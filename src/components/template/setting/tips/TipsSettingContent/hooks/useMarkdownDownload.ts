import { useCreateBlockNote } from "@blocknote/react";
import { useCallback } from "react";

export const useMarkdownDownload = (content: string) => {
  const editor = useCreateBlockNote();

  const markdownDownload = useCallback(async () => {
    const contentObject = JSON.parse(content);
    await editor.blocksToMarkdownLossy(contentObject).then((markdown: string) => {
      const blob = new Blob([markdown], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "content.md";
      a.click();
      URL.revokeObjectURL(url);
    });
  }, [editor, content]);

  return markdownDownload;
};
