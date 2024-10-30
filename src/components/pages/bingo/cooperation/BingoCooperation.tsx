"use client";

import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { PointsRangeSlider } from "@/components/molecules";
import { FormLabel } from "@/components/atoms/FormLabel/FormLabel";
import { useBingoCooperation } from "./BingoCooperation.hooks";

export const BingoCooperation = () => {
  const {
    rangeValues,
    setRangeValues,
    numbers,
    setNumbers,
    addRandomNumbers,
    selected,
    toggleSelect,
  } = useBingoCooperation();
  return (
    <>
      <Box border="1px" borderColor="gray.200" borderRadius={6} p={4} mt={4}>
        <FormLabel label="点数の幅" required={true} />
        <PointsRangeSlider
          value={rangeValues}
          onChange={(value) => setRangeValues(value)}
          w="80%"
          mt={4}
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
          <Button
            key={index}
            onClick={() => toggleSelect(index)}
            bg={selected[index] ? "blue.300" : "gray.200"}
            _hover={{
              bg: selected[index] ? "blue.300" : "gray.200",
              opacity: 0.5,
            }}
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
          </Button>
        ))}
      </Grid>
    </>
  );
};
