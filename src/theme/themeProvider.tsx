import { createContext, type PropsWithChildren, useMemo } from 'react';
import { lightTheme, darkTheme, type AppTheme, type ThemeMode } from './themes';

type ThemeContextValue = {
  theme: AppTheme;
  mode: ThemeMode;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

type Props = PropsWithChildren<{
  mode?: ThemeMode;
}>;

export function ThemeProvider({ children, mode = 'light' }: Props) {
  const theme = useMemo(() => {
    return mode === 'dark' ? darkTheme : lightTheme;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
}
