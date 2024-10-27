import { BingoCooperation } from "@/components/pages/bingo/cooperation/BingoCooperation";
import { Container, Heading } from "@chakra-ui/react";

export default function Cooperation() {
  return (
    <Container>
      <Heading textAlign="center">協力ビンゴ</Heading>
      <BingoCooperation />
    </Container>
  );
}
