/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type CoinHistoryData from '@/types/Api/Crypto/Data/CoinHistory';
import type CoinHistoryParams from '@/types/Api/Crypto/Params/CoinHistory';
import type {
  AxiosRefetchItems,
  AxiosResponse,
} from '@/types/Api/global/UseAxios';

type CoinHistoryFC = (
  params: CoinHistoryParams,
  refetchItems: AxiosRefetchItems<string | number | undefined>,
) => AxiosResponse<CoinHistoryData>;

const getCoinHistory: CoinHistoryFC = ({ id, ...params }, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinHistoryData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: `/coins/${id}/history`,
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export default getCoinHistory;
