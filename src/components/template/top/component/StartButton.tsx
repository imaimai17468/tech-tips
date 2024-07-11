"use client";

import { CLIENT_PATHS } from "@/constants/clientPaths";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

type Props = {
  isLogin: boolean;
  isLoading: boolean;
  open: () => void;
};

export const StartButton: React.FC<Props> = ({ isLogin, isLoading, open }) => {
  const router = useRouter();

  return isLogin ? (
    <Button variant="light" loading={isLoading} onClick={() => router.push(CLIENT_PATHS.TIP)}>
      自分のページへ
    </Button>
  ) : (
    <Button onClick={open} variant="light">
      はじめる
    </Button>
  );
};
