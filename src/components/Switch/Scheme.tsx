import {
  Group,
  Switch,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { type FC } from 'react';

const SwitchScheme: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  useHotkeys([
    [
      'mod+J',
      () => {
        toggleColorScheme();
      },
    ],
  ]);

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
          '& label > *': {
            backgroundColor: 'unset',
            border: 'unset',
          },
        }}
        onChange={() => {
          toggleColorScheme();
        }}
        aria-label='Toggle Color Scheme'
      />
    </Group>
  );
};
export default SwitchScheme;
