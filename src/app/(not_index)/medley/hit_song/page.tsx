import { MedleyHitSong } from "@/components/pages/medley/hit_song/MedleyHitSong";
import { Heading } from "@chakra-ui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ヒットソングメドレー - カラオケゲームのまとめサイト",
  description:
    "ランダムで出たヒットソングメドレーを歌い切れるかチャレンジするゲームです。一人から複数人まで自由に遊べます。",
};

export default function Medley() {
  return (
    <>
      <Heading textAlign="center">ヒットソングメドレーくじ</Heading>
      <MedleyHitSong />
    </>
  );
}
