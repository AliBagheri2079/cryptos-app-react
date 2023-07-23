import type React from 'react';

import type IconProp from './Icon';

type AvatarItemInfo = {
  title: string;
  link: string;
  icon: IconProp;
  iconColor?: string;
  shortcut?: string;
};

type UserAvatarItemProps = {
  label?: string;
  items: AvatarItemInfo[];
  divider?: boolean;
};

interface UserAvatarButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  image?: string;
  name: string;
  email: string;
}

export type { AvatarItemInfo, UserAvatarItemProps, UserAvatarButtonProps };
