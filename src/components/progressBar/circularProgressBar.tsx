import { StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { type ProgressBarProps, sizeType, strokeWidthType } from './types';
import { useTheme } from '../../hooks/useTheme';

const CircularProgressBar = ({
  type = 'primary',
  size = 'm',
  value,
  style,
  ...props
}: ProgressBarProps) => {
  const { theme } = useTheme();

  const progress = Math.min(Math.max(value, 0), 1);

  const svgSize = sizeType[size];
  const strokeWidth = strokeWidthType[size];

  const radius = (svgSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={[styles.container, style]} {...props}>
      <Svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
      >
        <Circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          stroke={theme.colors.disabled}
          strokeWidth={strokeWidth}
          fill="none"
        />

        <Circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          stroke={theme.colors[type]}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          originX={svgSize / 2}
          originY={svgSize / 2}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CircularProgressBar;
