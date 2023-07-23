import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
  body {
    color: ${props => (props.$whiteColor ? 'white' : 'black')};
  }
`;

export default GlobalStyle;
