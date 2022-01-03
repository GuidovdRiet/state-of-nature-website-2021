import React from 'react';
import normalize from 'emotion-normalize';

import { css, Global, useTheme } from '@emotion/react';

const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${normalize}

        body {
          margin: 0;
          padding: 0;
          word-wrap: break-word;
          position: relative;
          background-color: ${theme.colors.background};
        }

        html {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 13px;
          scroll-behavior: smooth;
        }

        body,
        p,
        button,
        span,
        li {
          color: ${theme.colors.black};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          background: none;
          margin-top: 0;
          margin-bottom: 0.8em;
        }

        h1,
        h2 {
          font-family: 'Londrina Solid', sans-serif;
          font-weight: 400;
        }

        h3 {
          font-family: 'Londrina Solid', sans-serif;
          font-weight: 400;
          font-size: 3.8em;
        }

        /*  Reset margins on paragraphs
        Similarly, the top margin on <p>s get reset. However, we also reset the
        bottom margin to use rem units instead of em. */
        p {
          margin-top: 0;
          margin-bottom: 1em;
          font-size: 20px;
          font-weight: 200;
          line-height: 26px;
        }

        p,
        span,
        a {
          &.secondary {
            font-size: 0.88em;

            &,
            li {
              color: ${theme.colors.black};
            }
          }
        }

        a {
          text-decoration: none;
          cursor: pointer;
        }
      `}
    />
  );
};

export default GlobalStyle;
