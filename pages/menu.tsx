import { css, Global, useTheme } from '@emotion/react';

function Menu() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }

          iframe {
            width: 100%;
            height: 100vh;
          }
        `}
      />
      <iframe
        src="/files/menukaart-hx-hoogcruts-DEF.pdf"
        title="Menu kaart HX Hoogcruts"
      />
    </>
  );
}

export default Menu;
