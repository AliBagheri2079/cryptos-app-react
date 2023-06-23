import {
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from '@mantine/core';
import { type FC, type ReactNode } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

import { createTheme } from './theme';
import useDirection from '@/hooks/useDirection';
import useScheme from '@/hooks/useScheme';
import useTheme from '@/hooks/useTheme';

type Props = {
  children: ReactNode;
};

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

const Mantine: FC<Props> = ({ children }) => {
  const [colorScheme, toggleColorScheme] = useScheme();
  const [dir] = useDirection();
  const [primaryColor] = useTheme();

  const fontFamily =
    dir === 'ltr' ? 'Montserrat, sans-serif' : 'Sahel, sans-serif';

  const theme = createTheme({
    dir,
    colorScheme,
    fontFamily,
    primaryColor,
  });

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
        emotionCache={dir === 'rtl' ? rtlCache : undefined}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Mantine;
