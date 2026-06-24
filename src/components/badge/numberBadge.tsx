import { StyleSheet, View } from 'react-native';
import { CommonText } from '../text';
import {
  type NumberBadgeProps,
  expandedSizeType,
  fontSizeType,
  sizeType,
} from './types';
import { useTheme } from '../../hooks/useTheme';

const NumberBadge = ({
  type = 'primary',
  number,
  maxNumber,
  size = 'm',
  style,
  ...props
}: NumberBadgeProps) => {
  const { theme } = useTheme();
  const isExpanded = maxNumber !== undefined && number > maxNumber;
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <View
        style={[
          styles.badge,
          isExpanded ? expandedSizeType[size] : sizeType[size],
          { backgroundColor: theme.colors[type] },
        ]}
      >
        <CommonText style={[fontSizeType[size], { color: theme.colors.white }]}>
          {isExpanded ? `${maxNumber}+` : number}
        </CommonText>
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

export default NumberBadge;
