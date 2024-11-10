import { Metadata } from "next";
import { Container, Heading } from "@chakra-ui/react";
import { BingoMatch } from "@/components/pages/bingo/match/BingoMatch";

export const metadata: Metadata = {
  title: "対戦ビンゴ - カラオケゲームのまとめサイト",
  description:
    "複数人で対戦してビンゴを揃えるゲームです。マスと同じ点数を出せればそのマスを開けられます。",
};

export default function Match() {
  return (
    <Container>
      <Heading textAlign="center">対戦ビンゴ</Heading>
      <BingoMatch />
    </Container>
  );
}
