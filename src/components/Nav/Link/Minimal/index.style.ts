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
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .color,
    },
  },
}));
