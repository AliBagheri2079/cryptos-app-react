/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinMarketData from '@/types/Api/Crypto/Data/CoinMarket';
import type CoinMarketParams from '@/types/Api/Crypto/Params/CoinMarket';
import type ApiResponse from '@/types/Api/global/Response';

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
