import { View, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { CommonText } from '../text';
import { type SliderProps } from './types';
import { useTheme } from '../../hooks/useTheme';

// TODO: Thumb가 범위 바깥으로 넘어가는 것 수정 필요.
export const CommonSlider = ({ labels = [] }: SliderProps) => {
  const { theme } = useTheme();
  const position = useSharedValue(0);
  const startPosition = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      startPosition.value = position.value;
    })
    .onUpdate((event) => {
      const nextValue = startPosition.value + event.translationX;
      if (nextValue < 0) {
        position.value = 0;
      } else {
        position.value = nextValue;
      }
    });
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));
  const activeTrackStyle = useAnimatedStyle(() => ({
    width: position.value + 15,
  }));

  return (
    <View style={styles.container}>
      <View
        style={[styles.sliderBar, { backgroundColor: theme.colors.secondary }]}
      >
        <Animated.View
          style={[
            {
              backgroundColor: theme.colors.primary,
            },
            styles.filledSliderBar,
            activeTrackStyle,
          ]}
        />
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[
              animatedStyle,
              {
                backgroundColor: theme.colors.text,
              },
              styles.thumb,
            ]}
          />
        </GestureDetector>
      </View>

      <View style={styles.labelBar}>
        {labels.map((label, index) => {
          const percent = labels.length === 1 ? 0 : index / (labels.length - 1);
          return (
            <CommonText
              size="s"
              key={`${label}-${index}`}
              style={[
                styles.labelText,
                {
                  color: theme.colors.text,
                  left: `${percent * 100}%`,
                },
              ]}
            >
              {label}
            </CommonText>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  sliderBar: {
    width: '100%',
    height: 10,
  },
  filledSliderBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 10,
    borderRadius: 5,
  },
  labelBar: {
    position: 'relative',
    height: 24,
    marginTop: 12,
  },
  labelText: {
    position: 'absolute',
    transform: [{ translateX: -8 }],
  },
  thumb: {
    bottom: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
