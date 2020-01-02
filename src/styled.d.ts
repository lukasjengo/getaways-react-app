import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorPrimary: string;
    colorPrimaryDark: string;

    colorSecondary: string;
    colorSecondaryDark: string;
    colorTertiary: string;

    colorGreyDark: string;
    colorGreyLight: string;

    colorSuccess: string;
    colorDanger: string;

    colorWhite: string;
    colorWhiteBg: string;
    colorBlack: string;

    shadowLight1: string;
    shadowLight2: string;
    shadowDark1: string;
  }
}
