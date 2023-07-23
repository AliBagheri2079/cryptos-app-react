import type { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

import CoinInfo from '@/layouts/private/CoinInfo';
import type CoinMarketData from '@/types/Api/Crypto/Data/CoinMarket';
import type { AxiosResponse } from '@/types/Api/global/UseAxios';

const Coin: FC = () => {
  const { data } = useLoaderData() as AxiosResponse<CoinMarketData>;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${data ? data?.name : 'Coin'} Data Info`}</title>
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <CoinInfo data={data} />
    </HelmetProvider>
  );
};

export default Coin;
