import { type ViewProps, type ViewStyle } from 'react-native';

type Variant = 'primary' | 'secondary';

export interface CardProps extends ViewProps {
  type?: Variant;
}

export interface CommonCardProps extends CardProps {
  title?: string;
}

export interface FoldableCardProps extends CardProps {
  title: string;
  titleStyle?: ViewStyle;
  value: boolean;
  onPress?: () => void;
}
