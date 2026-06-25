import React, { type ReactElement, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { CommonIcon } from '../icon';
import { CommonText } from '../text';
import { type CommonSelectItemProps, type CommonSelectProps } from './types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const SelectItem = (_props: CommonSelectItemProps) => {
  return null;
};
export const CommonSelect = ({
  children,
  placeholder = 'Select',
  value,
  // defaultValue,
  onChange,
  style,
}: CommonSelectProps) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(
    // defaultValue
    ''
  );

  const selectedValue = value ?? internalValue;

  const items = React.Children.toArray(children).filter(
    React.isValidElement
  ) as ReactElement<CommonSelectItemProps>[];

  const selectedItem = items.find((item) => item.props.value === selectedValue);

  const handleSelect = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
    setOpen(false);
  };

  const rotate = useSharedValue(0);
  const arrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={[
          styles.trigger,
          {
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.background,
          },
        ]}
        onPress={() => {
          const nextOpen = !open;

          rotate.value = withTiming(nextOpen ? 180 : 0, {
            duration: 200,
          });

          setOpen(nextOpen);
        }}
      >
        <CommonText
          size="m"
          style={[!selectedItem && { color: theme.colors.disabled }]}
        >
          {selectedItem?.props.label ?? placeholder}
        </CommonText>
        <Animated.View style={arrowAnimatedStyle}>
          <CommonIcon iconType="down" />
        </Animated.View>
      </Pressable>

      {open && (
        <View
          style={[
            {
              borderColor: theme.colors.border,
              backgroundColor: theme.colors.background,
            },
            styles.dropdown,
          ]}
        >
          {items.map((item) => {
            const isSelected = item.props.value === selectedValue;

            return (
              <Pressable
                key={String(item.props.value)}
                style={[styles.option, isSelected && styles.selectedOption]}
                onPress={() => handleSelect(item.props.value)}
              >
                <CommonText
                  style={[
                    styles.optionText,
                    isSelected && styles.selectedOptionText,
                  ]}
                >
                  {item.props.label}
                </CommonText>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    zIndex: 999,
  },
  trigger: {
    minHeight: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrow: {
    fontSize: 12,
    color: '#667085',
  },
  dropdown: {
    position: 'absolute',
    top: 46,
    left: 0,
    right: 0,

    borderWidth: 1,
    borderRadius: 8,
    zIndex: 999,
    elevation: 10,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  selectedOption: {
    backgroundColor: '#F2F4F7',
  },
  optionText: {
    fontSize: 14,
    color: '#101828',
  },
  selectedOptionText: {
    fontWeight: '600',
  },
});
