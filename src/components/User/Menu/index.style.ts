import { createStyles } from '@mantine/core';

export const useMenuStyles = createStyles(theme => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',
  },

  userItem: {
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    backdropFilter: 'blur(10px)',
  },
}));
