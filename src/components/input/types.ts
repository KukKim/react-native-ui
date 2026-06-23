import {
  type TextInputProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const fontSizeType: Record<SizeVariant, TextStyle> = {
  s: { fontSize: 10 },
  m: { fontSize: 12 },
  l: { fontSize: 14 },
};

export interface InputProps extends TextInputProps {
  title?: string;
  type?: Variant;
  size?: SizeVariant;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  warningText?: string;
}
