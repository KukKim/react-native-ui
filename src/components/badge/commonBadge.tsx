import { StyleSheet, View } from 'react-native';
import { CommonText } from '../text';
import { type CommonBadgeProps, fontSizeType, sizeType } from './types';
import { useTheme } from '../../hooks/useTheme';

const CommonBadge = ({
  type = 'primary',
  size = 'm',
  typeText,
  style,
  ...props
}: CommonBadgeProps) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.wrapper]} {...props}>
      <View
        style={[
          styles.badge,
          sizeType[size],
          { backgroundColor: theme.colors[type] },
          style,
        ]}
        {...props}
      >
        {typeText && (
          <CommonText
            style={[fontSizeType[size], { color: theme.colors.white }]}
          >
            {typeText}
          </CommonText>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
});

export default CommonBadge;
