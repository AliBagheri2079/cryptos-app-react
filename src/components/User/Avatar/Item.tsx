import { Kbd, Menu } from '@mantine/core';
import { createElement, type FC } from 'react';
import { Link } from 'react-router-dom';

import { type UserAvatarItemProps } from '@/global/types/UserAvatarItemProps';
import { randomId } from '@/utils/helpers/randomId';

const UserAvatarItem: FC<UserAvatarItemProps> = ({ label, items, divider }) => {
  return (
    <>
      {label !== undefined && <Menu.Label>{label}</Menu.Label>}

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
          {title}
        </Menu.Item>
      ))}

      {divider !== undefined && <Menu.Divider />}
    </>
  );
};

export default UserAvatarItem;
