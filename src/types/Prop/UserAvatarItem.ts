import type IconProp from './Icon';

export type AvatarItemInfo = {
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

export default UserAvatarItemProps;
