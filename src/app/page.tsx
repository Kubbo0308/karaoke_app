import { PAGE_INFO } from "@/const";
import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container>
      <Heading>カラオケゲーム一覧</Heading>
      <Flex direction="column" gap="16px" mt={4}>
        <Link as={NextLink} href={PAGE_INFO.COOPERATION.path}>
          ビンゴゲーム（協力）
        </Link>
        <Link as={NextLink} href={PAGE_INFO.MATCH.path}>
          ビンゴゲーム（対戦）
        </Link>
        <Link as={NextLink} href={PAGE_INFO.MEDLEY.path}>
          ヒットソングメドレーチャレンジ
        </Link>
      </Flex>
    </Container>
  );
}
