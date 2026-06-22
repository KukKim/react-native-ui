import {
  type TextStyle,
  type ViewProps,
  type ViewStyle,
  type ImageStyle,
  type ImageSource,
} from 'react-native';

type Variant = 'primary' | 'secondary';
type SizeVariant = 's' | 'm' | 'l';

export const sizeType: Record<SizeVariant, ViewStyle> = {
  s: { width: 16, height: 16, borderRadius: 8 },
  m: { width: 20, height: 20, borderRadius: 10 },
  l: { width: 24, height: 24, borderRadius: 12 },
};
// TODO: sizeType과 동일한 코드인데 type때문에 코드 중복이 발생함 수정필요.
export const imageSizeType: Record<SizeVariant, ImageStyle> = {
  s: { width: 16, height: 16, borderRadius: 8 },
  m: { width: 20, height: 20, borderRadius: 10 },
  l: { width: 24, height: 24, borderRadius: 12 },
};

export const fontSizeType: Record<SizeVariant, TextStyle> = {
  s: { fontSize: 10 },
  m: { fontSize: 12 },
  l: { fontSize: 14 },
};

export interface AvatarProps extends ViewProps {
  type?: Variant;
  size?: SizeVariant;
}

export interface CommonAvatarProps extends AvatarProps {
  title?: string;
  source?: ImageSource;
}
