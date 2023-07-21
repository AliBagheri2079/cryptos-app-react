/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinMarketData from '@/types/Api/Crypto/Data/CoinMarket';
import type CoinMarketParams from '@/types/Api/Crypto/Params/CoinMarket';
import type {
  AxiosRefetchItems,
  AxiosResponse,
} from '@/types/Api/global/UseAxios';

type CoinMarketFC = (
  params: CoinMarketParams,
  refetchItems: AxiosRefetchItems<string | undefined>,
) => AxiosResponse<CoinMarketData>;

const getCoinMarket: CoinMarketFC = ({ id, ...params }, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinMarketData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: `/coins/${id}`,
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export default getCoinMarket;
