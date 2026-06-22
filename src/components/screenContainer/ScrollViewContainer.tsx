import { ScrollView, StyleSheet, type ViewProps } from 'react-native';
import SafeAreaContainer from './SafeAreaContainer';

//TODO : SafeAreaContainer가 적용되지 않음.
const ScrollViewContainer = ({ children }: ViewProps) => {
  return (
    <SafeAreaContainer>
      <ScrollView style={[styles.container]}>{children}</ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScrollViewContainer;
