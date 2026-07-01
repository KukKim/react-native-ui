import { Pressable, StyleSheet } from 'react-native';
import { type CommonButtonProps } from './types';
import { useTheme } from '../../hooks/useTheme';

const CommonButton = ({
  type = 'primary',
  disabled,
  children,
  style,
  ...props
}: CommonButtonProps) => {
  const { theme } = useTheme();
  return (
    <Pressable
      style={(state) => [
        styles.container,
        disabled
          ? { backgroundColor: theme.colors.disabled }
          : { backgroundColor: theme.colors[type] },
        typeof style === 'function' ? style(state) : style,
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
  },
});

export default CommonButton;
