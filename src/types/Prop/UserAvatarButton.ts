import type React from 'react';

interface UserAvatarButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  image?: string;
  name: string;
  email: string;
}

export default UserAvatarButtonProps;
