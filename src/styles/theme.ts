import { DefaultTheme } from 'styled-components';

export type ThemeColorTypes = Extract<keyof DefaultTheme['colors'], string>;
export type ThemeShadowTypes = Extract<keyof DefaultTheme['shadows'], string>;

const myTheme: DefaultTheme = {
  // COLORS
  colors: {
    primary: '#52de97',
    primaryDark: '#42b883',

    secondary: '#8186d5',
    secondaryDark: '#494ca2',
    tertiary: '#F8E9A1',

    greyDark: '#474B4F',
    greyLight: '#f1f1f1',

    success: '#4dd599',
    danger: '#ef4b4b',

    white: '#ffffff',
    whiteBg: '#fafafa',
    black: '#222629'
  },

  // SHADOWS
  shadows: {
    light1: '0 3px 1.7rem rgba(237, 234, 229, .6)',
    light2: '0 2px .5rem rgba(237, 234, 229, .6)',
    dark1: '0 3px .5rem rgba(0, 0, 0, .3)'
  }
};

export { myTheme };
