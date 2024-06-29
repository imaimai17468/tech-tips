import { Button } from "@mantine/core";

type Props = {
  children: string;
  href: string;
};

export const RouteButton: React.FC<Props> = ({ children, href }) => {
  return (
    <Button variant="subtle" style={{ borderRadius: 0, borderBottom: "2px solid" }} component="a" href={href}>
      {children}
    </Button>
  );
};
