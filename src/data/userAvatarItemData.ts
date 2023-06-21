import {
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';

import { type UserAvatarItemProps } from '@/global/types/UserAvatarItemProps';

export const userAvatarItemData: UserAvatarItemProps[] = [
  {
    label: 'Settings',
    items: [
      {
        title: 'Account settings',
        link: '/settings',
        icon: IconSettings,
        iconColor: 'blue',
      },
      {
        title: 'Change account',
        link: '/change-account',
        icon: IconSwitchHorizontal,
        iconColor: 'orange',
        shortcut: '⌘C',
      },
      {
        title: 'Logout',
        link: '/logout',
        icon: IconLogout,
        iconColor: 'yellow',
      },
    ],
    divider: true,
  },
  {
    label: 'Danger zone',
    items: [
      {
        title: 'Delete account',
        link: '/delete-accout',
        icon: IconTrash,
        iconColor: 'red',
      },
    ],
  },
];
