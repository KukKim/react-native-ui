import { FlatList, StyleSheet } from 'react-native';
import { type CommonListProps } from './types';

const CommonList = <ItemT,>(props: CommonListProps<ItemT>) => {
  return <FlatList style={styles.container} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CommonList;
