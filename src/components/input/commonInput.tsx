import { StyleSheet, TextInput, View } from 'react-native';
import { CommonText } from '../text';
import { type InputProps } from './types';
import { useTheme } from '../../hooks/useTheme';

const CommonInput = ({
  title,
  warningText,
  type = 'primary',
  ...props
}: InputProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      {title && <CommonText style={styles.title}>{title}</CommonText>}
      <TextInput
        style={[
          styles.textInput,
          {
            backgroundColor: theme.colors.background,
            borderColor: warningText
              ? theme.colors.warning
              : theme.colors[type],
            color: warningText ? theme.colors.warning : theme.colors.text,
          },
        ]}
        autoCapitalize="none"
        {...props}
      />
      {warningText && (
        <CommonText
          style={[styles.warningTitle, { color: theme.colors.warning }]}
        >
          {warningText}
        </CommonText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  textInput: {
    height: 30,
    paddingLeft: 5,
    // margin: 0,
    borderWidth: 1,
    borderRadius: 3,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 12,
  },
  warningTitle: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 12,
  },
});

export default CommonInput;
