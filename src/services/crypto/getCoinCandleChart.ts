/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinCandleChartData from '@/types/Api/Crypto/Data/CoinCandleChart';
import type CoinCandleChartParams from '@/types/Api/Crypto/Params/CoinCandleChart';
import type {
  AxiosRefetchItems,
  AxiosResponse,
} from '@/types/Api/global/UseAxios';

type CoinCandleChartFC = (
  params: CoinCandleChartParams,
  refetchItems: AxiosRefetchItems<string | number | undefined>,
) => AxiosResponse<CoinCandleChartData>;

const getCoinCandleChart: CoinCandleChartFC = (
  { id, ...params },
  refetchItems,
) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinCandleChartData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: `/coins/${id}/ohlc`,
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export default getCoinCandleChart;
