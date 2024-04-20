import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Tips",
  description: "ためになる技術置き場",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
