import { type DefaultMantineColor, useMantineTheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

type ChangePrimaryColorType = (value?: DefaultMantineColor) => void;

const useTheme = (): [DefaultMantineColor, ChangePrimaryColorType] => {
  const theme = useMantineTheme();

  const [primaryColor, setPrimaryColor] = useLocalStorage<DefaultMantineColor>({
    key: 'mantine-primary-color',
    defaultValue: theme.primaryColor,
    getInitialValueInEffect: true,
  });

  const changePrimaryColor: ChangePrimaryColorType = value => {
    setPrimaryColor(value ?? primaryColor);
  };

  return [primaryColor, changePrimaryColor];
};

export default useTheme;
