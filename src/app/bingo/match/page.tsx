"use client";

import { PointsRangeSlider } from "@/components/molecules/PointsRangeSlider/PointsRangeSlider";
import { Button, Flex, Heading, Input, Table, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Match() {
  const [name, setName] = useState<string>("");
  const [member, setMember] = useState<string[]>([]);
  const [rangeValues, setRangeValues] = useState<number[]>([80, 100]);
  const [memberScore, setMemberScore] = useState<number[][]>([]);
  const [selected, setSelected] = useState<boolean[][]>([]);

  const scoreNum = 3;

  const addRandomNumbers = (
    min: number,
    max: number,
    num: number
  ): number[] => {
    const range = Array.from(
      { length: max - min + 1 },
      (_, index) => index + min
    );
    const randomScores: number[] = [];
    for (let i = 0; i < num; i++) {
      if (range.length === 0) {
        break;
      }
      const randomIndex = Math.floor(Math.random() * range.length);
      randomScores.push(range[randomIndex]);
      range.splice(randomIndex, 1);
    }
    return randomScores;
  };

  const toggleSelect = (parentIndex: number, childIndex: number) => {
    // 選択状態をトグルする
    console.log(selected);
    setSelected((prev) => {
      const newSelected = [...prev];
      if (!newSelected[parentIndex]) return prev; // 安全チェック
      // 内側の配列もコピーする必要がある
      const updatedRow = [...newSelected[parentIndex]];
      updatedRow[childIndex] = !updatedRow[childIndex];
      newSelected[parentIndex] = updatedRow;
      return newSelected;
    });
  };

  const addMember = (name: string) => {
    const random = addRandomNumbers(rangeValues[0], rangeValues[1], scoreNum);
    setMember([...member, name]);
    setMemberScore((prev) => [...prev, random]);
    setSelected((prev) => [...prev, Array(scoreNum).fill(false)]);
    setName("");
  };

  const removeMember = (index: number) => {
    setMember((prev) => prev.filter((_, memberIndex) => memberIndex !== index));
    setMemberScore((prev) =>
      prev.filter((_, scoreIndex) => scoreIndex !== index)
    );
  };
  return (
    <>
      <Heading>対戦</Heading>
      <Flex gap="16px" direction="column">
        <Text>名前</Text>
        <Input
          placeholder="名前を入力"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Text>点数の幅</Text>
        <PointsRangeSlider
          value={rangeValues}
          onChange={(value) => setRangeValues(value)}
        />
        <Button onClick={() => addMember(name)}>追加</Button>
      </Flex>
      <Table.Root size="md">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>名前</Table.ColumnHeader>
            {[...Array(scoreNum)].map((_, index) => (
              <Table.ColumnHeader key={index}>{index}個目</Table.ColumnHeader>
            ))}
            <Table.ColumnHeader></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {member.map((item: string, index: number) => (
            <Table.Row key={index}>
              <Table.Cell>{item}</Table.Cell>
              {memberScore[index]?.map((score: number, scoreIndex: number) => (
                <Table.Cell key={scoreIndex}>
                  <Button
                    bg={selected[index][scoreIndex] ? "blue.300" : "gray.200"}
                    onClick={() => toggleSelect(index, scoreIndex)}
                  >
                    {score}
                  </Button>
                </Table.Cell>
              ))}
              <Table.Cell>
                <Button onClick={() => removeMember(index)}>削除</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
