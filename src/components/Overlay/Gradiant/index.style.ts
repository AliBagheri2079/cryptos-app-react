import { createStyles } from '@mantine/core';

export const useGradiantOverlayStyles = createStyles(theme => ({
  gradiantOverlayBase: {
    position: 'fixed',
    inset: 'auto',
    zIndex: -200,
  },

  gradiantOverlay: {
    width: '22rem',
    height: '33rem',
    background: `linear-gradient(180deg, ${theme.primaryColor} 0%, ${theme.primaryColor} 100%)`,
    borderRadius: '100vmax',
    filter: 'blur(100rem)',
  },
}));
