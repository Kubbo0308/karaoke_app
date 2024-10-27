"use client";

import { useState } from "react";
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PointsRangeSlider } from "@/components/molecules";
import { FormLabel } from "@/components/atoms/FormLabel/FormLabel";

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
    <Container>
      <Heading textAlign="center">対戦ビンゴ</Heading>
      <Flex
        gap={6}
        direction="column"
        justifyContent="center"
        w="100%"
        border="1px"
        borderColor="gray.200"
        borderRadius={6}
        p={4}
        mt={4}
      >
        <Flex gap={2} direction="column">
          <FormLabel label="名前" required={false} />
          <Input
            placeholder="名前を入力"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Flex>
        <Flex gap={4} direction="column">
          <FormLabel label="点数の幅" required={true} />
          <PointsRangeSlider
            value={rangeValues}
            onChange={(value) => setRangeValues(value)}
            RangeSliderProps={{ w: "80%" }}
          />
        </Flex>
        <Button onClick={() => addMember(name)} bg="blue.500" color="white">
          追加
        </Button>
      </Flex>
      <Table size="md" mt={6}>
        <Thead>
          <Tr>
            <Th w="33.33%" textAlign="center">
              <Text>名前</Text>
            </Th>
            <Th px={2}>
              <Text>点数</Text>
            </Th>
            <Th></Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {member.map((item: string, index: number) => (
            <Tr key={index}>
              <Td p={0} textAlign="center" w="33.33%" pr={2}>
                <Text fontSize="12px">{item === "" ? "名無し" : item}</Text>
              </Td>
              {memberScore[index]?.map((score: number, scoreIndex: number) => (
                <Td key={scoreIndex} px={0}>
                  <Button
                    bg={selected[index][scoreIndex] ? "blue.300" : "gray.200"}
                    onClick={() => toggleSelect(index, scoreIndex)}
                    fontSize="14px"
                    mx="auto"
                  >
                    {score}
                  </Button>
                </Td>
              ))}
              <Td pl={2} pr={0}>
                <Button
                  onClick={() => removeMember(index)}
                  bg="red.500"
                  px={2}
                  fontSize="14px"
                >
                  <Text color="white">削除</Text>
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
