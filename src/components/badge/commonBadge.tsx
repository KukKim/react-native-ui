import { StyleSheet, View } from 'react-native';
import { CommonText } from '../text';
import { type CommonBadgeProps, fontSizeType, sizeType } from './types';
import { useTheme } from '../../hooks/useTheme';

// TODO: 부모컴포넌트의 정렬기준에 따라 컴포넌트의 형태가 변함.
const CommonBadge = ({
  type = 'primary',
  size = 'm',
  typeText,
  ...props
}: CommonBadgeProps) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        sizeType[size],
        { backgroundColor: theme.colors[type] },
      ]}
      {...props}
    >
      {typeText && (
        <CommonText
          style={[
            styles.innerText,
            fontSizeType[size],
            { color: theme.colors.white },
          ]}
        >
          {typeText}
        </CommonText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignSelf: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    fontSize: 20,
  },
});

export default CommonBadge;
