/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import { coingeckoApi } from '../api';
import { useAxios } from '@/hooks';
import type { CoinMarketData, CoinMarketParams } from '@/types/Api/Coingecko';
import type { AxiosRefetchItem, AxiosResponse } from '@/types/Api/global';

type CoinMarketFC = (
  params: CoinMarketParams,
  refetchItems: AxiosRefetchItem<string | undefined>,
) => AxiosResponse<CoinMarketData>;

const getCoinMarket: CoinMarketFC = ({ id, ...params }, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinMarketData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(coingeckoApi, {
        method: 'get',
        url: `/coins/${id}`,
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export { getCoinMarket };
