import { useState } from 'react';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { createTheme } from './theme';

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
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
        {/* <Routes /> */}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
