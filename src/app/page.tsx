import { Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Text>カラオケゲーム一覧</Text>
      <Link as={NextLink} href="/bingo/cooperation">
        ビンゴゲーム（協力）
      </Link>
      <Link as={NextLink} href="/bingo/match">
        ビンゴゲーム対戦
      </Link>
      <Link as={NextLink} href="/medley">
        メドレー歌えるかチャレンジ
      </Link>
    </>
  );
}
