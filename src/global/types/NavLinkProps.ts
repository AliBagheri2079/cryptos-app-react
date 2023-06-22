import type React from 'react';

import { type IconProp } from '../types/IconProp';

type NavLinkInfoProps = {
  label: React.ReactNode;
  link: string;
};

export type NavLinkProps = NavLinkInfoProps & {
  icon: IconProp;
  links?: NavLinkInfoProps[];
  opened?: boolean;
};
