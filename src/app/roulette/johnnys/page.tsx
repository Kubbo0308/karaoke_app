import { RouletteJohnnys } from "@/components/pages/roulette/johnnys/RouletteJohnnys";
import { ARTISTS } from "@/const";
import { Container, Heading } from "@chakra-ui/react";
import { RouletteItem } from "react-hook-roulette";

export default function Johnnys() {
  const rouletteItems: RouletteItem[] = ARTISTS.JOHNNYS.map((item) => ({
    name: item,
  }));
  return (
    <Container>
      <Heading textAlign="center">ジャニーズルーレット</Heading>
      <RouletteJohnnys rouletteItems={rouletteItems} />
    </Container>
  );
}
