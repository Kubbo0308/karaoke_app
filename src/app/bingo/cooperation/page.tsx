"use client";

import { useState } from "react";
import { Box, Button, Container, Grid, Heading, Text } from "@chakra-ui/react";
import { PointsRangeSlider } from "@/components/molecules";
import { FormLabel } from "@/components/atoms/FormLabel/FormLabel";

export default function Cooperation() {
  const [rangeValues, setRangeValues] = useState<number[]>([80, 100]);
  const [numbers, setNumbers] = useState<number[]>(Array(16).fill(0));
  const [selected, setSelected] = useState<boolean[]>(Array(16).fill(false));

  const toggleSelect = (index: number) => {
    // 選択状態をトグルする
    setSelected((prev) => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };

  const addRandomNumbers = (
    min: number,
    max: number,
    num: number
  ): number[] => {
    const fullRange = Array.from(
      { length: max - min + 1 },
      (_, index) => index + min
    );
    let range = [...fullRange];
    const randomScores: number[] = [];
    for (let i = 0; i < num; i++) {
      if (range.length === 0) {
        range = [...fullRange];
      }
      const randomIndex = Math.floor(Math.random() * range.length);
      randomScores.push(range[randomIndex]);
      range.splice(randomIndex, 1);
    }
    return randomScores;
  };
  return (
    <Container>
      <Heading textAlign="center">協力</Heading>
      <Box border="1px" borderColor="gray.200" borderRadius={6} p={4} mt={4}>
        <FormLabel label="点数の幅" required={true} />
        <PointsRangeSlider
          value={rangeValues}
          onChange={(value) => setRangeValues(value)}
          RangeSliderProps={{ w: "80%", mt: 4 }}
        />
        <Button
          onClick={() =>
            setNumbers(addRandomNumbers(rangeValues[0], rangeValues[1], 16))
          }
          bg="blue.500"
          mt={6}
        >
          <Text color="white">追加</Text>
        </Button>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={2} p={4} mt={10}>
        {numbers.map((number, index) => (
          <Box
            key={index}
            onClick={() => toggleSelect(index)}
            bg={selected[index] ? "blue.300" : "gray.200"}
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="60px"
            borderRadius="md"
            fontSize="xl"
            fontWeight="bold"
            transition="background-color 0.2s"
            mx={0}
          >
            <Text>{number === 0 ? "?" : number}</Text>
          </Box>
        ))}
      </Grid>
    </Container>
  );
}
