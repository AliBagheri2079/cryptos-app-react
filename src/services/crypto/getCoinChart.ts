/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinChartData from '@/types/Api/Crypto/Data/CoinChart';
import type CoinChartParams from '@/types/Api/Crypto/Params/CoinChart';
import type {
  AxiosRefetchItems,
  AxiosResponse,
} from '@/types/Api/global/UseAxios';

type CoinChartFC = (
  params: CoinChartParams,
  refetchItems: AxiosRefetchItems<string | number | undefined>,
) => AxiosResponse<CoinChartData>;

const getCoinChart: CoinChartFC = ({ id, ...params }, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinChartData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: `/coins/${id}/market_chart`,
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export default getCoinChart;
