import { Box, Group, Header } from '@mantine/core';
import { type FC } from 'react';

import Brand from '@/components/Brand';
import ThemeColor from '@/components/ThemeColor';
import { ToggleColorScheme, ToggleLanguage } from '@/components/Toggle';
import UserAvatar from '@/components/UserAvatar';

const Accessbar: FC = () => {
  return (
    <Header height={50} sx={{ backgroundColor: 'unset', border: 'unset' }}>
      <Group position='apart' spacing={2}>
        <Group>
          <Box
            sx={theme => ({
              maxInlineSize: '2rem',
              [theme.fn.largerThan('sm')]: {
                display: 'none',
              },
            })}
          >
            <Brand />
          </Box>
        </Group>

        <Group
          spacing={12}
          sx={{
            '& > *': {
              flexShrink: 1,
            },
          }}
        >
          <ToggleColorScheme />
          <ThemeColor />
          <ToggleLanguage />
          <UserAvatar />
        </Group>
      </Group>
    </Header>
  );
};

export default Accessbar;
