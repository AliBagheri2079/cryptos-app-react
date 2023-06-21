import { Box, Group, Header } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import { type FC } from 'react';

import { BrandLogo } from '@/components/Brand';
import { SwitchScheme } from '@/components/Switch';
import { ToggleLanguage } from '@/components/Toggle';
import UserMenu from '@/components/User/Menu';

const HeaderLayout: FC = () => {
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

        <SwitchScheme />

        {/* multi gradient colors */}
        <IconColorSwatch />

        {/* multi language options */}
        <ToggleLanguage />

        <UserMenu />
      </Group>
    </Header>
  );
};

export default HeaderLayout;
