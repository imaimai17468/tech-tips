"use client";

import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth";
import { Button } from "@mantine/core";
import { useState } from "react";

export const AuthContent: React.FC = () => {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };
  return (
    <div>
      {user === null && !waiting && <Button onClick={signIn}>ログイン</Button>}
      {user && <Button onClick={logout}>ログアウト</Button>}
    </div>
  );
};
