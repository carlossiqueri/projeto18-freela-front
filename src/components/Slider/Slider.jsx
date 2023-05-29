// import {
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   SliderMark,
//   Tooltip,
// } from "@chakra-ui/react";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Tooltip,
} from "@chakra-ui/react";

export default function SliderThumbWithTooltip({ setValor }) {
  return (
    <RangeSlider
      aria-label={["min", "max"]}
      min={0}
      max={10000}
      defaultValue={[1000, 5000]}
      onChangeEnd={(val) => setValor(val)}
      top={0}
      left={0}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
}

// export default function SliderThumbWithTooltip() {
//   const [sliderValue, setSliderValue] = useState(500);
//   const [showTooltip, setShowTooltip] = useState(false);
//   return (
//     <Slider
//       id="slider"
//       defaultValue={500}
//       min={0}
//       max={10000}
//       colorScheme="teal"
//       onChange={(v) => setSliderValue(v)}
//       onMouseEnter={() => setShowTooltip(true)}
//       onMouseLeave={() => setShowTooltip(false)}
//       width={"500px"}
//       height={'90px'}
//       position={'absolute'}
//       top={400}
//       left={200}
//     >
//       <SliderMark value={500} mt="1" ml="-2.5" fontSize="sm">
//         500
//       </SliderMark>
//       <SliderMark value={3000} mt="1" ml="-2.5" fontSize="sm">
//         3000
//       </SliderMark>
//       <SliderMark value={7000} mt="1" ml="-2.5" fontSize="sm">
//         7000
//       </SliderMark>
//       <SliderTrack height={"20px"} borderRadius={"50px"}>
//         <SliderFilledTrack />
//       </SliderTrack>
//       <Tooltip
//         hasArrow
//         bg="teal.500"
//         color="white"
//         placement="top"
//         isOpen={showTooltip}
//         label={`${sliderValue}`}
//       >
//         <SliderThumb />
//       </Tooltip>
//     </Slider>
//   );
// }
