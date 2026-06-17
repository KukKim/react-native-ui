// theme/themes.ts

import { palette } from './color';
import { spacing, radius } from './style';

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  surface: string;
  text: string;

  white: string;
  primary: string;
  secondary: string;
  warning: string;
  danger: string;

  border: string;
  disabled: string;
}

export type ThemeSpacing = typeof spacing;
export type ThemeRadius = typeof radius;

export interface AppTheme {
  mode: ThemeMode;
  colors: ThemeColors;
  spacing: ThemeSpacing;
  radius: ThemeRadius;
}

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    background: '#FFFFFF',
    surface: palette.gray100,
    text: palette.gray900,

    white: '#FFFFFF',
    primary: palette.blue500,
    secondary: '#8E8E93',
    warning: palette.yellow500,
    danger: palette.red500,

    border: '#E5E5EA',
    disabled: '#C7C7CC',
  },
  spacing,
  radius,
};

export const darkTheme: AppTheme = {
  mode: 'dark',
  colors: {
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',

    white: '#FFFFFF',
    primary: palette.blue500,
    secondary: '#AEAEB2',
    warning: palette.yellow500,
    danger: palette.red500,

    border: '#38383A',
    disabled: '#48484A',
  },
  spacing,
  radius,
};
