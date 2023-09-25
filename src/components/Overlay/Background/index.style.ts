import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  bgOverlay: {
    backgroundColor: theme.colors.dark[7],
    clipPath:
      theme.dir === 'ltr' ? 'circle(0% at 0% 0%)' : 'circle(0% at 100% 0%)',
    transition: 'clip-path 3s cubic-bezier(0.25,1,0.3,1)',
  },
  darkOverlay: {
    clipPath: 'circle(75%)',
  },
}));
