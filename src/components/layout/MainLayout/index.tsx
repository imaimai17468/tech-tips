import { Footer } from "@/components/parts/Footer";
import { Header } from "@/components/parts/Header";
import { Box } from "@mantine/core";
import { Aurora } from "../parts/Aurora";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Aurora />
      <Box mih="100vh">
        <Header />
        <Box maw={1120} mx="auto" p={32}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};
