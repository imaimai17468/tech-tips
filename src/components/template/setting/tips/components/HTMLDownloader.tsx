import { useEffect } from "react";
import { useHTMLDownload } from "../hooks/useHTMLDownload";

type Props = {
  content: string;
  isHTMLDownloading: boolean;
  onFinish: () => void;
};

export const HTMLDownloader: React.FC<Props> = ({ content, isHTMLDownloading, onFinish }) => {
  const HTMLDownload = useHTMLDownload(content);

  useEffect(() => {
    if (isHTMLDownloading) {
      Promise.resolve(HTMLDownload()).then(() => {
        onFinish();
      });
    }
  }, [HTMLDownload, isHTMLDownloading, onFinish]);

  return null;
};
