"use client";

import { Button, Flex, Text, chakra } from "@chakra-ui/react";
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
    <Flex mt={4} direction="column" gap={6} justifyContent="center">
      <Text textAlign="center" fontSize="18px">
        結果：
        {result && (
          <chakra.span fontSize="24px" color="red.500">
            {result}
          </chakra.span>
        )}
      </Text>
      <Roulette roulette={roulette} />
      <Flex justifyContent="center" gap={6}>
        <Button onClick={onStart} bg="blue.500" color="white">
          スタート
        </Button>
        <Button onClick={onStop} bg="blue.500" color="white">
          ストップ
        </Button>
      </Flex>
    </Flex>
  );
};
