import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLoaderCircle = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={props.color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    // className="loader-circle_svg__lucide loader-circle_svg__lucide-loader-circle-icon loader-circle_svg__lucide-loader-circle"
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}
    {...props}
  >
    <Path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </Svg>
);
export default SvgLoaderCircle;
