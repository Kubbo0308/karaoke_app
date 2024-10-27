import { useState } from "react";

interface value {
  age: number | undefined
  sex: string | undefined
  getRandomValue: () => void
}

export const useMedleyHitSong = (): value => {
  const [age, setAge] = useState<number>();
  const [sex, setSex] = useState<string>();

  const getRandomValue = () => {
    const genders = ["男性", "女性"];
    setSex(genders[Math.floor(Math.random() * genders.length)]);
    setAge(Math.floor(Math.random() * (2023 - 1980 + 1)) + 1980);
  };

  return { age, sex, getRandomValue }
}