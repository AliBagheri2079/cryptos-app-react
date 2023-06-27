import type React from 'react';

export interface UserAvatarButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  image?: string;
  name: string;
  email: string;
}
