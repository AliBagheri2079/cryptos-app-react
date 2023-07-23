import { type FC, type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyle';
import theme from './theme';

type Props = {
  children: ReactNode;
};

const StyledComponent: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle $whiteColor />
      {children}
    </ThemeProvider>
  );
};

export default StyledComponent;
