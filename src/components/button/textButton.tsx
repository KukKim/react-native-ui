// import { StyleSheet } from 'react-native';
import { CommonText } from '../text';
import { type TextButtonProps, fontSizeType } from './types';
import { useTheme } from '../../hooks/useTheme';
import CommonButton from './commonButton';

const TextButton = ({
  title,
  type = 'primary',
  size = 'm',
  disabled,
  ...props
}: TextButtonProps) => {
  const { theme } = useTheme();
  return (
    <CommonButton type={type} disabled={disabled} {...props}>
      <CommonText
        style={[fontSizeType[size], { color: theme.colors.white }]}
        isInner={true}
      >
        {title}
      </CommonText>
    </CommonButton>
  );
};

// const styles = StyleSheet.create({});

export default TextButton;
