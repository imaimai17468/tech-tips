import { Aurora } from "@/components/parts/Aurora";
import { Footer } from "@/components/parts/Footer";
import { Header } from "@/components/parts/Header";
import { Box } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Aurora />
      <Box mih="100vh">
        <Header />
        <Box maw={1120} mx="auto" p={{ base: 16, xs: 32 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};
