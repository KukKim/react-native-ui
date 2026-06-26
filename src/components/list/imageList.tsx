import { FlatList, StyleSheet } from 'react-native';
import { type CommonListProps } from './types';
// import { CommonImage } from "../image";

const ImgList = <ItemT,>(props: CommonListProps<ItemT>) => {
  return (
    <FlatList
      style={styles.container}
      // renderItem={({ item }) => <CommonImage title={item.title} />}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
  },
});

export default ImgList;
