import type { ComponentPropsWithoutRef } from 'react';

import type { IconProp } from './Icon';

type AvatarItemBasic = {
  title: string;
  link: string;
  icon: IconProp;
  iconColor?: string;
  shortcut?: string;
};

type AvatarItemProp = {
  label?: string;
  items: AvatarItemBasic[];
  divider?: boolean;
};

interface AvatarButtonProp extends ComponentPropsWithoutRef<'button'> {
  image?: string;
  name: string;
  email: string;
}

export type { AvatarItemBasic, AvatarItemProp, AvatarButtonProp };
