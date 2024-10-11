import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";

interface PointsRangeSliderProps {
  value: number[];
  onChange: (value: number[]) => void;
}

export const PointsRangeSlider = (props: PointsRangeSliderProps) => {
  const { value, onChange } = props;
  return (
    <RangeSlider
      aria-label={["min", "max"]}
      value={value}
      min={60}
      max={100}
      step={1}
      // onChange={(val) => setRangeValues(val)}
      onChange={onChange}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} boxSize={8} m={0}>
        <Text fontSize="16px" fontWeight={800}>
          {value[0]}
        </Text>
      </RangeSliderThumb>
      <RangeSliderThumb index={1} boxSize={8} m={0}>
        <Text fontSize="16px" fontWeight={800}>
          {value[1]}
        </Text>
      </RangeSliderThumb>
    </RangeSlider>
  );
};
