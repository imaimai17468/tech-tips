import { useCreateBlockNote } from "@blocknote/react";

export const useMarkdownDownload = () => {
  const editor = useCreateBlockNote();

  const markdownDownload = async (content: string) => {
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
  };

  return markdownDownload;
};
