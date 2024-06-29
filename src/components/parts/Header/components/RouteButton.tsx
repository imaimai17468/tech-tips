import { Button } from "@mantine/core";
import Link from "next/link";

type Props = {
  children: string;
  href: string;
};

export const RouteButton: React.FC<Props> = ({ children, href }) => {
  return (
    <Button variant="subtle" style={{ borderRadius: 0, borderBottom: "2px solid" }} component={Link} href={href}>
      {children}
    </Button>
  );
};
