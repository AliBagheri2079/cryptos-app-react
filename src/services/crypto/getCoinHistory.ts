/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinHistoryData from '@/types/Api/Crypto/Data/CoinHistory';
import type CoinHistoryParams from '@/types/Api/Crypto/Params/CoinHistory';
import type ApiResponse from '@/types/Api/global/Response';

type CoinHistoryFC = (
  params: CoinHistoryParams,
) => ApiResponse<CoinHistoryData>;

const getCoinHistory: CoinHistoryFC = ({ id, ...params }) => {
  const [{ response, statusCode, errorMessage, isLoading }, axiosFetch] =
    useAxios<CoinHistoryData>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: `/coins/${id}/history`,
        params,
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, statusCode, errorMessage, isLoading };
};

export default getCoinHistory;
