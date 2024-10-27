"use client";

import { Button, Flex, Text, chakra } from "@chakra-ui/react";
import { useMedleyHitSong } from "./MedleyHitSong.hooks";

export const MedleyHitSong = () => {
  const { age, sex, getRandomValue } = useMedleyHitSong();
  return (
    <>
      <Flex gap="16px" justifyContent="center" mt={4}>
        <Text fontSize="20px">
          <chakra.span fontSize="28px" fontWeight={800} color="tomato">
            {typeof age === "undefined" ? "???" : age}
          </chakra.span>{" "}
          年の{" "}
          <chakra.span fontSize="28px" fontWeight={800} color="tomato">
            {typeof sex === "undefined" ? "???" : sex}
          </chakra.span>{" "}
          曲！
        </Text>
      </Flex>
      <Flex gap="16px" justifyContent="center" mt={4}>
        <Button onClick={getRandomValue} bg="blue.500" color="white">
          くじ引きスタート
        </Button>
      </Flex>
    </>
  );
};
