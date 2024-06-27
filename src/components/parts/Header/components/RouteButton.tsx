"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

type Props = {
  children: string;
  href: string;
};

export const RouteButton: React.FC<Props> = ({ children, href }) => {
  const router = useRouter();

  return (
    <Button variant="subtle" style={{ borderRadius: 0, borderBottom: "2px solid" }} onClick={() => router.push(href)}>
      {children}
    </Button>
  );
};
