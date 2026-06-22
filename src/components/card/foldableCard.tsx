import { StyleSheet, View, Pressable } from 'react-native';
import { CommonText } from '../text';
import { type FoldableCardProps } from './types';
import { useTheme } from '../../hooks/useTheme';
// import Animated, {
//   FadeIn,
//   FadeOut,
//   LinearTransition,
// } from 'react-native-reanimated';

//TODO: React-native-reanimated 적용시키기
// const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const FoldableCard = ({
  children,
  type = 'primary',
  title,
  value,
  onPress,
}: FoldableCardProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Pressable
        // <AnimatedPressable
        style={[
          styles.titleContainer,
          {
            backgroundColor: theme.colors[type],
          },
        ]}
        onPress={onPress}
        // layout={LinearTransition.duration(200)}
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
        {/* </AnimatedPressable> */}
      </Pressable>
      {value && (
        <View
          // <Animated.View
          // entering={FadeIn}
          // exiting={FadeOut}
          style={[
            styles.contentContainer,
            {
              borderColor: theme.colors[type],
            },
          ]}
        >
          {children}
          {/* </Animated.View> */}
        </View>
      )}
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

export default FoldableCard;
