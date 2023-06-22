import { Tooltip, UnstyledButton } from '@mantine/core';
import { createElement, type FC } from 'react';
import { NavLink, useMatches } from 'react-router-dom';

import { useMinimalStyles } from './index.style';
import { type NavLinkProps } from '@/global/types/NavLinkProps';

const LinkMinimal: FC<Omit<NavLinkProps, 'links' | 'opened'>> = ({
  label,
  link,
  icon,
}) => {
  const { classes, cx } = useMinimalStyles();
  const [{ pathname }] = useMatches();

  return (
    <Tooltip
      label={label}
      position='right'
      color='blue'
      radius='md'
      tt='capitalize'
      offset={5}
      withArrow
      arrowSize={5}
      transitionProps={{ transition: 'scale-x', duration: 300 }}
      events={{ hover: true, focus: true, touch: false }}
    >
      <UnstyledButton
        component={NavLink}
        to={link}
        className={cx(classes.link, { [classes.active]: link === pathname })}
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
