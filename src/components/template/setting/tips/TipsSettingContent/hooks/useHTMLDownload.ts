import { useCreateBlockNote } from "@blocknote/react";
import { useCallback } from "react";

export const useHTMLDownload = (content: string) => {
  const editor = useCreateBlockNote();

  const HTMLDownload = useCallback(async () => {
    const contentObject = JSON.parse(content);
    await editor.blocksToHTMLLossy(contentObject).then((HTML: string) => {
      const blob = new Blob([HTML], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "content.html";
      a.click();
      URL.revokeObjectURL(url);
    });
  }, [editor, content]);

  return HTMLDownload;
};
