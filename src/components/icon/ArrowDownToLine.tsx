// import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgArrowDownToLine = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="arrow-down-to-line_svg__lucide arrow-down-to-line_svg__lucide-arrow-down-to-line-icon arrow-down-to-line_svg__lucide-arrow-down-to-line"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Path d="M12 17V3M6 11l6 6 6-6M19 21H5" />
  </Svg>
);
export default SvgArrowDownToLine;
