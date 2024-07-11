import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Button } from "@mantine/core";

type Props = {
  isLogin: boolean;
  isLoading: boolean;
  open: () => void;
};

export const StartButton: React.FC<Props> = ({ isLogin, isLoading, open }) => {
  return isLogin ? (
    <Button variant="light" loading={isLoading} component="a" href={CLIENT_PATHS.TIP}>
      自分のページへ
    </Button>
  ) : (
    <Button onClick={open} variant="light">
      はじめる
    </Button>
  );
};
