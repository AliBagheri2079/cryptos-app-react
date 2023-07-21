import { Group, Stack } from '@mantine/core';
import { type FC, useState } from 'react';

import { CryptoBigItem } from '@/components/Card';
import { CryptoTablePagination } from '@/components/Pagination';
import { CryptoTableOrder } from '@/components/Select';
import { CryptoTableSpotlight } from '@/components/Spotlight';
import { CryptoTable } from '@/components/Table';
import {
  cryptoTableColumnData as columns,
  cryptoTableOrderData as order,
} from '@/data/cryptoTable';
import useLanguage from '@/hooks/useLanguage';
import getCoinsMarkets from '@/services/crypto/getCoinsMarkets';
import type { Order } from '@/types/Api/Crypto/global';
import type CoinsMarketsParams from '@/types/Api/Crypto/Params/CoinsMarkets';
import type { AxiosRefetchItems } from '@/types/Api/global/UseAxios';

// TODO: rename to cryptos
const Crypto: FC = () => {
  //  TODO: move to store folder with recoil
  const [isEnglish] = useLanguage();
  const [activePage, setActivePage] = useState<number>(1);
  // const [searchValue, setSearchValue] = useState<string>();
  const [orderValue, setOrderValue] = useState<Order>('market_cap_desc');

  const handlePagination = (value: number): void => setActivePage(value);
  // const handleSearching = (value: string): void => setSearchValue(value);
  const handleOrder = (query: Order): void => setOrderValue(query);

  const TOTAL_CRYPTO_SIZE: number = 250;
  const MANUALL_CRYPTO_SIZE: number = 10;

  const params: CoinsMarketsParams = {
    vs_currency: 'usd',
    order: orderValue,
    per_page: MANUALL_CRYPTO_SIZE,
    page: activePage,
    sparkline: true,
    price_change_percentage: '24h',
    locale: isEnglish === 'en' ? 'en' : 'ar',
  };
  const refetchItems: AxiosRefetchItems<string | number> = [
    isEnglish,
    activePage,
    orderValue,
  ];
  const { data, error, status, isLoading } = getCoinsMarkets(
    params,
    refetchItems,
  );

  return (
    <>
      <Stack>
        <CryptoBigItem />

        <Group position='apart' grow>
          {/* TODO: HANDLE THIS TWO COMPONENT SIZES */}
          {/* <CryptoTableSearch
            isSearching={true}
            searchValue={searchValue}
            handler={handleSearching}
          /> */}
          <CryptoTableSpotlight />

          <CryptoTableOrder
            data={order}
            defaultValue={orderValue}
            orderValue={orderValue}
            handler={handleOrder}
          />
        </Group>

        <CryptoTable columns={columns} data={data} isLoading={isLoading} />

        <CryptoTablePagination
          total={TOTAL_CRYPTO_SIZE / MANUALL_CRYPTO_SIZE}
          active={activePage}
          handler={handlePagination}
        />
      </Stack>

      {/* {isLoading && <p>isLoading...</p>}

      {status}

      {!isLoading && error && <p className='fs'>{error.message}</p>}

      {!isLoading && !error && data?.length && (
        <ul>
          {data.map((post, i) => (
            <li key={i}>{`${post.id}. ${post.title}`}</li>
          ))}
        </ul>
      )}

      {!isLoading && !error && !data?.length && data?.data && (
        <p>{`userId: ${data.data?.userId}, title: ${data.data?.title}, body: ${data.data?.body}`}</p>
      )}

      {!isLoading && !error && !data && <p>No data to display</p>} */}
    </>
  );
};

export default Crypto;
