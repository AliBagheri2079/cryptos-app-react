import { type IconProp } from '../types/IconProp';

type AvatarItemInfoProps = {
  title: string;
  link: string;
  icon: IconProp;
  iconColor?: string;
  shortcut?: string;
};

export type UserAvatarItemProps = {
  label?: string;
  items: AvatarItemInfoProps[];
  divider?: boolean;
};
