// import * as React from 'react';
import Svg, { Defs, ClipPath, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgStarHalf = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Defs>
      <ClipPath id="star-half_svg__a">
        <Path d="M0 0h12v24H0z" />
      </ClipPath>
    </Defs>
    <Path
      fill={props.color}
      d="m12 2.5 2.93 5.94 6.56.96-4.75 4.63 1.12 6.53L12 17.5l-5.86 3.06 1.12-6.53L2.51 9.4l6.56-.96z"
      clipPath="url(#star-half_svg__a)"
    />
    <Path
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 2.5 2.93 5.94 6.56.96-4.75 4.63 1.12 6.53L12 17.5l-5.86 3.06 1.12-6.53L2.51 9.4l6.56-.96z"
    />
  </Svg>
);
export default SvgStarHalf;
