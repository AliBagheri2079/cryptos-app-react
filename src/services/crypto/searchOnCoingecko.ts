/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import useAxios from '@/hooks/useAxios';
import type SearchOnCoingeckoData from '@/types/Api/Crypto/Data/SearchOnCoingecko';
import type SearchOnCoingeckoParams from '@/types/Api/Crypto/Params/SearchOnCoingecko';
import type {
  AxiosRefetchItems,
  AxiosResponse,
} from '@/types/Api/global/UseAxios';

type SearchOnCoingeckoFC = (
  params: SearchOnCoingeckoParams,
  refetchItems: AxiosRefetchItems<string | undefined>,
) => AxiosResponse<SearchOnCoingeckoData>;

const searchOnCoingecko: SearchOnCoingeckoFC = (params, refetchItems) => {
  const [axiosResponse, axiosFetch] = useAxios<SearchOnCoingeckoData>();

  useEffect(() => {
    (async () => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: '/search',
        params,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchItems);

  return axiosResponse;
};

export default searchOnCoingecko;
