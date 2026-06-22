import { type ViewProps } from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const sizeType: Record<SizeVariant, number> = {
  s: 32,
  m: 48,
  l: 60,
};

export const strokeWidthType: Record<SizeVariant, number> = {
  s: 4,
  m: 6,
  l: 12,
};

export interface ProgressBarProps extends ViewProps {
  type?: Variant;
  size?: SizeVariant;
  value: number;
}
