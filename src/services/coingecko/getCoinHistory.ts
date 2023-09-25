/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import { coingeckoApi } from '../api';
import { useAxios } from '@/hooks';
import type { CoinHistoryData, CoinHistoryParams } from '@/types/Api/Coingecko';
import type { AxiosRefetchItem, AxiosResponse } from '@/types/Api/global';

type CoinHistoryFC = (
  params: CoinHistoryParams,
  refetchItems: AxiosRefetchItem<string | number | undefined>,
) => AxiosResponse<CoinHistoryData>;

const getCoinHistory: CoinHistoryFC = ({ id, ...params }, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<CoinHistoryData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(coingeckoApi, {
        method: 'get',
        url: `/coins/${id}/history`,
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export { getCoinHistory };
