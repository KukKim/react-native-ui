// import * as React from 'react';
import Svg, { Rect, Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgImage = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="image_svg__lucide image_svg__lucide-image-icon image_svg__lucide-image"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <Circle cx={9} cy={9} r={2} />
    <Path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </Svg>
);
export default SvgImage;
