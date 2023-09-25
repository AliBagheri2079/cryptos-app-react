import { Button } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { type FC } from 'react';

import { useDirection, useLanguage } from '@/hooks';

const ToggleLanguage: FC = () => {
  const [language, toggleLanguage] = useLanguage();
  const [, toggleDirection] = useDirection();

  useHotkeys([
    [
      'mod+L',
      () => {
        toggleDirection();
        toggleLanguage();
      },
    ],
  ]);

  return (
    <Button
      variant='transparent'
      radius='xl'
      size='sm'
      color='dark'
      uppercase
      compact
      loading={false}
      loaderPosition='right'
      // rightIcon={<IconLanguage stroke={2} />}
      onClick={() => {
        toggleDirection();
        toggleLanguage();
      }}
      title='Press Ctrl + L'
    >
      {language === 'en' ? 'fa' : 'en'}
    </Button>
  );
};

export default ToggleLanguage;
