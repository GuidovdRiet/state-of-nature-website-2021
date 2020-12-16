import GlobalStyles from "@/../style/GlobalStyle";
import theme from "@/../style/theme";
import { ThemeProvider } from "@emotion/react";
import React, { FC, ReactNode } from "react";

// Components
import Navigation from "../../navigation/Navigation";

interface PageWrapperProps {
  head: ReactNode;
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, head }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      {head}
      {children}
    </ThemeProvider>
  );
};

export default PageWrapper;
