import {
  Avatar,
  Divider,
  Group,
  Indicator,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useNetwork } from '@mantine/hooks';
import { forwardRef } from 'react';

import { type UserAvatarButtonProps } from '@/global/interfaces/UserAvatarButtonProps';
import { shortName } from '@/utils/helpers/shortName';

const UserAvatarButton = forwardRef<HTMLButtonElement, UserAvatarButtonProps>(
  function UserAvatarButton(
    { image, name, email, ...others }: UserAvatarButtonProps,
    ref,
  ) {
    const shortUserName = shortName(name, 'en-US');
    // const online = useOnlineStatus();
    const { online } = useNetwork();

    return (
      <UnstyledButton ref={ref} {...others}>
        <Group>
          <Divider orientation='vertical' />

          <Indicator
            inline
            color={online ? 'teal' : 'red'}
            position='bottom-start'
            size={10}
            offset={5}
            processing={!online}
            withBorder
          >
            <Avatar
              src={image ?? null}
              alt={shortUserName}
              variant='filled'
              radius='xl'
            >
              {shortUserName}
            </Avatar>
          </Indicator>

          <Stack
            spacing={3}
            sx={theme => ({
              flex: 1,
              width: 'calc(5rem + 5vw)',

              [theme.fn.smallerThan('sm')]: {
                display: 'none',
              },
            })}
          >
            <Text size='sm' tt='capitalize' weight={500} truncate>
              {name}
            </Text>

            <Text size='xs' color='dimmed' truncate>
              {email}
            </Text>
          </Stack>
        </Group>
      </UnstyledButton>
    );
  },
);

export default UserAvatarButton;
