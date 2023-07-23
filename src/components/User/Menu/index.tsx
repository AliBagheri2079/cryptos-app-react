import { Menu, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { type FC } from 'react';

import { UserAvatarButton, UserAvatarItem } from '../Avatar';
import { useMenuStyles } from './index.style';
import { userAvatarItemData } from '@/data/userAvatar';
import { randomId } from '@/utils/helpers/randomId';

const UserMenu: FC = () => {
  const { classes, cx } = useMenuStyles();
  const [, handlers] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Menu
      width={260}
      position='bottom-end'
      transitionProps={{
        transition: theme.dir === 'ltr' ? 'pop-top-right' : 'pop-top-left',
        duration: 150,
      }}
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
          className={cx(classes.user)}
          image=''
          name='Harriette Spoonlicker'
          email='hspoonlicker@outlook.com'
        />
      </Menu.Target>

      <Menu.Dropdown className={classes.userItem}>
        {userAvatarItemData.map(data => (
          <UserAvatarItem key={randomId()} {...data} />
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
