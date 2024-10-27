import { MedleyHitSong } from "@/components/pages/medley/hit_song/MedleyHitSong";
import { Heading } from "@chakra-ui/react";

export default function Medley() {
  return (
    <>
      <Heading textAlign="center">ヒットソングメドレーくじ</Heading>
      <MedleyHitSong />
    </>
  );
}
