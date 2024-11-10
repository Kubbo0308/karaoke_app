import { Metadata } from "next";
import { Container, Heading } from "@chakra-ui/react";
import { RouletteItem } from "react-hook-roulette";
import { ARTISTS } from "@/const";
import { RouletteJohnnys } from "@/components/pages/roulette/johnnys/RouletteJohnnys";

export const metadata: Metadata = {
  title: "ジャニーズルーレット - カラオケゲームのまとめサイト",
  description:
    "ランダムで出たジャニーズの曲を歌うゲームです。点数を競って戦うこともできます。",
};

export default function Johnnys() {
  const rouletteItems: RouletteItem[] = ARTISTS.JOHNNYS.map((item, index) => ({
    name: item,
    bg: index % 2 === 0 ? "#3182ce" : "#ebf8ff",
    color: index % 2 === 0 ? "#ffffff" : "#000000",
  }));
  return (
    <Container>
      <Heading textAlign="center">ジャニーズルーレット</Heading>
      <RouletteJohnnys rouletteItems={rouletteItems} />
    </Container>
  );
}
