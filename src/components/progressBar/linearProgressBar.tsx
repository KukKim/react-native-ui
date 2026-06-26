import { useState } from 'react';
import { StyleSheet, View, type LayoutChangeEvent } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { type ProgressBarProps } from './types';
import { useTheme } from '../../hooks/useTheme';

const LinearProgressBar = ({
  type = 'primary',
  value,
  style,
  ...props
}: ProgressBarProps) => {
  const { theme } = useTheme();
  const progress = Math.min(Math.max(value, 0), 1);

  const [containerWidth, setContainerWidth] = useState(0);

  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(containerWidth * progress, {
      duration: 1000,
    }),
  }));

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.disabled,
        },
        style,
      ]}
      onLayout={onLayout}
      {...props}
    >
      {containerWidth > 0 && (
        <Animated.View
          style={[
            styles.progress,
            {
              width: containerWidth,
              backgroundColor: theme.colors[type],
            },
            animatedStyle,
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 999,
  },
});

export default LinearProgressBar;
