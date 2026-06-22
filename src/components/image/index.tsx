// import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { type CommonImageProps, sizeType } from './types';

export const CommonImage = ({ size = 'm', ...props }: CommonImageProps) => {
  // const [loading, setLoading] = useState(true);
  return (
    <Image
      style={[styles.container, sizeType[size]]}
      source={require('../../assets/images/defaultImage.png')}
      // onLoad={({ nativeEvent }) => {
      //   setLoading(false);
      // }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
