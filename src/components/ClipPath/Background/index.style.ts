import { createStyles, keyframes } from '@mantine/core';

export const lightScale = keyframes({
  '0%': {
    clipPath: 'circle(75%)',
  },
});

export const darkScale = keyframes({
  from: {
    clipPath: 'circle(75%)',
  },
});

export const useClipPathBgStyles = createStyles(theme => ({
  overlay: {
    clipPath:
      theme.dir === 'ltr' ? 'circle(0% at 0% 0%)' : 'circle(0% at 100% 0%)',
    animationDuration: '750ms',
    animationTimingFunction: 'ease-in-out',
    animationDirection: 'alternate',
  },

  overlayLightActive: {
    backgroundColor: theme.colors.dark[7],
    animationName: lightScale,
  },

  overlayDarkActive: {
    backgroundColor: theme.white,
    animationName: darkScale,
  },
}));
