// import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDownload = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="download_svg__lucide download_svg__lucide-download-icon download_svg__lucide-download"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Path d="M12 15V3M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <Path d="m7 10 5 5 5-5" />
  </Svg>
);
export default SvgDownload;
