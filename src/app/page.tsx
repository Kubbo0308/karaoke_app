import { Header } from "@/components/molecules/Header/Header";
import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export default function Home() {
  return (
    <Container>
      <Header />
      <Heading>カラオケゲーム一覧</Heading>
      <Flex direction="column" gap="16px">
        <Link as={NextLink} href="/bingo/cooperation">
          ビンゴゲーム（協力）
        </Link>
        <Link as={NextLink} href="/bingo/match">
          ビンゴゲーム（対戦）
        </Link>
        <Link as={NextLink} href="/medley">
          メドレー歌えるかチャレンジ
        </Link>
      </Flex>
    </Container>
  );
}
