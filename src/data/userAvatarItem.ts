import {
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';

import type UserAvatarItemProps from '@/types/Prop/UserAvatarItem';

export const userAvatarItemData: UserAvatarItemProps[] = [
  {
    label: 'user_avatar_item_1',
    items: [
      {
        title: 'user_avatar_item_1_option_1',
        link: '/settings',
        icon: IconSettings,
        iconColor: 'blue',
      },
      {
        title: 'user_avatar_item_1_option_2',
        link: '/change-account',
        icon: IconSwitchHorizontal,
        iconColor: 'orange',
        shortcut: '⌘C',
      },
      {
        title: 'user_avatar_item_1_option_3',
        link: '/logout',
        icon: IconLogout,
        iconColor: 'yellow',
      },
    ],
    divider: true,
  },
  {
    label: 'user_avatar_item_2',
    items: [
      {
        title: 'user_avatar_item_2_option_1',
        link: '/delete-accout',
        icon: IconTrash,
        iconColor: 'red',
      },
    ],
  },
];
