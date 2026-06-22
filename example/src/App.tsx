import { StyleSheet, View } from 'react-native';
import {
  CommonBadge,
  CommonButton,
  CommonText,
  ThemeProvider,
  ScrollViewContainer,
  CommonIcon,
  CommonRating,
  CommonAvatar,
  CommonImage,
  CheckBox,
  CommonHeader,
  CommonCard,
  FoldableCard,
  LinearProgressBar,
  CircularProgressBar,
} from '@kukkim/react-native-ui';
import { useState } from 'react';

export default function App() {
  const [ratingValue, setRatingValue] = useState(0);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  return (
    <ThemeProvider>
      <ScrollViewContainer>
        <View style={styles.gap}>
          <CommonHeader
            title={'Center'}
            left={{
              icon: 'back',
              title: 'Left',
              onPress: () => console.log('Left header button pressed'),
            }}
            right={{
              icon: 'close',
              title: 'Right',
              onPress: () => console.log('Right header button pressed'),
            }}
          />
          <CommonBadge typeText="1" size={'s'} />
          <CommonBadge type="secondary" typeText="2" size={'m'} />
          <CommonBadge typeText="3" size={'l'} />
          <CommonText>Test text</CommonText>
          <CommonButton title={'test button'} />
          <CommonIcon iconType="star_full" size="s" />
          <CommonRating
            value={ratingValue}
            editable={true}
            onChange={setRatingValue}
          />
          <CommonAvatar title="DK" size="s" />
          <CommonAvatar
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            size="m"
          />
          <CommonAvatar size="l" />
          <CommonImage
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <CheckBox
            value={checkBoxValue}
            onPress={() => setCheckBoxValue(!checkBoxValue)}
          />
        </View>
        <CommonCard title={'Card'}>
          <CommonText size={'s'}>Card Content</CommonText>
        </CommonCard>
        <FoldableCard
          title={'FoldableCard'}
          value={cardOpen}
          onPress={() => setCardOpen((prev) => !prev)}
        >
          <CommonText size={'s'}>Card Content</CommonText>
        </FoldableCard>
        <LinearProgressBar value={0.3} />
        <CircularProgressBar value={0.7} size="l" />
      </ScrollViewContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  gap: {
    gap: 10,
  },
});
