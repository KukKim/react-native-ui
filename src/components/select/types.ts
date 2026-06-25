import { type ReactNode } from 'react';
import { type ViewProps } from 'react-native';

// type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export interface CommonSelectProps extends ViewProps {
  size?: SizeVariant;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  children: ReactNode;
}

export interface CommonSelectItemProps extends ViewProps {
  label: string;
  value: string;
}
