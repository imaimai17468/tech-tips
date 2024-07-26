"use client";

import { AUTH_REQUIRED_PATHS } from "@/constants/clientPaths";
import type { ClientPathValues } from "@/constants/clientPaths";
import { CLIENT_PATHS } from "@/constants/clientPaths";
import { useAuth } from "@/context/auth";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthRouter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useAuth();

  useEffect(() => {
    const isAuthenticating = user === undefined;
    const isAuthenticated = !!user;

    const isAuthRequiredPath = AUTH_REQUIRED_PATHS.includes(pathname as ClientPathValues);

    if (isAuthenticating) return;

    if (isAuthRequiredPath && !isAuthenticated) {
      router.push(CLIENT_PATHS.TOP);
    }
  }, [user, pathname]);
};

export const UseAuthRouter = () => {
  useAuthRouter();
  return null;
};
