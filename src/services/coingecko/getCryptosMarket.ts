/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import { coingeckoApi } from '../api';
import { useAxios } from '@/hooks';
import type {
  CryptosMarketData,
  CryptosMarketParams,
} from '@/types/Api/Coingecko';
import type { AxiosRefetchItem, AxiosResponse } from '@/types/Api/global';

type CryptosMarketFC = (
  params: CryptosMarketParams,
  refetchItems: AxiosRefetchItem<string | number | undefined>,
) => AxiosResponse<CryptosMarketData[]>;

const getCryptosMarket: CryptosMarketFC = (params, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<CryptosMarketData[]>();

  useEffect(() => {
    (async () => {
      await axiosFetch(coingeckoApi, {
        method: 'get',
        url: '/coins/markets',
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export { getCryptosMarket };
