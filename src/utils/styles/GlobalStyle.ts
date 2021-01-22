import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  a {
    color: ${colors.BLACK};
    text-decoration: none;
    font-weight: 700;
  }
`;

export default GlobalStyle;
