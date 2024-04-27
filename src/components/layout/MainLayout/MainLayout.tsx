import { Footer } from "@/components/parts/Footer";
import { Header } from "@/components/parts/Header";
import { Box } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box bg="gray.1" mih="100vh">
      <Header />
      <Box maw={1120} mx="auto">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
