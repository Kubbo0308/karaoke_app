import { Metadata } from "next";
import { Container, Heading } from "@chakra-ui/react";
import { BingoCooperation } from "@/components/pages/bingo/cooperation/BingoCooperation";

export const metadata: Metadata = {
  title: "協力ビンゴ - カラオケゲームのまとめサイト",
  description:
    "複数人で協力してビンゴを揃えるゲームです。マスと同じ点数を出せればそのマスを開けられます。",
};

export default function Cooperation() {
  return (
    <Container>
      <Heading textAlign="center">協力ビンゴ</Heading>
      <BingoCooperation />
    </Container>
  );
}
