import { MainLayout } from "@/components/layout/MainLayout";
import { AuthProvider } from "@/context/auth";
import "@/styles/global.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Tips",
  description: "ためになる技術置き場",
};

const theme = createTheme({
  fontFamily: "Roboto, Raleway, Sawarabi Gothic, sans-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <AuthProvider>
          <MantineProvider theme={theme} withGlobalClasses>
            <MainLayout>{children}</MainLayout>
          </MantineProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
