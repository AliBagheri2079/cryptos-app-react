import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  button: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',
  },
}));
