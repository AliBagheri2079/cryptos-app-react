import { Box, Group, Header } from '@mantine/core';
import { type FC } from 'react';

import { BrandLogo } from '@/components/Brand';
import { SwitchScheme, SwitchTheme } from '@/components/Switch';
import { ToggleLanguage } from '@/components/Toggle';
import UserMenu from '@/components/User/Menu';

const HeaderLayout: FC = () => {
  const Logo = (
    <Box
      sx={theme => ({
        marginInlineEnd: 'auto',

        [theme.fn.largerThan('sm')]: {
          display: 'none',
        },
      })}
    >
      <BrandLogo />
    </Box>
  );

  return (
    <Header height={50} sx={{ border: 'unset' }}>
      <Group
        position='right'
        spacing='md'
        sx={{
          '& > *': {
            flexShrink: 1,
          },
        }}
      >
        {Logo}
        <SwitchScheme />
        <SwitchTheme />
        <ToggleLanguage />
        <UserMenu />
      </Group>
    </Header>
  );
};

export default HeaderLayout;
