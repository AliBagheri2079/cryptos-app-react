import { useTranslation } from 'react-i18next';

import { type Direction } from '@/types/utility/Direction';

type ToggleDirectionType = (value?: Direction) => void;

const useDirection = (): [Direction, ToggleDirectionType] => {
  const { i18n } = useTranslation();
  const defaultDirection: Direction = i18n.dir();

  const toggleDirection: ToggleDirectionType = value => {
    const dir = value ?? (defaultDirection === 'ltr' ? 'rtl' : 'ltr');

    document.documentElement.dir = dir;
  };

  return [defaultDirection, toggleDirection];
};

export default useDirection;
