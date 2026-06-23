import { type TextStyle, type ViewProps } from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const fontSizeType: Record<SizeVariant, TextStyle> = {
  s: { fontSize: 10 },
  m: { fontSize: 12 },
  l: { fontSize: 14 },
};

export interface CommonPopOverProps extends ViewProps {
  type?: Variant;
  size?: SizeVariant;
  visible: boolean;
  content: string;
}
