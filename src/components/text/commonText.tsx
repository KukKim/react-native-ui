import { StyleSheet, Text } from 'react-native';
import { type CommonTextProps, fontSizeType } from './types';

const CommonText = ({ size = 'm', children, style }: CommonTextProps) => {
  return (
    <Text style={[styles.innerText, fontSizeType[size], style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 3,
  },
  innerText: {
    fontFamily: 'Roboto',
  },
});

export default CommonText;
