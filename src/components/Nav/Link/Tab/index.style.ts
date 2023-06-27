import { createStyles, rem } from '@mantine/core';

export const useTabStyles = createStyles(theme => ({
  linkIcon: {
    background: 'unset',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: rem(50),
    height: rem(50),

    outlineWidth: rem(8),
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    borderRadius: '100vmax',

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '22%',
      width: '30px',
      height: '30px',
      background: 'transparent',
      boxShadow: `0 -10px 0 0 ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },

    '&::before': {
      right: '102%',
      borderTopRightRadius: '25px',
    },

    '&::after': {
      left: '102%',
      borderTopLeftRadius: '25px',
    },
  },

  linkIconActive: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
      .color,
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    backdropFilter: 'blur(10px) saturate(180%)',

    outlineColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transform: 'translateY(-50%)',
  },

  linkText: {
    transform: 'translateY(150%) scale(0)',
  },

  linkTextActive: {
    transform: 'translateY(0%) scale(1)',
  },
}));
