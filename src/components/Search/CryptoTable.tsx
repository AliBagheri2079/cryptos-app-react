import { Autocomplete, Loader, useMantineTheme } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  isSearching?: boolean;
  searchValue?: string;
  handler?: (value: string) => void;
};

const CryptoTableSearch: FC<Props> = ({
  isSearching,
  searchValue,
  handler,
}) => {
  const theme = useMantineTheme();
  const { t } = useTranslation();

  return (
    <Autocomplete
      value={searchValue}
      onChange={(value: string) => handler && handler(value)}
      data={['bitcoin', 'ethereum', 'tether', 'binancecoin']}
      placeholder={t('cryptoTableSearchPlaceholder')}
      variant='filled'
      radius='lg'
      icon={<IconSearch size={16} />}
      rightSection={isSearching && <Loader variant='dots' size='xs' />}
      /*
       TODO: CREATE DEFAULT TRANSITION, RADIUS AND ACTIVE
       TODO: CREATE UTILITY MANTINE STYLE CSS FILE
      */
      transitionProps={{
        transition: theme.dir === 'ltr' ? 'pop-top-left' : 'pop-top-right',
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
      aria-label='Search on Crypto Data'
    />
  );
};

export default CryptoTableSearch;
