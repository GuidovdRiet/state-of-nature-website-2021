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

const breakpoints = {
  extraSmall: 575.98,
  small: 767.98,
  medium: 991.98,
  large: 1199.98,
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
  mediaQueries: {
    // 575.98px: extra small devices (phones, portrait phones)
    extraSmallUp: `@media screen and (min-width: ${breakpoints.extraSmall}px)`,
    extraSmallDown: `@media screen and (max-width: ${breakpoints.extraSmall}px)`,
    // 767.98px: small devices (landscape phones)
    smallUp: `@media screen and (min-width: ${breakpoints.small}px)`,
    smallDown: `@media screen and (max-width: ${breakpoints.small}px)`,
    // 991.98px: medium devices (tablets)
    mediumUp: `@media screen and (min-width: ${breakpoints.medium}px)`,
    mediumDown: `@media screen and (max-width: ${breakpoints.medium}px)`,
    // 1199.98px: large devices (desktops)
    largeUp: `@media screen and (min-width: ${breakpoints.large}px)`,
    largeDown: `@media screen and (max-width: ${breakpoints.large}px)`,
  },
  helpers: {
    fontSmoothing: `
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `,
  },
};

export default theme;
