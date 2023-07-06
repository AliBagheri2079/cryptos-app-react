import { Kbd, Menu } from '@mantine/core';
import { createElement, type FC } from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import type { UserAvatarItemProps } from '@/types/Prop/UserAvatar';
import { randomId } from '@/utils/helpers/randomId';

const UserAvatarItem: FC<UserAvatarItemProps> = ({ label, items, divider }) => {
  return (
    <>
      {label !== undefined && (
        <Menu.Label>
          <Trans
            i18nKey={label}
            defaults='user <italic>{{string}}</italic>'
            values={{ string: 'item' }}
            components={{ italic: <i /> }}
          />
        </Menu.Label>
      )}

      {items.map(({ title, link, icon, iconColor, shortcut }) => (
        <Menu.Item<typeof Link>
          key={randomId()}
          component={Link}
          to={link}
          icon={createElement(icon, {
            size: '15',
            color: iconColor ?? 'inherit',
            stroke: '1.5',
          })}
          rightSection={
            shortcut !== undefined && (
              <Kbd color='dimmed' sx={{ border: 'none' }}>
                {shortcut}
              </Kbd>
            )
          }
        >
          <Trans
            i18nKey={title}
            defaults='user <italic>{{string}}</italic>'
            values={{ string: 'item' }}
            components={{ italic: <i /> }}
          />
        </Menu.Item>
      ))}

      {divider !== undefined && <Menu.Divider />}
    </>
  );
};

export default UserAvatarItem;
