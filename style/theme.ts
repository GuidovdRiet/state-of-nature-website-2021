import { Theme } from '@emotion/react';

export const gray = {
  50: '#F9FAFB',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
};

const theme: Theme = {
  colors: {
    primaryOrange: '#F5764B',
    primaryYellow: '#FFB600',
    primaryPurple: '#1D184A',
    primaryGreen: '#519B59',

    gray,

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
