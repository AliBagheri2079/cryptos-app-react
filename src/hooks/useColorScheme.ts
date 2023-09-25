import {
  useLocalStorage,
  useColorScheme as useMantineColorScheme,
} from '@mantine/hooks';

import type { ColorScheme, ToggleColorScheme } from '@/types/utility';

const useColorScheme = (): [ColorScheme, ToggleColorScheme] => {
  const preferredColorScheme = useMantineColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme: ToggleColorScheme = value => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return [colorScheme, toggleColorScheme];
};

export { useColorScheme };
