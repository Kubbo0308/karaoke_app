import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "@/components/molecules";

export const metadata: Metadata = {
  title: "カラオケゲームのまとめサイト",
  description:
    "カラオケで出来るさまざまなゲーム用のツールを用意してます。一人から大人数まで対応してます。",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ChakraProvider>
          <Header />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
