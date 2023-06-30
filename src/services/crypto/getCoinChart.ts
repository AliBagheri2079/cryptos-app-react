/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import type CoinChartData from '@/global/types/Api/Crypto/Data/CoinChart';
import type CoinChartParams from '@/global/types/Api/Crypto/Params/CoinChart';
import { type ApiResponse } from '@/global/types/Api/Global/Response';
import useAxios from '@/hooks/useAxios';

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
