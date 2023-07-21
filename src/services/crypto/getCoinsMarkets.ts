/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinsMarketsData from '@/types/Api/Crypto/Data/CoinsMarkets';
import type CoinsMarketsParams from '@/types/Api/Crypto/Params/CoinsMarkets';
import type {
  AxiosRefetchItems,
  AxiosResponse,
} from '@/types/Api/global/UseAxios';

type CoinsMarketsFC = (
  params: CoinsMarketsParams,
  refetchItems: AxiosRefetchItems<string | number | undefined>,
) => AxiosResponse<CoinsMarketsData[]>;

const getCoinsMarkets: CoinsMarketsFC = (params, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinsMarketsData[]>();

  useEffect(() => {
    (async () => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: '/coins/markets',
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export default getCoinsMarkets;
