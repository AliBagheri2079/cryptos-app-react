import { Avatar, Button } from '@mantine/core';
import { spotlight, SpotlightProvider } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';
import { IconSearch } from '@tabler/icons-react';
import { type FC, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import searchOnCoingecko from '@/services/crypto/searchOnCoingecko';
import type SearchOnCoingeckoData from '@/types/Api/Crypto/Data/SearchOnCoingecko';
import type SearchOnCoingeckoParams from '@/types/Api/Crypto/Params/SearchOnCoingecko';
import type { AxiosRefetchItems } from '@/types/Api/global/UseAxios';

const handleSearching = (
  data: SearchOnCoingeckoData | undefined,
): SpotlightAction[] => {
  const defaultAction = [
    {
      title: 'name',
      description: 'symbol',
      onTrigger: () => undefined,
      icon: <Avatar src={null} variant='filled' radius='xl' />,
    },
  ];

  const actions = data?.coins.map(({ name, symbol, thumb }) => ({
    title: name,
    description: symbol,
    onTrigger: () => undefined,
    image: (
      <Avatar src={thumb} alt={symbol} variant='filled' radius='xl'>
        {symbol}
      </Avatar>
    ),
  }));

  return actions === undefined ? defaultAction : actions;
};

const SpotlightControl: FC = () => {
  return (
    <Button
      fullWidth
      variant='outline'
      radius='xl'
      tt='capitalize'
      onClick={() => spotlight.open()}
    >
      <Trans
        i18nKey={'cryptoTableSearchControler'}
        defaults='see <italic>{{string}}</italic>'
        values={{ string: 'items' }}
        components={{ italic: <i /> }}
      />
    </Button>
  );
};

const CryptoTableSpotlight: FC = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState<string>('');

  const params: SearchOnCoingeckoParams = {
    query,
  };
  const refetchItems: AxiosRefetchItems<string | undefined> = [query];
  const { data, error, status, isLoading } = searchOnCoingecko(
    params,
    refetchItems,
  );

  const actions = handleSearching(data);

  return (
    <SpotlightProvider
      actions={actions}
      limit={5}
      query={query}
      onQueryChange={setQuery}
      searchIcon={<IconSearch size={18} />}
      shortcut={null}
      closeOnActionTrigger={false}
      searchPlaceholder={t('cryptoTableSearchPlaceholder')}
      nothingFoundMessage={t('cryptoTableSearchNotFound')}
    >
      <SpotlightControl />
    </SpotlightProvider>
  );
};

export default CryptoTableSpotlight;
