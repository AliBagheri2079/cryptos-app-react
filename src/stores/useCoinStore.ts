import { useParams } from 'react-router-dom';
import useSWR, { type SWRResponse } from 'swr';

import type { CoinMarketData } from '@/types/Api/Coingecko';

const baseURL = import.meta.env.VITE_COINGECKO_BASE_URL as string;

const useCoinStore = (): SWRResponse<CoinMarketData, Error, unknown> => {
  const { id } = useParams<string>();
  const coin = id as string;

  const response = useSWR<CoinMarketData, Error>(
    () =>
      `${baseURL}/coins/${coin}?localization=true&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`,
    { suspense: true, keepPreviousData: true },
  );

  return response;
};

export { useCoinStore };
