import { Pressable, StyleSheet } from 'react-native';
import { CommonIcon } from '../icon';
import { CommonText } from '../text';
import { type SocialLoginButtonProps } from './types';
import { useTheme } from '../../hooks/useTheme';

const SocialLoginButton = ({
  type = 'primary',
  provider,
  disabled,
  ...props
}: SocialLoginButtonProps) => {
  const { theme } = useTheme();

  return (
    <Pressable
      style={[
        styles.container,
        disabled
          ? {
              backgroundColor: theme.colors.disabled,
            }
          : {
              backgroundColor: theme.colors[type],
            },
      ]}
      {...props}
    >
      <CommonIcon iconType={provider} size={'m'} color={'black'} />
      <CommonText style={{ color: theme.colors.white }}>
        {'Login with ' + provider}
      </CommonText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    gap: 10,
    alignItems: 'center',
  },
});

export default SocialLoginButton;
