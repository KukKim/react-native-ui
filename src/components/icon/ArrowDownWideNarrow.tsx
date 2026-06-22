// import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgArrowDownWideNarrow = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="arrow-down-wide-narrow_svg__lucide arrow-down-wide-narrow_svg__lucide-arrow-down-wide-narrow-icon arrow-down-wide-narrow_svg__lucide-arrow-down-wide-narrow"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Path d="m3 16 4 4 4-4M7 20V4M11 4h10M11 8h7M11 12h4" />
  </Svg>
);
export default SvgArrowDownWideNarrow;
