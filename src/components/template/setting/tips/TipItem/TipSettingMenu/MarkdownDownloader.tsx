import { useEffect } from "react";
import { useMarkdownDownload } from "../../hooks/useMarkdownDownload";

type Props = {
  content: string;
  isMarkdownDownloading: boolean;
  onFinish: () => void;
};

export const MarkdownDownloader: React.FC<Props> = ({ content, isMarkdownDownloading, onFinish }) => {
  const markdownDownload = useMarkdownDownload(content);

  useEffect(() => {
    if (isMarkdownDownloading) {
      Promise.resolve(markdownDownload()).then(() => {
        onFinish();
      });
    }
  }, [markdownDownload, isMarkdownDownloading, onFinish]);

  return null;
};
