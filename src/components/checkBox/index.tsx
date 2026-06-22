import { Pressable, StyleSheet } from 'react-native';
import { type CheckBoxProps, sizeType } from './types';
import { useTheme } from '../../hooks/useTheme';
import { CommonIcon } from '../icon';

export const CheckBox = ({
  size = 'm',
  disabled,
  value,
  onPress,
  ...props
}: CheckBoxProps) => {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        sizeType[size],
        styles.container,
        disabled
          ? { borderColor: theme.colors.disabled }
          : { borderColor: theme.colors.primary },
      ]}
      disabled={disabled}
      {...props}
    >
      {value && (
        <CommonIcon
          color={disabled ? theme.colors.disabled : theme.colors.primary}
          iconType="check"
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});
