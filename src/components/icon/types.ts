import { type ViewProps } from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const sizeType: Record<SizeVariant, number> = {
  s: 20,
  m: 24,
  l: 28,
};

export interface IconProps extends ViewProps {
  iconType:
    | 'search'
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
    | 'star_empty'
    | 'star_half'
    | 'star_full'
    | 'bookmark'
    | 'calendar'
    | 'download'
    | 'ellipsis'
    | 'heart'
    | 'house'
    | 'image'
    | 'info'
    | 'link'
    | 'mapPin'
    | 'maximize'
    | 'menu'
    | 'minimize'
    | 'pencil'
    | 'play'
    | 'plus'
    | 'search'
    | 'settings'
    | 'share'
    | 'trash'
    | 'unplug'
    | 'user'
    | 'tune';
  type?: Variant;
  size?: SizeVariant;
  color?: string;
}
