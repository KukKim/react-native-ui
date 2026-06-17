import { View, StyleSheet } from 'react-native';
import {
  CommonBadge,
  CommonButton,
  CommonText,
  ThemeProvider,
} from '@kukkim/react-native-ui';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <CommonBadge typeText="1" size={'s'} />
        <CommonBadge type="secondary" typeText="2" size={'m'} />
        <CommonBadge typeText="3" size={'l'} />
        <CommonText>Test text</CommonText>
        <CommonButton title={'test button'} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
