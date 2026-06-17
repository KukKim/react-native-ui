import { Pressable, StyleSheet } from 'react-native';
import { CommonText } from '../text';
import { type CommonButtonProps, fontSizeType } from './types';
import { useTheme } from '../../hooks/useTheme';

const CommonButton = ({
  title,
  type = 'primary',
  size = 'm',
  disabled,
  ...props
}: CommonButtonProps) => {
  const { theme } = useTheme();
  return (
    <Pressable
      style={[
        styles.container,
        disabled
          ? { backgroundColor: theme.colors[type] }
          : { backgroundColor: theme.colors[type] },
      ]}
      {...props}
    >
      <CommonText
        style={[fontSizeType[size], { color: theme.colors.white }]}
        isInner={true}
      >
        {title}
      </CommonText>
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
