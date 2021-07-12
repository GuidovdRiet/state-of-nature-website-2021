import { Theme } from '@emotion/react';

const theme: Theme = {
  colors: {
    primaryOrange: '#F5764B',
    primaryYellow: '#FFB600',
    primaryPurple: '#1D184A',
    primaryGreen: '#519B59',

    grey100: '#D8D8D8',
    grey200: '#6B6B6B',
    grey300: '#424141',
    grey400: '#323232',

    background: '#fbfaef',

    white: '#ffff',
    black: '#000000',

    orange300: '#FFA300',

    red500: '#D93403',

    purple300: '#383478',
  },
  breakPoints: {
    // Extra small devices (portrait phones)
    extraSmall: '575.98px',
    // Small devices (landscape phones)
    small: '767.98px',
    // Medium devices (tablets)
    medium: '991.98px',
    // Large devices (desktops)
    large: '1199.98px',
    // maxWidth screen
    extraLarge: '1283px',
  },
  helpers: {
    fontSmoothing: `
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `,
  },
};

export default theme;
