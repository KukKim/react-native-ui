import { StyleSheet, View } from 'react-native';
import { CommonText } from '../text';
import { type CommonCardProps } from './types';
import { useTheme } from '../../hooks/useTheme';

const CommonCard = ({ children, type = 'primary', title }: CommonCardProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      {title && (
        <View
          style={[
            styles.titleContainer,
            {
              backgroundColor: theme.colors[type],
            },
          ]}
        >
          <CommonText
            style={[
              styles.titleText,
              {
                color: theme.colors.white,
              },
            ]}
          >
            {title}
          </CommonText>
        </View>
      )}
      <View
        style={[
          styles.contentContainer,
          {
            borderColor: theme.colors[type],
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  titleContainer: {
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginLeft: 5,
    padding: 5,
    zIndex: 1,
  },
  titleText: {
    fontSize: 20,
  },
  contentContainer: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
});

export default CommonCard;
