import { createStyles, rem } from '@mantine/core';

export const useMinimalStyles = createStyles(theme => ({
  linkIcon: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  linkIconActive: {
    '&, &:hover': {
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).hover,
      backdropFilter: 'blur(10px)',
    },
  },
}));
