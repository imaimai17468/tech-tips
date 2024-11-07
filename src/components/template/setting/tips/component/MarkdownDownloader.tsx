import { useEffect } from "react";
import { useMarkdownDownload } from "../hooks/useMarkdownDownload";

type Props = {
  onDownload: (downloadFunction: (content: string) => void) => void;
};

export const MarkdownDownloader: React.FC<Props> = ({ onDownload }) => {
  const markdownDownload = useMarkdownDownload();

  useEffect(() => {
    onDownload(markdownDownload);
  }, [onDownload, markdownDownload]);

  return null;
};
