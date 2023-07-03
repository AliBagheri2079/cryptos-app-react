import { createStyles } from '@mantine/core';

export const useMenuStyles = createStyles(theme => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',
  },

  userItem: {
    borderRadius: theme.radius.md,
  },
}));
