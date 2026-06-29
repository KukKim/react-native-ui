// import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMenu = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="menu_svg__lucide menu_svg__lucide-menu-icon menu_svg__lucide-menu"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Path d="M4 5h16M4 12h16M4 19h16" />
  </Svg>
);
export default SvgMenu;
