import GlobalStyles from "@/../style/GlobalStyle";
import theme from "@/../style/theme";
import { ThemeProvider } from "@emotion/react";
import { FC, ReactNode } from "react";

interface PageWrapperProps {
  head: ReactNode;
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, head }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {head}
      {children}
    </ThemeProvider>
  );
};

export default PageWrapper;
