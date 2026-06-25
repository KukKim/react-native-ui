import { type ViewProps } from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const sizeType: Record<SizeVariant, number> = {
  s: 20,
  m: 24,
  l: 28,
};

export interface IconProps extends ViewProps {
  iconType: // | 'setting'
    // | 'search'
    // | 'spinner'
    | 'check'
    | 'back'
    | 'down'
    | 'close'
    | 'apple'
    | 'facebook'
    | 'google'
    | 'kakaotalk'
    | 'naver'
    | 'loaderCircle'
    // | 'close'
    // | 'tune'
    | 'star_empty'
    | 'star_half'
    | 'star_full';
  type?: Variant;
  size?: SizeVariant;
  color?: string;
}
