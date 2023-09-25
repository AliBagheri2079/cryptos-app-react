import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles(theme => ({
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
      top: '-20%',
      width: '30px',
      height: '30px',
      background: 'transparent',
      boxShadow: `0 -10px 0 0 ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },

    '&::before': {
      right: '93%',
      borderTopRightRadius: '25px',
    },

    '&::after': {
      left: '93%',
      borderTopLeftRadius: '25px',
    },
  },

  linkIconActive: {
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
      .color,
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).hover,
    backdropFilter: 'blur(10px)',

    outlineColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transform: 'translateY(-25%)',
  },

  linkText: {
    transform: 'translateY(150%) scale(0)',
  },

  linkTextActive: {
    transform: 'translateY(25%) scale(1)',
  },
}));
