/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import { coingeckoApi } from '../api';
import { useAxios } from '@/hooks';
import type {
  CoinCandleChartData,
  CoinCandleChartParams,
} from '@/types/Api/Coingecko';
import type { AxiosRefetchItem, AxiosResponse } from '@/types/Api/global';

type CoinCandleChartFC = (
  params: CoinCandleChartParams,
  refetchItems: AxiosRefetchItem<string | number | undefined>,
) => AxiosResponse<CoinCandleChartData>;

const getCoinCandleChart: CoinCandleChartFC = (
  { id, ...params },
  refetchItems,
) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinCandleChartData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(coingeckoApi, {
        method: 'get',
        url: `/coins/${id}/ohlc`,
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export { getCoinCandleChart };
