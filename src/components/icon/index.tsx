import { StyleSheet, View } from 'react-native';
import { type IconProps, sizeType } from './types';
// import { useTheme } from '../../hooks/useTheme';
import ArrowLeft from './ArrowLeft';
import StarEmpty from './StarEmpty';
import StarHalf from './StarHalf';
import StarFull from './StarFull';
import Check from './Check';
import X from './X';
// import { ArrowDownToLine } from './ArrowDownToLine';
// import { ArrowDownWideNarrow } from './ArrowDownWideNarrow';
// import { ChevronDown } from './ChevronDown';
// import { RotateCw } from './RotateCw';
// export { SquareArrowOutUpRight } from './SquareArrowOutUpRight';

const iconMap = {
  back: ArrowLeft,
  star_empty: StarEmpty,
  star_half: StarHalf,
  star_full: StarFull,
  check: Check,
  close: X,
} as const;

export const CommonIcon = ({
  iconType,
  size = 'm',
  color = 'black',
  ...props
}: IconProps) => {
  // const { theme } = useTheme();

  const IconComponent = iconMap[iconType];
  if (!IconComponent) {
    return null;
  }

  return (
    <View style={styles.container} {...props}>
      <IconComponent
        width={sizeType[size]}
        height={sizeType[size]}
        color={color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 5,
    // padding: 5,
  },
});
