import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  a {
  text-decoration: none;
  font-weight: inherit;
  font-size: 12px;
  }
  img {
  display: block;
  height: auto;
    }
  ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }
  
  input {
  display: inline-block;
  padding: 4px 8px;
  margin-bottom: 20px;

  line-height: 1.4em;
  border: none;
  outline: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    box-shadow: inset 0 0 4px rgb(0 0 0 / 8%), 0 0 8px rgba(16, 141, 243, 0.9);
  }
}
`;
