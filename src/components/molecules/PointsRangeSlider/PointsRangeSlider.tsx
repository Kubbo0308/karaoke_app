import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderProps,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface PointsRangeSliderProps extends PropsWithChildren<RangeSliderProps> {
  value: number[];
  onChange: (value: number[]) => void;
}

export const PointsRangeSlider = (props: PointsRangeSliderProps) => {
  const { value, onChange, ...rangeSliderProps } = props;
  return (
    <RangeSlider
      // eslint-disable-next-line jsx-a11y/aria-proptypes
      aria-label={["min", "max"]}
      defaultValue={value}
      value={value}
      min={70}
      max={100}
      minStepsBetweenThumbs={3}
      step={1}
      onChange={onChange}
      display="block"
      {...rangeSliderProps}
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
