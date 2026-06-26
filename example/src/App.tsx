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
  CommonInput,
  CommonPopOver,
  CommonSwitch,
  CommonSpinner,
  SocialLoginButton,
  CommonSlider,
  CommonSelect,
  SelectItem,
  NumberBadge,
} from '@kukkim/react-native-ui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';

export default function App() {
  const [ratingValue, setRatingValue] = useState(0);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <GestureHandlerRootView>
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
            <NumberBadge number={1} size={'s'} />
            <NumberBadge type="secondary" number={10} size={'m'} />
            <NumberBadge number={100} maxNumber={99} size={'l'} />
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
          <CommonSelect>
            <SelectItem value={'1'} label={'item 1'} />
            <SelectItem value={'2'} label={'item 2'} />
            <SelectItem value={'3'} label={'item 3'} />
          </CommonSelect>
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
          <LinearProgressBar value={0.2} />
          <CircularProgressBar value={0.7} size="l" />
          <CommonInput
            title={'TextInput'}
            value={text}
            onChangeText={setText}
          />
          <CommonButton
            title={'Show Pop Over'}
            onPress={() => setVisible(!visible)}
          />
          <CommonPopOver
            type="secondary"
            visible={visible}
            content={'This is pop over'}
          />
          <CommonSwitch value={switchValue} onChange={setSwitchValue} />
          <SocialLoginButton provider="apple" />
          <CommonSpinner />
          <CommonSlider labels={[0, 5, 10]} />
        </ScrollViewContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gap: {
    gap: 10,
  },
});
