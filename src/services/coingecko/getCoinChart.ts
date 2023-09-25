/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import { coingeckoApi } from '../api';
import { useAxios } from '@/hooks';
import type { CoinChartData, CoinChartParams } from '@/types/Api/Coingecko';
import type { AxiosRefetchItem, AxiosResponse } from '@/types/Api/global';

type CoinChartFC = (
  params: CoinChartParams,
  refetchItems: AxiosRefetchItem<string | number | undefined>,
) => AxiosResponse<CoinChartData>;

const getCoinChart: CoinChartFC = ({ id, ...params }, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinChartData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(coingeckoApi, {
        method: 'get',
        url: `/coins/${id}/market_chart`,
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export { getCoinChart };
