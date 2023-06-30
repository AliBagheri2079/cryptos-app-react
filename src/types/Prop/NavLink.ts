import type IconProp from './Icon';

export type NavLinkInfo = {
  label: string;
  link: string;
};

type NavLinkProps = NavLinkInfo & {
  icon: IconProp;
  items?: NavLinkInfo[];
  opened?: boolean;
};

export default NavLinkProps;
