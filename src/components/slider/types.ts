import { type ViewProps } from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export interface SliderProps extends ViewProps {
  type?: Variant;
  size?: SizeVariant;
  labels?: (string | number)[];
}
