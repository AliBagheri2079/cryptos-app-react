/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinCandleChartData from '@/types/Api/Crypto/Data/CoinCandleChart';
import type CoinCandleChartParams from '@/types/Api/Crypto/Params/CoinCandleChart';
import type ApiResponse from '@/types/Api/global/Response';

type CoinCandleChartFC = (
  params: CoinCandleChartParams,
) => ApiResponse<CoinCandleChartData>;

const getCoinCandleChart: CoinCandleChartFC = ({ id, ...params }) => {
  const [{ response, statusCode, errorMessage, isLoading }, axiosFetch] =
    useAxios<CoinCandleChartData>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: `/coins/${id}/ohlc`,
        params,
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, statusCode, errorMessage, isLoading };
};

export default getCoinCandleChart;
