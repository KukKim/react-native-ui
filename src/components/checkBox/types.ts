import { type PressableProps, type ViewStyle } from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const sizeType: Record<SizeVariant, ViewStyle> = {
  s: { width: 16, height: 16 },
  m: { width: 20, height: 20 },
  l: { width: 24, height: 24 },
};

export interface CheckBoxProps extends PressableProps {
  type?: Variant;
  size?: SizeVariant;
  value: Boolean;
}
