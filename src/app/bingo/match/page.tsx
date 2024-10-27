import { Container, Heading } from "@chakra-ui/react";
import { BingoMatch } from "@/components/pages/bingo/match/BingoMatch";

export default function Match() {
  return (
    <Container>
      <Heading textAlign="center">対戦ビンゴ</Heading>
      <BingoMatch />
    </Container>
  );
}
