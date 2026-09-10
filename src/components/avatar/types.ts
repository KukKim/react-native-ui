import {
  type TextStyle,
  type ViewProps,
  type ViewStyle,
  type ImageStyle,
  type ImageSource,
} from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 'xs' | 's' | 'm' | 'l' | 'xl';

export const sizeType: Record<SizeVariant, ViewStyle> = {
  xs: { width: 24, height: 24, borderRadius: 12 },
  s: { width: 36, height: 36, borderRadius: 18 },
  m: { width: 48, height: 48, borderRadius: 24 },
  l: { width: 60, height: 60, borderRadius: 30 },
  xl: { width: 72, height: 72, borderRadius: 36 },
};
// TODO: sizeType과 동일한 코드인데 type때문에 코드 중복이 발생함 수정필요.
export const imageSizeType: Record<SizeVariant, ImageStyle> = {
  xs: { width: 24, height: 24, borderRadius: 12 },
  s: { width: 36, height: 36, borderRadius: 18 },
  m: { width: 48, height: 48, borderRadius: 24 },
  l: { width: 60, height: 60, borderRadius: 30 },
  xl: { width: 72, height: 72, borderRadius: 36 },
};

export const fontSizeType: Record<SizeVariant, TextStyle> = {
  xs: { fontSize: 12 },
  s: { fontSize: 18 },
  m: { fontSize: 24 },
  l: { fontSize: 30 },
  xl: { fontSize: 36 },
};

export interface AvatarProps extends ViewProps {
  type?: Variant;
  size?: SizeVariant;
}

export interface CommonAvatarProps extends AvatarProps {
  title?: string;
  source?: ImageSource;
}
