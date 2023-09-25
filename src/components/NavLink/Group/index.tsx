import { Box, Collapse, Group, Text, UnstyledButton } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { createElement, type FC, useState } from 'react';
import { Trans } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import { useStyles } from './index.style';
import type { NavLinkProp } from '@/types/Prop';
import { randomId } from '@/utils/helpers';

type LinkGroupProp = {
  open?: boolean;
  handleOpen?: () => void;
  hasLinks: boolean;
};

const LinkGroupButton: FC<
  Omit<NavLinkProp, 'items' | 'opened'> & LinkGroupProp
> = ({ open, handleOpen, hasLinks, label, link, icon }) => {
  const { classes, theme, cx } = useStyles();
  const { pathname } = useLocation();

  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft;

  return (
    <UnstyledButton<typeof NavLink>
      component={NavLink}
      to={link}
      className={cx(classes.default, classes.control, {
        [classes.linkActive]: link === pathname,
      })}
      onClick={handleOpen}
    >
      <Group position='apart' spacing={0} noWrap>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {createElement(icon, {
            className: cx(classes.linkColor, classes.linkIcon),
            size: 24,
            stroke: 1.5,
          })}
          <Box ml='md'>
            <Trans
              i18nKey={label}
              defaults='nav <italic>{{string}}</italic>'
              values={{ string: 'item' }}
              components={{ italic: <i /> }}
            />
          </Box>
        </Box>

        {hasLinks ? (
          <ChevronIcon
            className={classes.chevron}
            size={15}
            stroke={1.5}
            style={{
              transform:
                open ?? false
                  ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                  : 'none',
            }}
          />
        ) : null}
      </Group>
    </UnstyledButton>
  );
};

const LinkGroupItem: FC<Pick<NavLinkProp, 'items'> & LinkGroupProp> = ({
  open,
  hasLinks,
  items,
}) => {
  const { classes, cx } = useStyles();

  return (
    <>
      {hasLinks ? (
        <Collapse
          in={open ?? false}
          transitionDuration={200}
          transitionTimingFunction='linear'
        >
          {items?.map(({ label, link }) => {
            const id: string = randomId();
            return (
              <Text<typeof NavLink>
                key={id}
                component={NavLink}
                to={link}
                className={cx(classes.default, classes.linkColor, classes.link)}
              >
                <Trans
                  i18nKey={label}
                  defaults='nav <italic>{{string}}</italic>'
                  values={{ string: 'item' }}
                  components={{ italic: <i /> }}
                />
              </Text>
            );
          })}
        </Collapse>
      ) : null}
    </>
  );
};

const NavLinkGroup: FC<NavLinkProp> = props => {
  const [isOpened, setIsOpened] = useState<boolean>(props.opened ?? false);
  const hasLinks: boolean = Array.isArray(props.items);

  const handleOpen = (): void => {
    setIsOpened(o => !o);
  };

  return (
    <>
      <LinkGroupButton
        open={isOpened}
        handleOpen={handleOpen}
        hasLinks={hasLinks}
        {...props}
      />
      <LinkGroupItem open={isOpened} hasLinks={hasLinks} {...props} />
    </>
  );
};

export default NavLinkGroup;
