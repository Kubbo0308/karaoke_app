import { Slider } from "@/components/ui/slider";
import { Text } from "@chakra-ui/react";

interface PointsRangeSliderProps {
  value: number[];
  onChange: (value: number[]) => void;
}

export const PointsRangeSlider = (props: PointsRangeSliderProps) => {
  const { value, onChange } = props;
  return (
    <Slider
      defaultValue={value}
      value={value}
      min={70}
      max={100}
      minStepsBetweenThumbs={3}
      onValueChange={(e) => onChange(e.value)}
    />
  );
};
