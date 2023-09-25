import { Autocomplete, Loader } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { type FC, useEffect, useState, useTransition } from 'react';
import { useTranslation } from 'react-i18next';

import { useDirection, useLanguage } from '@/hooks';
import { useCryptosStore } from '@/stores';

const CryptosSearch: FC = () => {
  const [result, setResult] = useState<string>('');
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation();
  const [dir] = useDirection();
  const [language] = useLanguage();
  const searchCryptosData = useCryptosStore(store => store.searchCryptosData);

  useEffect(() => {
    startTransition(() => searchCryptosData(result, language));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, language]);

  return (
    <Autocomplete
      data={['bitcoin', 'ethereum', 'tether', 'binancecoin']}
      placeholder={t('cryptosSearchPlaceholder')}
      variant='filled'
      radius='lg'
      aria-label='Search on Cryptos Data'
      icon={<IconSearch size={16} />}
      rightSection={isPending ? <Loader variant='dots' size='xs' /> : null}
      value={result}
      onChange={value => setResult(value)}
      transitionProps={{
        transition: dir === 'ltr' ? 'pop-top-left' : 'pop-top-right',
        duration: 150,
        timingFunction: 'ease-in-out',
      }}
      styles={theme => ({
        dropdown: {
          borderRadius: theme.radius.md,
        },
        item: {
          borderRadius: theme.radius.md,
        },
      })}
    />
  );
};

export default CryptosSearch;
