"use client";

import { Box, Button, Flex, Text, chakra } from "@chakra-ui/react";
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
    <Box mt={4}>
      <Text textAlign="center" fontSize="18px" mb={4}>
        結果：
        {result && (
          <chakra.span fontSize="24px" color="red.500">
            {result}
          </chakra.span>
        )}
      </Text>
      <Roulette roulette={roulette} />
      <Flex mt={6} justifyContent="center" gap={6}>
        <Button onClick={onStart} bg="blue.500" color="white">
          スタート
        </Button>
        <Button onClick={onStop} bg="blue.500" color="white">
          ストップ
        </Button>
      </Flex>
    </Box>
  );
};
