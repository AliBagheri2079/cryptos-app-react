import { ActionIcon, Menu, useMantineTheme } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import { type FC } from 'react';

import ThemeButton from './Button';
import { useThemeColor } from '@/hooks';
import { randomId } from '@/utils/helpers';

// TODO: CHANGE TO ThemeColors
const ThemeColor: FC = () => {
  const theme = useMantineTheme();
  const [primaryColor, changePrimaryColor] = useThemeColor();

  return (
    <Menu shadow='md' trigger='hover' openDelay={100} closeDelay={200}>
      <Menu.Target>
        <ActionIcon
          variant='transparent'
          color='dark'
          radius='xl'
          aria-label='Theme'
        >
          <IconColorSwatch stroke={2} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown
        sx={{
          borderRadius: theme.radius.sm,
        }}
      >
        {Object.keys(theme.colors).map(color => {
          const id: string = randomId();
          return (
            <Menu.Item
              key={id}
              sx={{
                borderRadius: theme.radius.sm,
              }}
              icon={
                <ThemeButton defaultColor={primaryColor} mainColor={color} />
              }
              onClick={() => changePrimaryColor(color)}
            >
              {color}
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
};

export default ThemeColor;
