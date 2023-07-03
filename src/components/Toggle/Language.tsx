import { Button } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { IconLanguage } from '@tabler/icons-react';
import { type FC } from 'react';

import useDirection from '@/hooks/useDirection';
import useLanguage from '@/hooks/useLanguage';

// TODO: replace text and icon with just cuntry flag
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
      w='4.5rem'
      uppercase
      compact
      loading={false}
      loaderPosition='right'
      rightIcon={<IconLanguage stroke={2.5} />}
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
