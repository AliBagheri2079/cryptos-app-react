import { type MantineTheme, type MantineThemeOverride } from '@mantine/core';

type ThemeFC = (props: MantineThemeOverride) => MantineThemeOverride;

export const createTheme: ThemeFC = props => {
  return {
    dir: 'ltr',
    primaryShade: {},
    // focusRing: {},
    defaultRadius: {},
    // loader: {},
    colorScheme: 'dark',
    // white: {},
    // black: {},
    colors: {},
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: {},
    transitionTimingFunction: {},
    fontFamilyMonospace: {},
    primaryColor: 'indigo',
    // respectReducedMotion: {},
    // cursorType: {},
    defaultGradient: {},
    fontSizes: {},
    radius: {},
    spacing: {},
    breakpoints: {},
    shadows: {},
    headings: {
      fontFamily: {},
      fontWeight: {},
      sizes: {
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
      },
    },
    // fn: {},
    other: {},
    activeStyles: {},
    // datesLocale: {},
    components: {},
    globalStyles: (theme: MantineTheme) => ({
      body: {
        ...theme.fn.fontStyles(),
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        overflowX: 'hidden',
      },
    }),
    focusRingStyles: {},
    ...props,
  };
};
