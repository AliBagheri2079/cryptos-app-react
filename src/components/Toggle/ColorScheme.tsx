import { Group, Switch, useMantineTheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { type FC } from 'react';

import { useColorScheme } from '@/hooks';

const ToggleColorScheme: FC = () => {
  const [colorScheme, toggleColorScheme] = useColorScheme();
  const theme = useMantineTheme();

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  const SunIcon = (
    <IconSun size={15} stroke={2.5} color={theme.colors.yellow[4]} />
  );
  const MoonIcon = (
    <IconMoonStars size={15} stroke={2.5} color={theme.colors.blue[6]} />
  );

  return (
    <Group position='center' title='Press Ctrl + J'>
      <Switch
        size='md'
        checked={colorScheme === 'dark'}
        color={colorScheme === 'dark' ? 'gray' : 'dark'}
        thumbIcon={colorScheme === 'dark' ? SunIcon : MoonIcon}
        sx={{
          '& label': {
            cursor: 'pointer',
            '& > *': {
              backgroundColor: 'unset',
              border: 'unset',
            },
          },
        }}
        onChange={() => toggleColorScheme()}
        aria-label='Toggle Color Scheme'
      />
    </Group>
  );
};

export default ToggleColorScheme;
