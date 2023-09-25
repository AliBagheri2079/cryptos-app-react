/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import { coingeckoApi } from '../api';
import { useAxios } from '@/hooks';
import type {
  SearchOnCoingeckoData,
  SearchOnCoingeckoParams,
} from '@/types/Api/Coingecko';
import type { AxiosRefetchItem, AxiosResponse } from '@/types/Api/global';

type SearchOnCoingeckoFC = (
  params: SearchOnCoingeckoParams,
  refetchItems: AxiosRefetchItem<string | undefined>,
) => AxiosResponse<SearchOnCoingeckoData>;

const searchOnCoingecko: SearchOnCoingeckoFC = (params, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<SearchOnCoingeckoData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(coingeckoApi, {
        method: 'get',
        url: '/search',
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export { searchOnCoingecko };
