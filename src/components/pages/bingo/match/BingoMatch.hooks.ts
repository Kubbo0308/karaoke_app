import { Dispatch, SetStateAction, useState } from "react";

interface value {
  name: string
  setName: Dispatch<SetStateAction<string>>
  member: string[]
  rangeValues: number[]
  setRangeValues: Dispatch<SetStateAction<number[]>>
  memberScore: number[][]
  selected: boolean[][]
  toggleSelect: (parentIndex: number, childIndex: number) => void
  addMember: (name: string) => void
  removeMember: (index: number) => void

}

export const useBingoMatch = (): value => {
  const [name, setName] = useState<string>("");
  const [member, setMember] = useState<string[]>([]);
  const [rangeValues, setRangeValues] = useState<number[]>([80, 100]);
  const [memberScore, setMemberScore] = useState<number[][]>([]);
  const [selected, setSelected] = useState<boolean[][]>([]);

  const scoreNum = 3;

  const addRandomNumbers = (
    min: number,
    max: number,
    num: number
  ): number[] => {
    const range = Array.from(
      { length: max - min + 1 },
      (_, index) => index + min
    );
    const randomScores: number[] = [];
    for (let i = 0; i < num; i++) {
      if (range.length === 0) {
        break;
      }
      const randomIndex = Math.floor(Math.random() * range.length);
      randomScores.push(range[randomIndex]);
      range.splice(randomIndex, 1);
    }
    return randomScores;
  };

  const toggleSelect = (parentIndex: number, childIndex: number) => {
    // 選択状態をトグルする
    console.log(selected);
    setSelected((prev) => {
      const newSelected = [...prev];
      if (!newSelected[parentIndex]) return prev; // 安全チェック
      // 内側の配列もコピーする必要がある
      const updatedRow = [...newSelected[parentIndex]];
      updatedRow[childIndex] = !updatedRow[childIndex];
      newSelected[parentIndex] = updatedRow;
      return newSelected;
    });
  };

  const addMember = (name: string) => {
    const random = addRandomNumbers(rangeValues[0], rangeValues[1], scoreNum);
    setMember([...member, name]);
    setMemberScore((prev) => [...prev, random]);
    setSelected((prev) => [...prev, Array(scoreNum).fill(false)]);
    setName("");
  };

  const removeMember = (index: number) => {
    setMember((prev) => prev.filter((_, memberIndex) => memberIndex !== index));
    setMemberScore((prev) =>
      prev.filter((_, scoreIndex) => scoreIndex !== index)
    );
  };

  return { name, setName, member, rangeValues,setRangeValues, memberScore, selected, toggleSelect, addMember, removeMember }
}