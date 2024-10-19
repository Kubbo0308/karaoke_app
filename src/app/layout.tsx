import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";

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
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
