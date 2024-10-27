import { RouletteItem, useRoulette } from "react-hook-roulette"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RouletteCanvas = /*unresolved*/ any

interface useRouletteJohnnysProps {
  rouletteItems: RouletteItem[]
}

interface value {
  roulette: RouletteCanvas
  onStart: () => void
  onStop: () => void
  result: string
}

export const useRouletteJohnnys = (props: useRouletteJohnnysProps): value => {
  const { rouletteItems } = props
  const { roulette, onStart, onStop, result } = useRoulette({
    items: rouletteItems,
  });

  return { roulette, onStart, onStop, result }
}