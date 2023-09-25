import { Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { type FC } from 'react';

import AvatarButton from './Button';
import AvatarItem from './Item';
import { avatarItemData } from '@/data';
import { useDirection } from '@/hooks';
import { randomId } from '@/utils/helpers';

// TODO: CHANGE TO UserInfo
const UserAvatar: FC = () => {
  const [, handlers] = useDisclosure(false);
  const [dir] = useDirection();

  return (
    <Menu
      width={260}
      position='bottom-end'
      transitionProps={{
        transition: dir === 'ltr' ? 'pop-top-right' : 'pop-top-left',
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
        <AvatarButton
          image=''
          name='Harriette Spoonlicker'
          email='hspoonlicker@outlook.com'
        />
      </Menu.Target>

      <Menu.Dropdown
        sx={theme => ({
          borderRadius: theme.radius.sm,
        })}
      >
        {avatarItemData.map(data => {
          const id: string = randomId();
          return <AvatarItem key={id} {...data} />;
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserAvatar;
