import { ThemeProvider } from '@emotion/react';
import React, { FC, ReactElement, ReactNode } from 'react';

// Types
import { NavigationProps } from '../../navigation/Navigation';

// Style
import GlobalStyles from '../../../style/GlobalStyle';
import theme from '../../../style/theme';

interface PageWrapperProps {
  head: ReactNode;
  children: ReactNode;
  navigation: ReactElement<NavigationProps>;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, head, navigation }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {head}
    {navigation}
    {children}
  </ThemeProvider>
);

export default PageWrapper;
