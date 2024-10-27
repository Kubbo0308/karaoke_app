import { Dispatch, SetStateAction, useState } from "react";

interface value {
  rangeValues: number[]
  setRangeValues: Dispatch<SetStateAction<number[]>>
  numbers: number[]
  addRandomNumbers: (min: number, max: number, num: number) => number[]
  setNumbers: Dispatch<SetStateAction<number[]>>
  selected: boolean[]
  toggleSelect: (index: number) => void
}

export const useBingoCooperation = (): value => {
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

  return { rangeValues, setRangeValues, numbers, setNumbers, addRandomNumbers, selected, toggleSelect }
}