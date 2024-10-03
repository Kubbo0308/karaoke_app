"use client";

import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Match() {
  const [name, setName] = useState<string>("");
  const [member, setMember] = useState<string[]>([]);
  const addMember = (name: string) => {
    setMember([...member, name]);
    setName("");
  };
  return (
    <>
      <Heading>対戦</Heading>
      <Flex direction="column" gap="16px">
        {member.map((item: string) => (
          <Text>{item}</Text>
        ))}
      </Flex>
      <Flex gap="16px">
        <Input
          placeholder="名前を入力"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button onClick={() => addMember(name)}>追加</Button>
      </Flex>
    </>
  );
}
