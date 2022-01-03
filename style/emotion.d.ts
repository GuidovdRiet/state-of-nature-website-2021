import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primaryOrange: string;
      primaryYellow: string;
      primaryPurple: string;
      primaryGreen: string;

      gray: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };

      background: string;

      black: string;
      white: string;

      orange300: string;
      red500: string;
      purple300: string;
    };
    mediaQueries: {
      extraSmallUp: string;
      extraSmallDown: string;
      smallUp: string;
      smallDown: string;
      mediumUp: string;
      mediumDown: string;
      largeUp: string;
      largeDown: string;
      extraLargeUp: string;
      extraLargeDown: string;
    };
    helpers: {
      fontSmoothing: string;
    };
  }
}
