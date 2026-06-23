import { StyleSheet, View } from 'react-native';
import { type CommonPopOverProps } from './types';
import { CommonText } from '../text';
import { useTheme } from '../../hooks/useTheme';

// TODO: Pop Over의 위치에 대한 옵션 추가가 필요함.
const CommonPopOver = ({
  type = 'primary',
  visible,
  content,
}: CommonPopOverProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      {visible && (
        <View style={[styles.popOverContainer]}>
          <View
            style={[
              styles.arrow,
              {
                borderBottomColor: theme.colors[type],
              },
            ]}
          />

          <View
            style={[
              styles.popOver,
              {
                backgroundColor: theme.colors[type],
              },
            ]}
          >
            <CommonText style={{ color: theme.colors.white }} size="s">
              {content}
            </CommonText>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  popOverContainer: {
    position: 'absolute',
  },
  overlay: {
    flex: 1,
  },
  arrow: {
    left: 10,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
  popOver: {
    padding: 10,
    borderRadius: 10,
  },
});

export default CommonPopOver;
