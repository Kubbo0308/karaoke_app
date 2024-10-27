"use client";

import { ARTISTS } from "@/const";
import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { Roulette, RouletteItem, useRoulette } from "react-hook-roulette";

export default function Johnnys() {
  const rouletteItems: RouletteItem[] = ARTISTS.JOHNNYS.map((item) => ({
    name: item,
  }));
  const { roulette, onStart, onStop, result } = useRoulette({
    items: rouletteItems,
  });
  return (
    <Container>
      <Heading textAlign="center">ジャニーズルーレット</Heading>
      <Roulette roulette={roulette} />
      <Button onClick={onStart}>スタート</Button>
      <Button onClick={onStop}>ストップ</Button>
      {result && <Text>結果： {result}</Text>}
    </Container>
  );
}
