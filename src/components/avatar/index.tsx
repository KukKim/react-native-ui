import { StyleSheet, View } from 'react-native';
import { CommonText } from '../text';
import { CommonImage } from '../image';
import {
  type CommonAvatarProps,
  fontSizeType,
  sizeType,
  imageSizeType,
} from './types';
import { useTheme } from '../../hooks/useTheme';

export const CommonAvatar = ({
  type = 'primary',
  size = 'm',
  title,
  source,
  ...props
}: CommonAvatarProps) => {
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
      {source ? (
        <CommonImage
          style={[styles.container, imageSizeType[size]]}
          source={source}
        />
      ) : (
        <CommonText
          style={[
            styles.innerText,
            fontSizeType[size],
            { color: theme.colors.white },
          ]}
        >
          {title ?? 'None'}
        </CommonText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    fontSize: 20,
  },
});
