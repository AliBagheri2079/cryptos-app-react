import { type IconProp } from './Icon';

type NavLinkInfoProps = {
  label: string;
  link: string;
};

export type NavLinkProps = NavLinkInfoProps & {
  icon: IconProp;
  items?: NavLinkInfoProps[];
  opened?: boolean;
};
