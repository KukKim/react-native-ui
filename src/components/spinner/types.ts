import { type ViewProps } from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export interface SpinnerProps extends ViewProps {
  type?: Variant;
  size?: SizeVariant;
}
