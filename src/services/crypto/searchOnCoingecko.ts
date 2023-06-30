/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';

import cryptoApi from '../api/crypto';
import type SearchOnCoingeckoData from '@/global/types/Api/Crypto/Data/SearchOnCoingecko';
import type SearchOnCoingeckoParams from '@/global/types/Api/Crypto/Params/SearchOnCoingecko';
import { type ApiResponse } from '@/global/types/Api/Global/Response';
import useAxios from '@/hooks/useAxios';

type SearchOnCoingeckoFC = (
  params: SearchOnCoingeckoParams,
) => ApiResponse<SearchOnCoingeckoData>;

const searchOnCoingecko: SearchOnCoingeckoFC = params => {
  const [{ response, statusCode, errorMessage, isLoading }, axiosFetch] =
    useAxios<SearchOnCoingeckoData>();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: '/search',
        params,
      });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, statusCode, errorMessage, isLoading };
};

export default searchOnCoingecko;
