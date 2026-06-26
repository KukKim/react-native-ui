import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { type ProgressBarProps, sizeType, strokeWidthType } from './types';
import { useTheme } from '../../hooks/useTheme';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

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

  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, {
      duration: 500,
    });
  }, [progress, animatedProgress]);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: circumference * (1 - animatedProgress.value),
    };
  });

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

        <AnimatedCircle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          stroke={theme.colors[type]}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
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
