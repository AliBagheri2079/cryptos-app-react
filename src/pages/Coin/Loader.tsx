import { useParams } from 'react-router-dom';

import getCoinMarket from '@/services/crypto/getCoinMarket';
import type CoinMarketData from '@/types/Api/Crypto/Data/CoinMarket';
import type CoinMarketParams from '@/types/Api/Crypto/Params/CoinMarket';
import type {
  AxiosRefetchItems,
  AxiosResponse,
} from '@/types/Api/global/UseAxios';

const CoinPageLoader = (): AxiosResponse<CoinMarketData> => {
  const { id: paramId } = useParams();

  const params: CoinMarketParams = {
    id: paramId as string,
    localization: true,
    tickers: false,
    market_data: true,
    community_data: false,
    developer_data: false,
    sparkline: true,
  };
  const refetchItems: AxiosRefetchItems<undefined> = [];

  const { data, error, status, isLoading } = getCoinMarket(
    params,
    refetchItems,
  );

  return { data, error, status, isLoading };
};

export default CoinPageLoader;
