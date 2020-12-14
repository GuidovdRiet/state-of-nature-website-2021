import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primaryOrange: string;
      primaryYellow: string;
      primaryPurple: string;
      primaryGreen: string;
      grey100: string;
      grey200: string;
      grey300: string;
      black: string;
      orange300: string;
      red500: string;
      purple300: string;
    };
  }
}
