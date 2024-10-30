"use client";

import {
  Button,
  Flex,
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
import { useBingoMatch } from "./BingoMatch.hooks";

export const BingoMatch = () => {
  const {
    name,
    setName,
    member,
    rangeValues,
    setRangeValues,
    memberScore,
    selected,
    toggleSelect,
    addMember,
    removeMember,
  } = useBingoMatch();
  return (
    <>
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
            w="80%"
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
                    _hover={{
                      bg: selected[index][scoreIndex] ? "blue.300" : "gray.200",
                      opacity: 0.5,
                    }}
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
    </>
  );
};
