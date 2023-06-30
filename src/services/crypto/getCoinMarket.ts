/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import type CoinMarketData from '@/global/types/Api/Crypto/Data/CoinMarket';
import type CoinMarketParams from '@/global/types/Api/Crypto/Params/CoinMarket';
import { type ApiResponse } from '@/global/types/Api/Global/Response';
import useAxios from '@/hooks/useAxios';

type CoinMarketFC = (params: CoinMarketParams) => ApiResponse<CoinMarketData>;

const getCoinMarket: CoinMarketFC = ({ id, ...params }) => {
  const [{ response, statusCode, errorMessage, isLoading }, axiosFetch] =
    useAxios<CoinMarketData>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: `/coins/${id}`,
        params,
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, statusCode, errorMessage, isLoading };
};

export default getCoinMarket;
