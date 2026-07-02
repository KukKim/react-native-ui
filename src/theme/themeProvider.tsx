import {
  createContext,
  type PropsWithChildren,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { lightTheme, darkTheme, type AppTheme, type ThemeMode } from './themes';

type ThemeContextValue = {
  theme: AppTheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

type Props = PropsWithChildren<{
  initialMode?: ThemeMode;
}>;

export function ThemeProvider({ children, initialMode = 'light' }: Props) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  const theme = useMemo(() => {
    return mode === 'dark' ? darkTheme : lightTheme;
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      mode,
      setMode,
      toggleTheme,
    }),
    [theme, mode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
