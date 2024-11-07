import { useEffect } from "react";
import { useHTMLDownload } from "../hooks/useHTMLDownload";

type Props = {
  onDownload: (downloadFunction: (content: string) => void) => void;
};

export const HTMLDownloader: React.FC<Props> = ({ onDownload }) => {
  const HTMLDownload = useHTMLDownload();

  useEffect(() => {
    onDownload(HTMLDownload);
  }, [onDownload, HTMLDownload]);

  return null;
};
