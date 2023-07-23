import { ActionIcon, Menu, useMantineTheme } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';
import { type FC } from 'react';

import ColorSwatchComponent from '../ColorSwatch';
import useTheme from '@/hooks/useTheme';

// TODO: change structure to 'ColorInput' component
const SwitchTheme: FC = () => {
  const theme = useMantineTheme();
  const [primaryColor, changePrimaryColor] = useTheme();

  return (
    <Menu shadow='md' trigger='hover' openDelay={100} closeDelay={200}>
      <Menu.Target>
        <ActionIcon
          variant='transparent'
          color='dark'
          radius='xl'
          aria-label='Theme'
        >
          <IconColorSwatch stroke={2.5} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {Object.keys(theme.colors).map(color => (
          <Menu.Item
            key={color}
            icon={
              <ColorSwatchComponent
                defaultColor={primaryColor}
                mainColor={color}
              />
            }
            onClick={() => {
              changePrimaryColor(color);
            }}
          >
            {color}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
export default SwitchTheme;
