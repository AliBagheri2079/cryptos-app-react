import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  gradiantOverlayBase: {
    width: '15rem',
    height: '25rem',
    inset: 'auto',
  },
  gradiantOverlay: {
    background: theme.fn.variant({
      variant: 'gradiant',
      color: theme.primaryColor,
    }).hover,
    borderRadius: '100vmax',
    filter: 'blur(100rem)',
  },
}));
