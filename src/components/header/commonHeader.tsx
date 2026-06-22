import { StyleSheet, View, Pressable } from 'react-native';
import { CommonText } from '../text';
import { type HeaderProps } from './types';
import { CommonIcon } from '../icon';

const CommonHeader = ({ title, left, right, style, ...props }: HeaderProps) => {
  return (
    <View style={[styles.container, styles.flexRow, style]} {...props}>
      <View style={styles.center} pointerEvents="none">
        <CommonText size="m" numberOfLines={1}>
          {title}
        </CommonText>
      </View>
      <Pressable style={[styles.flexRow, styles.side]} onPress={left?.onPress}>
        {left?.icon ? <CommonIcon iconType={left.icon} /> : null}
        <CommonText size="m">{left?.title}</CommonText>
      </Pressable>
      <Pressable
        style={[styles.flexRow, styles.side, styles.right]}
        onPress={right?.onPress}
      >
        <CommonText size="m">{right?.title}</CommonText>
        {right?.icon ? <CommonIcon iconType={right.icon} /> : null}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 8,
    gap: 10,
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  side: {
    flex: 1,
    gap: 5,
  },
  right: {
    justifyContent: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CommonHeader;
