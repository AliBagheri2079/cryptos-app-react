import {
  type ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { type FC, useState } from 'react';

import { createTheme } from './theme';
import Routes from '@/routes';

const App: FC = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme): void => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };
  const theme = createTheme({ colorScheme });

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        // withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
      >
        {/* <CustomFonts /> */}

        <Routes />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
