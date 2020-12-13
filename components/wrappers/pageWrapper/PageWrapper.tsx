import { ThemeProvider } from "@emotion/react";
import { FC, ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  const theme = {
    colors: {
      primaryOrange: "#F5764B",
      primaryYellow: "#FFB600",
      primaryPurple: "#1D184A",
      primaryGreen: "#519B59",

      grey100: "#D8D8D8",
      grey200: "#6B6B6B",
      grey300: "#424141",
      black: "#000000",

      orange300: "#FFA300",

      red500: "#D93403",

      purple300: "#383478",
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default PageWrapper;
