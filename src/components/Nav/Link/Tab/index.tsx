import { Box, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { createElement, type FC } from 'react';
import { Trans } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import { useTabStyles } from './index.style';
import type NavLinkProps from '@/types/Prop/NavLink';

// TODO: Change to TabLink component
const LinkTab: FC<Omit<NavLinkProps, 'items' | 'opened'>> = ({
  label,
  link,
  icon,
}) => {
  const { classes, cx } = useTabStyles();
  const { pathname } = useLocation();

  return (
    <UnstyledButton<typeof NavLink>
      component={NavLink}
      to={link}
      w={100}
      h={90}
    >
      <Box
        h='100%'
        py='sm'
        px='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ThemeIcon
          className={cx(classes.linkIcon, {
            [classes.linkIconActive]: link === pathname,
          })}
        >
          {createElement(icon, {
            size: '24',
            stroke: '1.5',
          })}
        </ThemeIcon>

        <Text
          className={cx(classes.linkText, {
            [classes.linkTextActive]: link === pathname,
          })}
          fz='sm'
          tt='capitalize'
          ta='center'
          truncate
        >
          <Trans
            i18nKey={label}
            defaults='nav <italic>{{string}}</italic>'
            values={{ string: 'item' }}
            components={{ italic: <i /> }}
          />
        </Text>
      </Box>
    </UnstyledButton>
  );
};

export default LinkTab;
