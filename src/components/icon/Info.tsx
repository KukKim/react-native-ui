// import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgInfo = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="info_svg__lucide info_svg__lucide-info-icon info_svg__lucide-info"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Circle cx={12} cy={12} r={10} />
    <Path d="M12 16v-4M12 8h.01" />
  </Svg>
);
export default SvgInfo;
