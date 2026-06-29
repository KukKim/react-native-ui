// import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEllipsis = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="ellipsis_svg__lucide ellipsis_svg__lucide-ellipsis-icon ellipsis_svg__lucide-ellipsis"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Circle cx={12} cy={12} r={1} />
    <Circle cx={19} cy={12} r={1} />
    <Circle cx={5} cy={12} r={1} />
  </Svg>
);
export default SvgEllipsis;
