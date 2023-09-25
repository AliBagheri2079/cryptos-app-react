import {
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider as Provider,
} from '@mantine/core';
import type { FC, ReactNode } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

import { createTheme } from './theme';
import { useColorScheme, useDirection, useThemeColor } from '@/hooks';

type Props = {
  children: ReactNode;
};

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

const MantineProvider: FC<Props> = ({ children }) => {
  const [colorScheme, toggleColorScheme] = useColorScheme();
  const [primaryColor] = useThemeColor();
  const [dir] = useDirection();

  const fontFamily =
    dir === 'ltr' ? 'Montserrat, sans-serif' : 'Sahel, sans-serif';

  const theme = createTheme({
    dir,
    colorScheme,
    fontFamily,
    primaryColor,
  });

  return (
    <Provider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
      emotionCache={dir === 'rtl' ? rtlCache : undefined}
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        {children}
      </ColorSchemeProvider>
    </Provider>
  );
};

export default MantineProvider;
