import { useTranslation } from 'react-i18next';

import type { Direction, ToggleDirection } from '@/types/utility';

const useDirection = (): [Direction, ToggleDirection] => {
  const { i18n } = useTranslation();
  const direction = i18n.dir() as Direction;

  const toggleDirection: ToggleDirection = value => {
    const dir = value ?? (direction === 'ltr' ? 'rtl' : 'ltr');
    document.documentElement.dir = dir;
  };

  return [direction, toggleDirection];
};

export { useDirection };
