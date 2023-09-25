import { useLocalStorage } from '@mantine/hooks';

import type { ChangeThemeColor, ThemeColor } from '@/types/utility';

const useThemeColor = (): [ThemeColor, ChangeThemeColor] => {
  const [primaryColor, setPrimaryColor] = useLocalStorage<ThemeColor>({
    key: 'mantine-primary-color',
    defaultValue: 'yellow',
    getInitialValueInEffect: true,
  });

  const changePrimaryColor: ChangeThemeColor = value => {
    setPrimaryColor(value ?? primaryColor);
  };

  return [primaryColor, changePrimaryColor];
};

export { useThemeColor };
