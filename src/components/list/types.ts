import { type FlatListProps, type ViewStyle } from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const containerType: Record<Variant, ViewStyle> = {
  primary: {},
  secondary: {},
};

export interface CommonListProps<ItemT> extends FlatListProps<ItemT> {
  type?: Variant;
  size?: SizeVariant;
}
