import { Pressable, StyleSheet, View } from 'react-native';
import { CommonIcon } from '../icon';
import { useTheme } from '../../hooks/useTheme';
import { type RatingProps, sizeType } from './types';

export const CommonRating = ({
  type = 'primary',
  value,
  onChange,
  editable = false,
  size = 'm',
  maxRating = 5,
}: RatingProps) => {
  const { theme } = useTheme();
  const renderStar = (index: number) => {
    const starNumber = index + 1;

    let iconType: 'star_empty' | 'star_half' | 'star_full' = 'star_empty';

    if (value >= starNumber) {
      iconType = 'star_full';
    } else if (value >= starNumber - 0.5) {
      iconType = 'star_half';
    }

    if (!editable) {
      return (
        <View key={index}>
          <CommonIcon
            iconType={iconType}
            size={size}
            color={theme.colors[type]}
          />
        </View>
      );
    }

    return (
      <View
        key={index}
        style={[
          {
            width: sizeType[size],
            height: sizeType[size],
          },
          styles.starContainer,
        ]}
      >
        <CommonIcon
          iconType={iconType}
          size={size}
          color={theme.colors[type]}
        />

        {/* 왼쪽 절반 */}
        <Pressable
          style={[
            StyleSheet.absoluteFillObject,
            {
              width: sizeType[size] / 2,
            },
            styles.left,
          ]}
          onPress={() => {
            onChange?.(index + 0.5);
          }}
        />

        {/* 오른쪽 절반 */}
        <Pressable
          style={[
            StyleSheet.absoluteFillObject,
            {
              width: sizeType[size] / 2,
              left: sizeType[size] / 2,
            },
          ]}
          onPress={() => {
            onChange?.(index + 1);
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: maxRating }).map((_, index) => renderStar(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    left: 0,
  },
});
