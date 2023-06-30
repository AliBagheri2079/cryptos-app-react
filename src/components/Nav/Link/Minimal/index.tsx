import { Tooltip, UnstyledButton, useMantineTheme } from '@mantine/core';
import { createElement, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useMatches } from 'react-router-dom';

import { useMinimalStyles } from './index.style';
import type NavLinkProps from '@/types/Prop/NavLink';

const LinkMinimal: FC<Omit<NavLinkProps, 'items' | 'opened'>> = ({
  label,
  link,
  icon,
}) => {
  const { classes, cx } = useMinimalStyles();
  const [{ pathname }] = useMatches();
  const theme = useMantineTheme();
  const { t } = useTranslation();

  return (
    <Tooltip
      label={t(label)}
      position='right'
      color={theme.primaryColor}
      radius='md'
      tt='capitalize'
      offset={5}
      withArrow
      arrowSize={5}
      transitionProps={{
        transition: theme.dir === 'ltr' ? 'slide-right' : 'slide-left',
        duration: 300,
      }}
      events={{ hover: true, focus: true, touch: false }}
    >
      <UnstyledButton<typeof NavLink>
        component={NavLink}
        to={link}
        className={cx(classes.linkIcon, {
          [classes.linkIconActive]: link === pathname,
        })}
      >
        {createElement(icon, {
          size: '24',
          stroke: '1.5',
        })}
      </UnstyledButton>
    </Tooltip>
  );
};

export default LinkMinimal;
