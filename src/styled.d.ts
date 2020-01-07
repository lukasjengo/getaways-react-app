import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;

      secondary: string;
      secondaryDark: string;
      tertiary: string;

      greyDark: string;
      greyLight: string;

      success: string;
      danger: string;

      white: string;
      whiteBg: string;
      black: string;
    };
    shadows: {
      light1: string;
      light2: string;
      dark1: string;
    };
  }
}
