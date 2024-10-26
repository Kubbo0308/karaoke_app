import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "@/components/molecules";

export const metadata: Metadata = {
  title: "カラオケゲームまとめ",
  description: "カラオケで出来るさまざまなゲームを用意してます。",
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
