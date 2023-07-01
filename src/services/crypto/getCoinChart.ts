/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinChartData from '@/types/Api/Crypto/Data/CoinChart';
import type CoinChartParams from '@/types/Api/Crypto/Params/CoinChart';
import type ApiResponse from '@/types/Api/global/Response';

type CoinChartFC = (params: CoinChartParams) => ApiResponse<CoinChartData>;

const getCoinChart: CoinChartFC = ({ id, ...params }) => {
  const [{ response, statusCode, errorMessage, isLoading }, axiosFetch] =
    useAxios<CoinChartData>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: `/coins/${id}/market_chart`,
        params,
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, statusCode, errorMessage, isLoading };
};

export default getCoinChart;
