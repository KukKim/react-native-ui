import { StyleSheet, View } from 'react-native';
import { type ProgressBarProps } from './types';
import { useTheme } from '../../hooks/useTheme';

const LinearProgressBar = ({
  type = 'primary',
  value,
  style,
  ...props
}: ProgressBarProps) => {
  const { theme } = useTheme();
  const progress = Math.min(Math.max(value, 0), 1);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.disabled,
        },
        style,
      ]}
      {...props}
    >
      <View
        style={[
          styles.progress,
          {
            width: `${progress * 100}%`,
            backgroundColor: theme.colors[type],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 999,
  },
});

export default LinearProgressBar;
