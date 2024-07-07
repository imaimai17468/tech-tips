import { useCreateBlockNote } from "@blocknote/react";

export const useHTMLDownload = () => {
  const editor = useCreateBlockNote();

  const HTMLDownload = async (content: string) => {
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
  };

  return HTMLDownload;
};
