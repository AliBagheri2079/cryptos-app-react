import {
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';

import { type AvatarItemProp } from '@/types/Prop';

const avatarItemData: AvatarItemProp[] = [
  {
    label: 'userAvatarItem_1',
    items: [
      {
        title: 'userAvatarItem_1_Option_1',
        link: '/settings',
        icon: IconSettings,
        iconColor: 'blue',
      },
      {
        title: 'userAvatarItem_1_Option_2',
        link: '/change-account',
        icon: IconSwitchHorizontal,
        iconColor: 'orange',
        shortcut: '⌘C',
      },
      {
        title: 'userAvatarItem_1_Option_3',
        link: '/logout',
        icon: IconLogout,
        iconColor: 'yellow',
      },
    ],
    divider: true,
  },
  {
    label: 'userAvatarItem_2',
    items: [
      {
        title: 'userAvatarItem_2_Option_1',
        link: '/delete-accout',
        icon: IconTrash,
        iconColor: 'red',
      },
    ],
  },
];

export { avatarItemData };
