import { MainLayout } from "@/components/layout/MainLayout";
import "@/styles/global.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "light",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>
        <MantineProvider theme={theme} withGlobalClasses>
          <ClerkProvider>
            <MainLayout>{children}</MainLayout>
          </ClerkProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
