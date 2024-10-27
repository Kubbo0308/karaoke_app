"use client";

import { Button, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Medley() {
  const [age, setAge] = useState<number>();
  const [sex, setSex] = useState<string>();

  const getRandomYear = () => {
    setAge(Math.floor(Math.random() * (2023 - 1980 + 1)) + 1980);
  };

  const getRandomGender = () => {
    const genders = ["男性", "女性"];
    setSex(genders[Math.floor(Math.random() * genders.length)]);
  };
  return (
    <>
      <Heading textAlign="center">
        ヒットソング
        <br />
        メドレーチャレンジ
      </Heading>
      <Flex gap="16px" justifyContent="center" mt={4}>
        <Text fontSize="20px">
          <chakra.span fontSize="28px" fontWeight={800} color="tomato">
            {age}
          </chakra.span>{" "}
          年の{" "}
          <chakra.span fontSize="28px" fontWeight={800} color="tomato">
            {sex}
          </chakra.span>{" "}
          曲！
        </Text>
      </Flex>
      <Flex gap="16px" justifyContent="center" mt={4}>
        <Button onClick={getRandomYear}>年代</Button>
        <Button onClick={getRandomGender}>性別</Button>
      </Flex>
    </>
  );
}
