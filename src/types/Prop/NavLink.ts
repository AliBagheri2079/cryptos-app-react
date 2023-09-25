import type { IconProp } from './Icon';

type NavLinkBasic = {
  label: string;
  link: string;
};

type NavLinkProp = NavLinkBasic & {
  icon: IconProp;
  items?: NavLinkBasic[];
  opened?: boolean;
};

export type { NavLinkBasic, NavLinkProp };
