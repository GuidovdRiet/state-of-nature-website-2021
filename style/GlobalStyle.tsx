import React from "react";
import normalize from "emotion-normalize";

// Font Faces
import { css, Global, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        ${normalize}

        /* londrina-solid-300 - latin */
        @font-face {
          font-family: "Londrina Solid";
          font-style: normal;
          font-weight: 300;
          src: url("./fonts/londrina-solid-v10-latin-300.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("./fonts/londrina-solid-v10-latin-300.eot?#iefix")
              format("embedded-opentype"),
            /* IE6-IE8 */ url("./fonts/londrina-solid-v10-latin-300.woff2")
              format("woff2"),
            /* Super Modern Browsers */
              url("./fonts/londrina-solid-v10-latin-300.woff") format("woff"),
            /* Modern Browsers */
              url("./fonts/londrina-solid-v10-latin-300.ttf") format("truetype"),
            /* Safari, Android, iOS */
              url("./fonts/londrina-solid-v10-latin-300.svg#LondrinaSolid")
              format("svg"); /* Legacy iOS */
        }
        /* londrina-solid-regular - latin */
        @font-face {
          font-family: "Londrina Solid";
          font-style: normal;
          font-weight: 400;
          src: url("./fonts/londrina-solid-v10-latin-regular.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("./fonts/londrina-solid-v10-latin-regular.eot?#iefix")
              format("embedded-opentype"),
            /* IE6-IE8 */ url("./fonts/londrina-solid-v10-latin-regular.woff2")
              format("woff2"),
            /* Super Modern Browsers */
              url("./fonts/londrina-solid-v10-latin-regular.woff")
              format("woff"),
            /* Modern Browsers */
              url("./fonts/londrina-solid-v10-latin-regular.ttf")
              format("truetype"),
            /* Safari, Android, iOS */
              url("./fonts/londrina-solid-v10-latin-regular.svg#LondrinaSolid")
              format("svg"); /* Legacy iOS */
        }
        /* londrina-solid-900 - latin */
        @font-face {
          font-family: "Londrina Solid";
          font-style: normal;
          font-weight: 900;
          src: url("./fonts/londrina-solid-v10-latin-900.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("./fonts/londrina-solid-v10-latin-900.eot?#iefix")
              format("embedded-opentype"),
            /* IE6-IE8 */ url("./fonts/londrina-solid-v10-latin-900.woff2")
              format("woff2"),
            /* Super Modern Browsers */
              url("./fonts/londrina-solid-v10-latin-900.woff") format("woff"),
            /* Modern Browsers */
              url("./fonts/londrina-solid-v10-latin-900.ttf") format("truetype"),
            /* Safari, Android, iOS */
              url("./fonts/londrina-solid-v10-latin-900.svg#LondrinaSolid")
              format("svg"); /* Legacy iOS */
        }

        body {
          margin: 0;
          padding: 0;
          word-wrap: break-word;
          position: relative;
        }

        html {
          font-family: "Open Sans", sans-serif;
          font-size: 13px;
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
          font-family: "Londrina Solid", sans-serif;
          font-weight: 900;
        }

        h3 {
          font-family: "Londrina Solid", sans-serif;
          font-weight: 400;
        }

        /*  Reset margins on paragraphs
        Similarly, the top margin on <p>s get reset. However, we also reset the
        bottom margin to use rem units instead of em. */
        p {
          margin-top: 0;
          margin-bottom: 1em;
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
          color: ${theme.colors.black};
          text-decoration: none;
          cursor: pointer;
        }
      `}
    />
  );
};

export default GlobalStyle;
