import { type ColorScheme } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';

type ToggleColorSchemeType = (value?: ColorScheme) => void;

const useScheme = (): [ColorScheme, ToggleColorSchemeType] => {
  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme: ToggleColorSchemeType = value => {
    setColorScheme(value ?? (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return [colorScheme, toggleColorScheme];
};

export default useScheme;
