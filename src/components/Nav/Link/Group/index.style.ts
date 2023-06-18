import { createStyles, getStylesRef, rem } from '@mantine/core';

export const useGroupStyles = createStyles(theme => ({
  default: {
    display: 'block',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    fontWeight: 500,
    textTransform: 'capitalize',

    [`&:not(.${getStylesRef('active')})`]: {
      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[5]
            : theme.colors.gray[0],

        [`&, & .${getStylesRef('icon')}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },
  },

  control: {
    width: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.md,
    borderRadius: theme.radius.lg,
  },

  linkColor: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[5],
  },

  link: {
    textDecoration: 'none',
    paddingLeft: rem(30),
    marginLeft: rem(30),
    fontSize: theme.fontSizes.sm,
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    ref: getStylesRef('active'),
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,

    [`&, & .${getStylesRef('icon')}`]: {
      color: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .color,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));
