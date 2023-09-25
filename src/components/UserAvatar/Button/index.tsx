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

import { useStyles } from './index.style';
import type { AvatarButtonProp } from '@/types/Prop';
import { shortName } from '@/utils/helpers';

const AvatarButton = forwardRef<HTMLButtonElement, AvatarButtonProp>(
  function AvatarButton({ image, name, email, ...others }, ref) {
    const shortUserName = shortName(name, 'en-US');
    const { online } = useNetwork();
    const { classes, cx } = useStyles();

    return (
      <UnstyledButton ref={ref} className={cx(classes.button)} {...others}>
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
            <Avatar src={image} alt={name} variant='filled' radius='xl'>
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

export default AvatarButton;
