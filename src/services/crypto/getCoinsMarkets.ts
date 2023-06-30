/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import type CoinsMarketsData from '@/global/types/Api/Crypto/Data/CoinsMarkets';
import type CoinsMarketsParams from '@/global/types/Api/Crypto/Params/CoinsMarkets';
import { type ApiResponse } from '@/global/types/Api/Global/Response';
import useAxios from '@/hooks/useAxios';

type CoinsMarketsFC = (
  params: CoinsMarketsParams,
) => ApiResponse<CoinsMarketsData[]>;

const getCoinsMarkets: CoinsMarketsFC = params => {
  const [{ response, statusCode, errorMessage, isLoading }, axiosFetch] =
    useAxios<CoinsMarketsData[]>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: '/coins/markets',
        params,
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, statusCode, errorMessage, isLoading };
};

export default getCoinsMarkets;
