"use client";

import { Button, Flex, Heading, Text } from "@chakra-ui/react";
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
      <Heading>メドレー</Heading>
      <Flex gap="16px">
        <Text>{age}</Text>
        <Text>{sex}</Text>
      </Flex>
      <Flex gap="16px">
        <Button onClick={getRandomYear}>年代</Button>
        <Button onClick={getRandomGender}>性別</Button>
      </Flex>
    </>
  );
}
