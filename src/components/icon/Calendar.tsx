// import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCalendar = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="calendar_svg__lucide calendar_svg__lucide-calendar-icon calendar_svg__lucide-calendar"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Path d="M8 2v4M16 2v4" />
    <Rect width={18} height={18} x={3} y={4} rx={2} />
    <Path d="M3 10h18" />
  </Svg>
);
export default SvgCalendar;
