import { Box, Collapse, Group, Text, UnstyledButton } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { createElement, type FC, useState } from 'react';
import { Trans } from 'react-i18next';
import { NavLink, useMatches } from 'react-router-dom';

import { useGroupStyles } from './index.style';
import type NavLinkProps from '@/types/Prop/NavLink';
import { randomId } from '@/utils/helpers/randomId';

interface LinkGroupProp {
  open?: boolean;
  handleOpen?: () => void;
  hasLinks: boolean;
}

const LinkGroupButton: FC<
  LinkGroupProp & Omit<NavLinkProps, 'items' | 'opened'>
> = ({ open, handleOpen, hasLinks, label, link, icon }) => {
  const { classes, theme, cx } = useGroupStyles();
  const [{ pathname }] = useMatches();

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
      <Group position='apart' spacing={0}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {createElement(icon, {
            className: cx(classes.linkColor, classes.linkIcon),
            size: '24',
            stroke: '1.5',
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

        {hasLinks && (
          <ChevronIcon
            className={classes.chevron}
            size={15}
            stroke={1.5}
            style={{
              transform:
                open ?? true
                  ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                  : 'none',
            }}
          />
        )}
      </Group>
    </UnstyledButton>
  );
};
/*
 NOTE: should not use memo() because navlink update the screen
 ! const MemoizedButton = memo(LinkGroupButton);
*/

const LinkGroupItem: FC<LinkGroupProp & Pick<NavLinkProps, 'items'>> = ({
  open,
  hasLinks,
  items,
}) => {
  const { classes, cx } = useGroupStyles();

  return (
    <>
      {hasLinks ? (
        <Collapse
          in={open ?? false}
          transitionDuration={200}
          transitionTimingFunction='linear'
        >
          {items?.map(({ label, link }) => (
            <Text<typeof NavLink>
              key={randomId()}
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
          ))}
        </Collapse>
      ) : null}
    </>
  );
};
/*
 NOTE: should not use memo() because navlink update the screen
 ! const MemoizedItem = memo(LinkGroupItem);
*/

const LinkGroup: FC<NavLinkProps> = props => {
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

export default LinkGroup;
