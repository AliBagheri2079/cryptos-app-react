import { Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { type FC } from 'react';

import { UserAvatarButton, UserAvatarItem } from '../Avatar';
import { useMenuStyles } from './index.style';
import { userAvatarItemData } from '@/data/userAvatarItemData';
import { randomId } from '@/utils/helpers/randomId';

const UserMenu: FC = () => {
  const { classes, cx } = useMenuStyles();
  const [userMenuOpened, handlers] = useDisclosure(false);

  return (
    <Menu
      width={260}
      position='bottom-end'
      transitionProps={{ transition: 'pop-top-right', duration: 150 }}
      // TODO: transitionProps={{ transition: 'pop-top-left', duration: 150 }}
      onClose={() => {
        handlers.close();
      }}
      onOpen={() => {
        handlers.open();
      }}
      withArrow
      arrowPosition='side'
      offset={8}
      withinPortal
    >
      <Menu.Target>
        <UserAvatarButton
          className={cx(classes.user, {
            [classes.userActive]: userMenuOpened,
          })}
          image='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
          name='Harriette Spoonlicker'
          email='hspoonlicker@outlook.com'
        />
      </Menu.Target>

      <Menu.Dropdown>
        {userAvatarItemData.map(data => (
          <UserAvatarItem key={randomId()} {...data} />
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
