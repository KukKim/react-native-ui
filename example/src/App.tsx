import { Text, View, StyleSheet } from 'react-native';
import { multiply, CommonText } from '@kukkim/react-native-ui';

const result = multiply(3, 7);

export default function App() {
  return (
    <View style={styles.container}>
      <CommonText>Test text</CommonText>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
