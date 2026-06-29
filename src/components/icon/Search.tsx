// import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSearch = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="search_svg__lucide search_svg__lucide-search-icon search_svg__lucide-search"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Path d="m21 21-4.34-4.34" />
    <Circle cx={11} cy={11} r={8} />
  </Svg>
);
export default SvgSearch;
