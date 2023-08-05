import { css, Global } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      html,
      body,
      #root {
        width: 100%;
        height: 100%;
      }

      body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
