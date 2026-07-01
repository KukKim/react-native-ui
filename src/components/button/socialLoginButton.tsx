import { StyleSheet, View } from 'react-native';
import { CommonIcon } from '../icon';
import { CommonText } from '../text';
import { type SocialLoginButtonProps } from './types';
import { useTheme } from '../../hooks/useTheme';
import CommonButton from './commonButton';

const SocialLoginButton = ({
  type = 'primary',
  provider,
  disabled,
  style,
  ...props
}: SocialLoginButtonProps) => {
  const { theme } = useTheme();

  return (
    <CommonButton type={type} disabled={disabled} style={style} {...props}>
      <View style={styles.flexDirectionRow}>
        <CommonIcon iconType={provider} size={'m'} color={theme.colors.white} />
        <CommonText style={{ color: theme.colors.white }}>
          {'Login with ' + provider}
        </CommonText>
      </View>
    </CommonButton>
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
  flexDirectionRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});

export default SocialLoginButton;
