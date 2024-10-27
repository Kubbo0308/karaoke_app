"use client";

import { Button, Text } from "@chakra-ui/react";
import { Roulette, RouletteItem } from "react-hook-roulette";
import { useRouletteJohnnys } from "./RouletteJohnnys.hooks";

interface RouteletteJohnnysProps {
  rouletteItems: RouletteItem[];
}

export const RouletteJohnnys = (props: RouteletteJohnnysProps) => {
  const { rouletteItems } = props;
  const { roulette, onStart, onStop, result } = useRouletteJohnnys({
    rouletteItems,
  });
  return (
    <>
      <Roulette roulette={roulette} />
      <Button onClick={onStart}>スタート</Button>
      <Button onClick={onStop}>ストップ</Button>
      {result && <Text>結果： {result}</Text>}
    </>
  );
};
