import { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { type SwitchProps, sizeType } from './types';
import { useTheme } from '../../hooks/useTheme';

//TODO: react-native-reanimated로 수정필요
export default function CommonSwitch({
  type = 'primary',
  size = 'm',
  value,
  onChange,
  disabled = false,
  ...props
}: SwitchProps) {
  const { theme } = useTheme();

  const animValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  const sizeValue = sizeType[size];
  const containerWidth = (sizeValue + 2) * 2;
  const thumbSize = sizeValue;
  const translateX = containerWidth - thumbSize - 2;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: value ? translateX : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value, translateX, animValue]);

  const toggleValue = () => {
    if (disabled) return;
    onChange?.(!value);
  };

  return (
    <Pressable
      style={[
        styles.container,
        {
          width: containerWidth,
          height: sizeValue + 2,
          borderRadius: sizeValue / 2 + 1,
          borderColor: disabled ? theme.colors.disabled : theme.colors.border,
        },
        disabled && styles.disabled,
      ]}
      onPress={toggleValue}
      disabled={disabled}
      {...props}
    >
      <Animated.View
        style={[
          {
            width: thumbSize,
            height: thumbSize,
            borderRadius: thumbSize / 2,
            backgroundColor: value ? theme.colors[type] : theme.colors.disabled,
            transform: [{ translateX: animValue }],
          },
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
    justifyContent: 'center',
    borderWidth: 1,
  },
  disabled: {
    opacity: 0.5,
  },
});
